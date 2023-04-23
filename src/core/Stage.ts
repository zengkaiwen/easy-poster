import { PosterBaseStyle, PosterNodeType, PosterType } from "../easy-poster";
import PosterGroup from "./Group";
import PosterNode from "./Node";
import renderer from "../renderer";
import yoga from "yoga-layout-prebuilt";

export default class PosterStage extends PosterGroup {
  public type: PosterNodeType = 'stage';
  width: number | string;
  height: number | string;

  constructor(style: PosterBaseStyle, chidren: PosterNode[], width: number, height: number) {
    super(style, chidren);

    this.width = width || style.width || 0;
    this.height = height || style.height || 0;
    this._setRenderWH();
    this._setStagetyle();
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

  private _setStagetyle() {
    this._layout.setWidth(this.width);
    this._layout.setHeight(this.height);
  }
}