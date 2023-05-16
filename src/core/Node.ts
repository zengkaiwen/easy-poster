import * as yoga from 'visual-yoga-layout-prebuilt';
import {
  PosterStyle,
  TStyleFlexDirection,
  TStyleWrap,
  PosterNodeType,
  TStylePosition,
  TStyleJustifyContent,
  TStyleAlignItems,
  TStyleAlignContent,
  TStyleAlignSelf,
  TStyleValue,
  PosterNodeBound,
} from '../types';

export default class PosterNode {
  public type: PosterNodeType = 'node';

  protected _layout: yoga.YogaNode;

  protected _style: PosterStyle;

  constructor(style: PosterStyle) {
    this._layout = yoga.Node.create();
    this._style = style;
  }

  // style
  get style(): PosterStyle {
    return this._style;
  }

  set style(s: PosterStyle) {
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

  private _setStyle<K extends keyof PosterStyle>(style: PosterStyle) {
    Object.keys(style).map((key) => this._setStyleItem(key as K));
  }

  private _setStyleItem<K extends keyof PosterStyle>(key: K) {
    const value = this._style[key];
    if (value === undefined) return;
    switch (key) {
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

  private _setMargin(val = '0 0 0 0') {
    const [top, right, bottom, left] = val.split(' ');
    this._layout.setMargin(yoga.EDGE_TOP, parseFloat(top));
    this._layout.setMargin(yoga.EDGE_RIGHT, parseFloat(right));
    this._layout.setMargin(yoga.EDGE_BOTTOM, parseFloat(bottom));
    this._layout.setMargin(yoga.EDGE_LEFT, parseFloat(left));
  }

  private _setPadding(val = '0 0 0 0') {
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
    if (top !== undefined) this._layout.setPosition(yoga.EDGE_TOP, top);
    if (right !== undefined) this._layout.setPosition(yoga.EDGE_RIGHT, right);
    if (bottom !== undefined) this._layout.setPosition(yoga.EDGE_BOTTOM, bottom);
    if (left !== undefined) this._layout.setPosition(yoga.EDGE_LEFT, left);
  }

  private _setFlexDirection(val: TStyleFlexDirection) {
    if (val === 'column') this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN);
    if (val === 'column-reverse') this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN_REVERSE);
    if (val === 'row') this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
    if (val === 'row-reverse') this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW_REVERSE);
  }

  private _setFlexWrap(val: TStyleWrap) {
    if (val === 'nowrap') this._layout.setFlexWrap(yoga.WRAP_NO_WRAP);
    if (val === 'wrap') this._layout.setFlexWrap(yoga.WRAP_WRAP);
    if (val === 'wrap-reverse') this._layout.setFlexWrap(yoga.WRAP_WRAP_REVERSE);
  }

  private _setJustifyContent(val: TStyleJustifyContent) {
    if (val === 'flex-start') this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_START);
    if (val === 'flex-end') this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_END);
    if (val === 'center') this._layout.setJustifyContent(yoga.JUSTIFY_CENTER);
    if (val === 'space-around') this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_AROUND);
    if (val === 'space-between') this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_BETWEEN);
  }

  private _setAlignItems(val: TStyleAlignItems) {
    if (val === 'baseline') this._layout.setAlignItems(yoga.ALIGN_BASELINE);
    if (val === 'center') this._layout.setAlignItems(yoga.ALIGN_CENTER);
    if (val === 'flex-end') this._layout.setAlignItems(yoga.ALIGN_FLEX_END);
    if (val === 'flex-start') this._layout.setAlignItems(yoga.ALIGN_FLEX_START);
    if (val === 'stretch') this._layout.setAlignItems(yoga.ALIGN_STRETCH);
  }

  private _setAlignContent(val: TStyleAlignContent) {
    if (val === 'baseline') this._layout.setAlignContent(yoga.ALIGN_BASELINE);
    if (val === 'center') this._layout.setAlignContent(yoga.ALIGN_CENTER);
    if (val === 'flex-end') this._layout.setAlignContent(yoga.ALIGN_FLEX_END);
    if (val === 'flex-start') this._layout.setAlignContent(yoga.ALIGN_FLEX_START);
    if (val === 'stretch') this._layout.setAlignContent(yoga.ALIGN_STRETCH);
    if (val === 'space-around') this._layout.setAlignContent(yoga.ALIGN_SPACE_AROUND);
    if (val === 'space-between') this._layout.setAlignContent(yoga.ALIGN_SPACE_BETWEEN);
  }

  private _setAlignSelf(val: TStyleAlignSelf) {
    if (val === 'baseline') this._layout.setAlignSelf(yoga.ALIGN_BASELINE);
    if (val === 'center') this._layout.setAlignSelf(yoga.ALIGN_CENTER);
    if (val === 'flex-end') this._layout.setAlignSelf(yoga.ALIGN_FLEX_END);
    if (val === 'flex-start') this._layout.setAlignSelf(yoga.ALIGN_FLEX_START);
    if (val === 'stretch') this._layout.setAlignSelf(yoga.ALIGN_STRETCH);
  }
}
