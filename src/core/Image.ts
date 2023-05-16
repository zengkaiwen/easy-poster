import { PosterStyle, PosterNodeType } from '../types';
import renderer from '../renderer';
import PosterNode from './Node';

export default class PosterImage extends PosterNode {
  public type: PosterNodeType = 'image';

  private _image: CanvasImageSource;

  constructor(style: PosterStyle, image: CanvasImageSource) {
    super(style);

    if (!image) {
      throw new Error('image node not source');
    }

    this._image = image;
  }

  get image(): CanvasImageSource {
    return this._image;
  }

  render(): boolean {
    try {
      renderer.drawImage(this);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
