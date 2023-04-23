import yoga from 'yoga-layout-prebuilt';
import type { PosterBaseStyle, TStyleFlexDirection, TStyleWrap, PosterNodeType, TStylePosition, TStyleJustifyContent, TStyleAlignItems, TStyleAlignContent, TStyleAlignSelf, TStyleValue, PosterNodeBound } from '../easy-poster';

export default class PosterNode {
  public type: PosterNodeType = 'node';

  protected _layout: yoga.YogaNode;
  protected _style: PosterBaseStyle;

  constructor(style: PosterBaseStyle) {
    this._layout = yoga.Node.create();
    this._style = style;
  }

  // style
  get style(): PosterBaseStyle {
    return this._style;
  }
  set style(s: PosterBaseStyle) {
    this._style = s;
    this._setStyle(s);
  }

  // bound
  get bound(): PosterNodeBound {
    const { left, top, width, height } = this._layout.getComputedLayout();
    return { left, top, width, height };
  }

  // layout
  get layout(): yoga.YogaNode {
    return this._layout;
  }

  render() {
    throw new Error('the render() has not been implemented.');
  }

  private _setStyle<K extends keyof PosterBaseStyle>(style: PosterBaseStyle) {
    Object.keys(style).map((key) => this._setStyleItem(key as K))
  }

  private _setStyleItem<K extends keyof PosterBaseStyle>(key:K) {
    const value = this._style[key];
    if (value === undefined) return;
    switch(key) {
      case 'width':
        this._layout.setWidth(value as TStyleValue);
        break;
      case 'height':
        this._layout.setHeight(value as TStyleValue);
        break;
      case 'maxWidth':
        this._layout.setMaxWidth(value as TStyleValue);
        break;
      case 'maxHeight':
        this._layout.setMaxHeight(value as TStyleValue);
        break;
      case 'minWidth':
        this._layout.setMinWidth(value as TStyleValue);
        break;
      case 'minHeight':
        this._layout.setMinHeight(value as TStyleValue);
        break;
      case 'margin':
        this._setMargin(value as string);
        break;
      case 'padding':
        this._setPadding(value as string);
        break;
      case 'position':
        this._setPosition(value as TStylePosition);
        break;
      case 'flex':
        this._layout.setFlex(value as number);
        break;
      case 'flexDirection':
        this._setFlexDirection(value as TStyleFlexDirection);
        break;
      case 'flexBasis':
        this._layout.setFlexBasis(value as TStyleValue);
        break;
      case 'flexGrow':
        this._layout.setFlexGrow(value as number);
        break;
      case 'flexWrap':
        this._setFlexWrap(value as TStyleWrap);
        break;
      case 'flexShrink':
        this._layout.setFlexShrink(value as number);
        break;
      case 'justifyContent':
        this._setJustifyContent(value as TStyleJustifyContent);
        break;
      case 'alignItems':
        this._setAlignItems(value as TStyleAlignItems);
        break;
      case 'alignContent':
        this._setAlignContent(value as TStyleAlignContent);
        break;
      case 'alignSelf':
        this._setAlignSelf(value as TStyleAlignSelf);
        break;
      default:
        break;
    }
  }

  private _setMargin(val: string = '0 0 0 0') {
    const [top, right, bottom, left] = val.split(' ');
    this._layout.setMargin(yoga.EDGE_TOP, parseFloat(top));
    this._layout.setMargin(yoga.EDGE_RIGHT, parseFloat(right));
    this._layout.setMargin(yoga.EDGE_BOTTOM, parseFloat(bottom));
    this._layout.setMargin(yoga.EDGE_LEFT, parseFloat(left));
  }

  private _setPadding(val: string = '0 0 0 0') {
    const [top, right, bottom, left] = val.split(' ');
    this._layout.setPadding(yoga.EDGE_TOP, parseFloat(top));
    this._layout.setPadding(yoga.EDGE_RIGHT, parseFloat(right));
    this._layout.setPadding(yoga.EDGE_BOTTOM, parseFloat(bottom));
    this._layout.setPadding(yoga.EDGE_LEFT, parseFloat(left));
  }

  private _setPosition(val: TStylePosition = 'relative') {
    if (val === 'absolute') {
      this._layout.setPositionType(yoga.POSITION_TYPE_ABSOLUTE);
    } else {
      this._layout.setPositionType(yoga.POSITION_TYPE_RELATIVE);
    }
    const { top, right, bottom, left } = this._style;
    top && (this._layout.setPosition(yoga.EDGE_TOP, top));
    right && (this._layout.setPosition(yoga.EDGE_RIGHT, right));
    bottom && (this._layout.setPosition(yoga.EDGE_BOTTOM, bottom));
    left && (this._layout.setPosition(yoga.EDGE_LEFT, left));
  }

  private _setFlexDirection(val: TStyleFlexDirection) {
    val === 'column' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN);
    val === 'column-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN_REVERSE);
    val === 'row' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
    val === 'row-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW_REVERSE);
  }

  private _setFlexWrap(val: TStyleWrap) {
    val === 'nowrap' && this._layout.setFlexWrap(yoga.WRAP_NO_WRAP);
    val === 'wrap' && this._layout.setFlexWrap(yoga.WRAP_WRAP);
    val === 'wrap-reverse' && this._layout.setFlexWrap(yoga.WRAP_WRAP_REVERSE);
  }

  private _setJustifyContent(val: TStyleJustifyContent) {
    val === 'flex-start' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_START);
    val === 'flex-end' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_END);
    val === 'center' && this._layout.setJustifyContent(yoga.JUSTIFY_CENTER);
    val === 'space-around' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_AROUND);
    val === 'space-between' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_BETWEEN);
  }

  private _setAlignItems(val: TStyleAlignItems) {
    val === 'baseline' && this._layout.setAlignItems(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignItems(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignItems(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignItems(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignItems(yoga.ALIGN_STRETCH)
  }

  private _setAlignContent(val: TStyleAlignContent) {
    val === 'baseline' && this._layout.setAlignContent(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignContent(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignContent(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignContent(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignContent(yoga.ALIGN_STRETCH)
    val === 'space-around' && this._layout.setAlignContent(yoga.ALIGN_SPACE_AROUND)
    val === 'space-between' && this._layout.setAlignContent(yoga.ALIGN_SPACE_BETWEEN)
  }

  private _setAlignSelf(val: TStyleAlignSelf) {
    val === 'baseline' && this._layout.setAlignSelf(yoga.ALIGN_BASELINE)
    val === 'center' && this._layout.setAlignSelf(yoga.ALIGN_CENTER)
    val === 'flex-end' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_END)
    val === 'flex-start' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_START)
    val === 'stretch' && this._layout.setAlignSelf(yoga.ALIGN_STRETCH)
  }
}
