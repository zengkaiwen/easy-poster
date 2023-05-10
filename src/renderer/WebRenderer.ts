import PosterImage from '../core/Image';
import PosterText from '../core/Text';
import type { PosterType } from '../easyposter';
import Renderer from './Renderer';

const mimeType: Record<PosterType, string> = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
};

export default class WebRenderer extends Renderer {
  private _canvas: HTMLCanvasElement;

  private _context: CanvasRenderingContext2D | null;

  constructor() {
    super();

    const canvas = (this._canvas = document.createElement('canvas'));
    this._context = canvas.getContext('2d');
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
  }

  drawImage(image: PosterImage) {
    const { left, top, width, height } = image.bound;
    this._context?.drawImage(image.image, left, top, width, height);
  }

  exportPoster(type: PosterType, quality: number): string {
    const mType = mimeType[type];
    const imgData = this._canvas.toDataURL(mType, quality);
    return imgData;
  }

  drawText(text: PosterText) {
    if (!this._context) return;
    const { maxWidth, width, lineHeight, left, top, fontFamily, fontSize, fontWeight, color } =
      text.style;
    // 字体
    if (fontFamily) {
      const weight = fontWeight || 500;
      const size = Number(fontSize) || '16px';
      this._context.font = `${weight} ${size}px ${fontFamily}`;
    } else {
      this._context.font = '';
    }
    // 颜色
    if (color) {
      this._context.fillStyle = color;
    } else {
      this._context.fillStyle = '#000000';
    }

    const x = Number(left) || 0;
    let y = Number(top) || 0;
    const textWidth = Number(width) || Number(maxWidth) || this.width;
    const textLineHeight =
      Number(lineHeight) ||
      parseInt(window.getComputedStyle(this._canvas).lineHeight) ||
      parseInt(window.getComputedStyle(document.body).lineHeight);
    const textArr = [...text.text];

    // 基于文本对齐的绘制方法
    const fillText = (line: string, $x: number, $y: number) => {
      let lineX: number = $x;
      const textLineWidth: number = this._context?.measureText(line)?.width || 0;
      if (text.style.textAlign === 'center') {
        lineX = $x + (textWidth - textLineWidth) * 0.5;
      }
      if (text.style.textAlign === 'right') {
        lineX = $x + (textWidth - textLineWidth);
      }
      this._context?.fillText(line, lineX, $y);
    };

    // 计算换行
    let line = '';

    for (let n = 0; n < textArr.length; n++) {
      const textLine = line + textArr[n];
      const metrics = this._context?.measureText(textLine);
      const textLineWidth = metrics?.width || 0;
      if (textLineWidth > textWidth && n > 0) {
        fillText(line, x, y);
        line = textArr[n];
        y += textLineHeight;
      } else {
        line = textLine;
      }
    }
    fillText(line, x, y);
    // TODO: 绘制完成后，修改文本的高度
  }

  toString() {
    return `WebRenderer with Canvas2D`;
  }
}
