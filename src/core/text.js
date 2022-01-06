import { schemaName } from '../constants/schema'
import PosterNode from './node'
import renderer from './renderer'

const fontStyleNames = [
  'font',
  'fontStyle',
  'fontWeight',
  'fontSize',
  'lineHeight',
  'textAlign'
]

class PosterText extends PosterNode {
  constructor(style, text = '文本') {
    super(style)

    this.type = schemaName.text
    this._filterFontStyle(style)
    this._calcRect(style)

    this.text = text
  }

  render() {
    let fontWeight = this.fontStyle.fontWeight || 'normal'
    let fontFamily = this.fontStyle.font || 'sans-serif'
    let fontSize = this.fontStyle.fontSize || 32
    let fontStyle = this.fontStyle.fontStyle || 'normal'
    let lineHeight = this.fontStyle.lineHeight || (1.2 * fontSize)
    let color = this.fontStyle.color || 'black'
    let font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
    renderer.font = font.trim()
    renderer.fillStyle = color
    renderer.textBaseline = 'top'
    const { left, top, width } = this.rect
    renderer.wrapText(this.text, left, top, width, lineHeight)
  }

  /**
   * 取出style中属于文本的样式
   * @param {Object} style 样式
   */
  _filterFontStyle(style) {
    const newStyle = {}
    for (let i=0; i<fontStyleNames.length; i++) {
      if (style[fontStyleNames[i]]) {
        newStyle[fontStyleNames[i]] = style[fontStyleNames[i]]
      }
    }
    this.fontStyle = newStyle
  }

  _calcRect(style) {
    if (style.width && style.height) return

  }
}

export default PosterText
