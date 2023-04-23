import { PosterBaseStyle, PosterNodeType } from "../easy-poster";
import renderer from "../renderer";
import PosterNode from "./Node";

export default class PosterImage extends PosterNode {
  public type: PosterNodeType = 'image';
  private _image: CanvasImageSource;

  constructor(style: PosterBaseStyle, image: CanvasImageSource) {
    super(style);

    if (!image) {
      throw new Error('image node not source');
    }

    this._image = image;
  }

  render(): boolean {
    const { left, top, width, height } = this.bound;
    renderer.drawImage(this._image, left, top, width, height);
    return true;
  }
}