import { PosterType } from "../easy-poster";
import Renderer from "./Renderer";

const mimeType: Record<PosterType, string> = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
}

export default class WebRenderer extends Renderer {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D | null;

  constructor() {
    super();

    const canvas = this._canvas = document.createElement('canvas');
    this._context = canvas.getContext('2d');
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
  }

  drawImage(
    image: CanvasImageSource,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    this._context?.drawImage(
      image,
      left,
      top,
      width,
      height,
    )
  }

  exportPoster(type: PosterType, quality: number): string {
    const mType = mimeType[type];
    const imgData = this._canvas.toDataURL(mType, quality);
    return imgData;
  }

  drawText() {
    throw new Error("Method not implemented.");
  }

  toString() {
    throw new Error("Method not implemented.");
  }

}
