import yoga from 'yoga-layout-prebuilt';
import type { PosterNodeType } from '../easy-poster';
import { filterStyle } from '../utils/style';

class Node {
  public type: PosterNodeType = 'node';

  private _layout: yoga.YogaNode;
  private _style: any;

  constructor(style) {
    this._layout = yoga.Node.create();
  }

  // style
  get style() {
    return this._style;
  }
  set style(s) {
    this._style = s;
    this._setStyle(s);
  }

  private _setStyle(style) {
    const filteredStyle = filterStyle(style);
    for (let key in filteredStyle) {
      this._setStyleItem(key, filteredStyle[key]);
    }
  }

  private _setStyleItem(styleKey, styleValue) {
    switch(styleKey) {
      case 'width':
        this._layout.setWidth(styleValue);
        break;
    }
  }
}