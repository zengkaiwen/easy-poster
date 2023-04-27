import PosterImage from "../core/Image";
import PosterText from "../core/Text";
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
    image: PosterImage
  ) {
    const { left, top, width, height } = image.bound;
    this._context?.drawImage(
      image.image,
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

  drawText(text: PosterText) {
    if (!this._context) return;
    const { maxWidth, width, lineHeight, left, top, fontFamily, fontSize, fontWeight, color } = text.style;
    if (fontFamily) {
      const weight = fontWeight || 500;
      const size = Number(fontSize) || '16px';
      this._context.font = `${weight} ${size}px ${fontFamily}`;
    } else {
      this._context.font = '';
    }

    if (color) {
      this._context.fillStyle = color;
    } else {
      this._context.fillStyle = '#000000';
    }

    const x = Number(left) || 0;
    let y = Number(top) || 0;
    const textWidth = Number(width) || Number(maxWidth) || this.width;
    const textLineHeight = Number(lineHeight)
      || parseInt(window.getComputedStyle(this._canvas).lineHeight)
      || parseInt(window.getComputedStyle(document.body).lineHeight)

    // 将字符分割成数组
    const textArr = [...text.text];
    let line = '';

    for (let n = 0; n < textArr.length; n++) {
      const textLine = line + textArr[n];
      const metrics = this._context?.measureText(textLine);
      const textLineWidth = metrics?.width || 0;
      if (textLineWidth > textWidth && n > 0) {
        this._context?.fillText(line, x, y);
        line = textArr[n];
        y += textLineHeight;
      } else {
        line = textLine;
      }
    }
    this._context?.fillText(line, x, y);
  }

  toString() {
    return `WebRenderer with Canvas2D`;
  }
}
