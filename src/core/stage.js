import yoga from 'yoga-layout-prebuilt'
import { schemaName } from '../constants/schema'
import PosterGroup from './group'
import renderer, { canvas } from './renderer'

class PosterStage extends PosterGroup {
  constructor(style, children, width, height) {
    super(style, children, 'block')

    this.width = width
    this.height = height
    this.type = schemaName.stage

    this.setCanvasWH()

    this.setStageStyle()
  }

  setCanvasWH() {
    canvas.width = this.width
    canvas.height = this.height
  }

  setStageStyle() {
    this._layout.setWidth(this.width)
    this._layout.setHeight(this.height)
  }

  /**
   * 计算所有节点布局
   */
  calculateLayout() {
    this._layout.calculateLayout(this._width, this._height, yoga.DIRECTION_LTR)
  }

  /**
   * 导出图片
   * @param {String} type 图片类型
   * @param {Number} quality 图片质量
   * @returns 
   */
  outputImage(type = 'image/png', quality = 0.6) {
    let imgData = canvas.toDataURL(type, quality)
    return imgData
  }
}

export default PosterStage
