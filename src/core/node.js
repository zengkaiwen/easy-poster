import yoga from 'yoga-layout-prebuilt'
import styleMap from '../constants/style'

class PosterNode {
  constructor(style = {}) {
    this._layout = yoga.Node.create()
    this.style = style
    this.type = 'node'
  }

  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
    this._setStyle(val)
  }

  /**
   * 返回计算之后的节点布局数据，布局内容如下
   * {left: 0, top: 0, width: 500, height: 300}
   */
  get rect() {
    return this._layout.getComputedLayout()
  }

  get layout() {
    return this._layout
  }

  render() {
    console.warn('该节点的 render 方法未实现')
  }

  /**
   * 根据传入的 style 设置布局
   * @param {Object} style 样式
   */
  _setStyle(style) {
    const newStyle = this._checkStyle(style)
    for (let key in newStyle) {
      this._setStyleItem(key, newStyle[key])
    }
  }

  _checkStyle(style) {
    const newStyle = {}
    Object.keys(style).forEach(key => {
      if (styleMap[key]) {
        newStyle[key] = style[key]
      } else {
        console.warn(`style 不包含 ${key} 属性！`)
      }
    })
    return newStyle
  }

  _setStyleItem(styleName, styleValue) {
    switch(styleName) {
      case 'width':
        this._layout.setWidth(styleValue)
        break
      case 'height':
        this._layout.setHeight(styleValue)
        break
      case 'maxWidth':
        this._layout.setMaxWidth(styleValue)
        break
      case 'minWidth':
        this._layout.setMinWidth(styleValue)
        break
      case 'maxHeight':
        this._layout.setMaxHeight(styleValue)
        break
      case 'minHeight':
        this._layout.setMinHeight(styleValue)
        break
      case 'margin':
        this._setMargin(styleValue)
        break
      case 'padding':
        this._setPadding(styleValue)
        break
      case 'position':
        this._setPosition(styleValue)
        break
      case 'flex':
        this._layout.setFlex(styleValue)
        break
      case 'flexDirection':
        this._setFlexDirection(styleValue)
        break
      case 'flexBasis':
        this._layout.setFlexBasis(styleValue)
        break
      case 'flexGrow':
        this._layout.setFlexGrow(styleValue)
        break
      case 'flexWrap':
        this._setFlexWrap(styleValue)
        break
      case 'flexShrink':
        this._layout.setFlexShrink(styleValue)
        break
      case 'justifyContent':
        this._setJustifyContent(styleValue)
        break
      case 'alignItems':
        this._setAlignItems(styleValue)
        break
      case 'alignContent':
        this._setAlignContent(styleValue)
        break
      case 'alignSelf':
        this._setAlignSelf(styleValue)
        break
      default:
        break
    }
  }

  _setMargin(val = '0 0 0 0') {
    let marginList = val.split(' ')
    this._layout.setMargin(yoga.EDGE_TOP, parseFloat(marginList[0]))
    this._layout.setMargin(yoga.EDGE_RIGHT, parseFloat(marginList[1]))
    this._layout.setMargin(yoga.EDGE_BOTTOM, parseFloat(marginList[2]))
    this._layout.setMargin(yoga.EDGE_LEFT, parseFloat(marginList[3]))
  }

  _setPadding(val = '0 0 0 0') {
    let paddingList = val.split(' ')
    this._layout.setPadding(yoga.EDGE_TOP, parseFloat(paddingList[0]))
    this._layout.setPadding(yoga.EDGE_RIGHT, parseFloat(paddingList[1]))
    this._layout.setPadding(yoga.EDGE_TOP, parseFloat(paddingList[2]))
    this._layout.setPadding(yoga.EDGE_LEFT, parseFloat(paddingList[3]))
  }

  _setPosition(val = 'relative') {
    if (val === 'absolute') {
      this._layout.setPositionType(yoga.POSITION_TYPE_ABSOLUTE)
    } else {
      this._layout.setPositionType(yoga.POSITION_TYPE_RELATIVE)
    }
    this._style['top'] !== undefined && (this._layout.setPosition(yoga.EDGE_TOP, this._style['top']))
    this._style['right'] !== undefined && (this._layout.setPosition(yoga.EDGE_RIGHT, this._style['right']))
    this._style['bottom'] !== undefined && (this._layout.setPosition(yoga.EDGE_BOTTOM, this._style['bottom']))
    this._style['left'] !== undefined && (this._layout.setPosition(yoga.EDGE_LEFT, this._style['left']))
  }

  _setFlexDirection(val) {
    val === 'row' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW)
    val === 'row-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW_REVERSE)
    val === 'column' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
    val === 'column-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN_REVERSE)
  }

  _setFlexWrap(val) {
    val === 'nowrap' && this._layout.setFlexWrap(yoga.WRAP_NO_WRAP)
    val === 'wrap' && this._layout.setFlexWrap(yoga.WRAP_WRAP)
    val === 'wrap-reverse' && this._layout.setFlexWrap(yoga.WRAP_WRAP_REVERSE)
  }

  _setJustifyContent(val) {
    val === 'flex-start' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_START)
    val === 'center' && this._layout.setJustifyContent(yoga.JUSTIFY_CENTER)
    val === 'flex-end' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_END)
    val === 'space-around' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_AROUND)
    val === 'space-between' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_BETWEEN)
  }

  _setAlignItems(val) {
    val === 'baseline' && this._layout.setAlignItems(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignItems(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignItems(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignItems(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignItems(yoga.ALIGN_STRETCH)
  }

  _setAlignContent(val) {
    val === 'baseline' && this._layout.setAlignContent(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignContent(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignContent(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignContent(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignContent(yoga.ALIGN_STRETCH)
    val === 'space-around' && this._layout.setAlignContent(yoga.ALIGN_SPACE_AROUND)
    val === 'space-between' && this._layout.setAlignContent(yoga.ALIGN_SPACE_BETWEEN)
  }

  _setAlignSelf(val) {
    val === 'baseline' && this._layout.setAlignSelf(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignSelf(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignSelf(yoga.ALIGN_STRETCH)
  }
}

export default PosterNode
