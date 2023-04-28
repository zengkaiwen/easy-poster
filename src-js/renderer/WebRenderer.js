import Renderer from "./Renderer";
const mimeType = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
};
export default class WebRenderer extends Renderer {
    constructor() {
        super();
        const canvas = this._canvas = document.createElement('canvas');
        this._context = canvas.getContext('2d');
        canvas.style.display = 'none';
        document.body.appendChild(canvas);
    }
    drawImage(image) {
        var _a;
        const { left, top, width, height } = image.bound;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.drawImage(image.image, left, top, width, height);
    }
    exportPoster(type, quality) {
        const mType = mimeType[type];
        const imgData = this._canvas.toDataURL(mType, quality);
        return imgData;
    }
    drawText(text) {
        var _a, _b, _c;
        if (!this._context)
            return;
        const { maxWidth, width, lineHeight, left, top, fontFamily, fontSize, fontWeight, color } = text.style;
        if (fontFamily) {
            const weight = fontWeight || 500;
            const size = Number(fontSize) || '16px';
            this._context.font = `${weight} ${size}px ${fontFamily}`;
        }
        else {
            this._context.font = '';
        }
        if (color) {
            this._context.fillStyle = color;
        }
        else {
            this._context.fillStyle = '#000000';
        }
        const x = Number(left) || 0;
        let y = Number(top) || 0;
        const textWidth = Number(width) || Number(maxWidth) || this.width;
        const textLineHeight = Number(lineHeight)
            || parseInt(window.getComputedStyle(this._canvas).lineHeight)
            || parseInt(window.getComputedStyle(document.body).lineHeight);
        // 将字符分割成数组
        const textArr = [...text.text];
        let line = '';
        for (let n = 0; n < textArr.length; n++) {
            const textLine = line + textArr[n];
            const metrics = (_a = this._context) === null || _a === void 0 ? void 0 : _a.measureText(textLine);
            const textLineWidth = (metrics === null || metrics === void 0 ? void 0 : metrics.width) || 0;
            if (textLineWidth > textWidth && n > 0) {
                (_b = this._context) === null || _b === void 0 ? void 0 : _b.fillText(line, x, y);
                line = textArr[n];
                y += textLineHeight;
            }
            else {
                line = textLine;
            }
        }
        (_c = this._context) === null || _c === void 0 ? void 0 : _c.fillText(line, x, y);
    }
    toString() {
        return `WebRenderer with Canvas2D`;
    }
}
