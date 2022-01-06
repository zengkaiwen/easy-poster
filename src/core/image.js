import { schemaName } from '../constants/schema'
import PosterNode from './node'
import renderer from './renderer'

class PosterImage extends PosterNode {
  constructor(style = {}, source, mode = 'fill') {
    super(style)

    if (!source) {
      throw new Error('图片节点的 source 不能为空！')
    }

    this.source = source
    this.type = schemaName.image
  }

  render() {
    const { left, top, width, height } = this.rect
    renderer.drawImage(this.source, left, top, width, height)
    return true
  }
}

export default PosterImage
