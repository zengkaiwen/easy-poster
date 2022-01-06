import '@babel/polyfill'
import easyPoster from '../src/index'
import demo1 from './schema/demo1'

easyPoster(demo1, {
  progress: (res) => {
    console.log(`进度条${res}`)
  },
  success: (res) => {
    console.log('生成成功', res)
    let img = document.createElement('img')
    img.src = res
    document.body.appendChild(img)
  }
})
