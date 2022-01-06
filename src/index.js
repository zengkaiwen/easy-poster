import './polyfill'
import PosterGroup from './core/group'
import PosterImage from './core/image'
import PosterStage from './core/stage'
import PosterText from './core/text'
import renderer from './core/renderer'
import { schemaName } from './constants/schema'



function loadParser(schema = {}, {
  progressCb,
  success,
}) {
  let curProgress = 0;
  let schemaJson = JSON.stringify(schema)
  let imgUrlRegex = /(http:|https:)?\/\/([\w\.\-%\u4E00-\u9FA5]+\/)+[\w\.\-%\u4E00-\u9FA5]+(\.(png|jpg|jpeg))/ig
  let match = schemaJson.match(imgUrlRegex)
  let totalProgress = match ? (match.length + 2) : 2
  curProgress++;

  progress()
  reParser(schema)

  function reParser(schema) {
    if (!schema.type) return schema;
    if (schema.type === schemaName.image) {
      changeImgSource(schema)
      return schema;
    }
    if (
      [schemaName.stage, schemaName.group].includes(schema.type)
      && schema.children
      && schema.children.length > 0
    ) {
      for(let i = 0; i<schema.children.length; i++) {
        reParser(schema.children[i])
      }
    }
  }

  /**
   * 修改 type为image的schema项的 source 字段为 HTMLImageElement
   * @param {Object} schema 目标schema
   */
  async function changeImgSource(schema) {
    if (typeof schema.source === 'string') {
      schema.source = await loadImage(schema.source)
      curProgress++
      progress()

      if (curProgress === (totalProgress-1) ) {
        typeof success === 'function' && success()
      }
    }
  }

  function progress() {
    typeof progressCb === 'function' && progressCb(curProgress / totalProgress)
  }
}


/**
 * 加载图片资源，返回 HTMLImageElement
 * @param {String} url
 * @returns 
 */
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = url
    image.onload = function() {
      resolve(image)
    }
    image.onerror = function(e) {
      reject(e)
    }
  })
}

/**
 * 根据 schema 生成海报图片
 * @param {Object} schema 目标schema
 * @returns 
 */
export default function (schema = {}, params = {
  progress,
  success,
}) {
  let progress = params.progress || undefined
  let success = params.success || undefined
  if (schema.type !== schemaName.stage) {
    console.error(schema)
    throw new Error('schema 不存在或一级schema.type不是stage')
  }

  // 深拷贝schema，将图片资源的 source 转成 HTMLImageElement 元素
  const localSchema = JSON.parse(JSON.stringify(schema))
  loadParser(localSchema, {
    progressCb: progress,
    success: render
  })

  /**
   * 待资源加载完成后，开始 Canvas 渲染
   */
  function render() {
    console.log('开始渲染', localSchema)
    const stage = new PosterStage(
      localSchema.style,
      localSchema.children,
      localSchema.width,
      localSchema.height,
    )
    stage.calculateLayout()
    // 递归渲染每个节点
    depthRender(stage)

    const imgResult = stage.outputImage()
    typeof progress === 'function' && progress(1)
    typeof success === 'function' && success(imgResult)
  }

  /**
   * 渲染节点
   * @param {Object} node 
   * @returns 
   */
  function depthRender(node) {
    if ([schemaName.image, schemaName.text].includes(node.type)) {
      console.log(node)
      node.render()
      return
    }
    if (node.children && node.children.length > 0) {
      for (let i=0; i<node.children.length; i++) {
        depthRender(node.children[i])
      }
    }
  }
}
