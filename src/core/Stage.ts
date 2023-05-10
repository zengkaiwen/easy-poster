import * as yoga from 'visual-yoga-layout-prebuilt';
import type { PosterStyle, PosterNodeType, PosterType } from '../easyposter';
import PosterGroup from './Group';
import PosterNode from './Node';
import renderer from '../renderer';

export default class PosterStage extends PosterGroup {
  public type: PosterNodeType = 'stage';

  width: number | string;

  height: number | string;

  constructor(style: PosterStyle, children: PosterNode[]) {
    super(style, children);

    this.width = style.width || 0;
    this.height = style.height || 0;
    this._setRenderWH();
    this._setStageStyle();
  }

  calculateLayout() {
    this._layout.calculateLayout(Number(this.width), Number(this.height), yoga.DIRECTION_LTR);
  }

  exportImageSrc(type: PosterType = 'png', quality = 0.6): string {
    return renderer.exportPoster(type, quality);
  }

  private _setRenderWH() {
    renderer.width = Number(this.width);
    renderer.height = Number(this.height);
  }

  private _setStageStyle() {
    this._layout.setWidth(this.width);
    this._layout.setHeight(this.height);
  }
}
