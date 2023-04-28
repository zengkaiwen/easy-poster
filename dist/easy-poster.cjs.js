'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var yoga = require('yoga-layout-prebuilt');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var yoga__default = /*#__PURE__*/_interopDefaultLegacy(yoga);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

class PosterNode {
    constructor(style) {
        this.type = 'node';
        this._layout = yoga__default["default"].Node.create();
        this._style = style;
    }
    // style
    get style() {
        return this._style;
    }
    set style(s) {
        this._style = s;
        this._setStyle(s);
    }
    // bound
    get bound() {
        const { left, top, width, height } = this._layout.getComputedLayout();
        return { left, top, width, height };
    }
    // layout
    get layout() {
        return this._layout;
    }
    render() {
        throw new Error('the render() has not been implemented.');
    }
    _setStyle(style) {
        Object.keys(style).map((key) => this._setStyleItem(key));
    }
    _setStyleItem(key) {
        const value = this._style[key];
        if (value === undefined)
            return;
        switch (key) {
            case 'width':
                this._layout.setWidth(value);
                break;
            case 'height':
                this._layout.setHeight(value);
                break;
            case 'maxWidth':
                this._layout.setMaxWidth(value);
                break;
            case 'maxHeight':
                this._layout.setMaxHeight(value);
                break;
            case 'minWidth':
                this._layout.setMinWidth(value);
                break;
            case 'minHeight':
                this._layout.setMinHeight(value);
                break;
            case 'margin':
                this._setMargin(value);
                break;
            case 'padding':
                this._setPadding(value);
                break;
            case 'position':
                this._setPosition(value);
                break;
            case 'flex':
                this._layout.setFlex(value);
                break;
            case 'flexDirection':
                this._setFlexDirection(value);
                break;
            case 'flexBasis':
                this._layout.setFlexBasis(value);
                break;
            case 'flexGrow':
                this._layout.setFlexGrow(value);
                break;
            case 'flexWrap':
                this._setFlexWrap(value);
                break;
            case 'flexShrink':
                this._layout.setFlexShrink(value);
                break;
            case 'justifyContent':
                this._setJustifyContent(value);
                break;
            case 'alignItems':
                this._setAlignItems(value);
                break;
            case 'alignContent':
                this._setAlignContent(value);
                break;
            case 'alignSelf':
                this._setAlignSelf(value);
                break;
        }
    }
    _setMargin(val = '0 0 0 0') {
        const [top, right, bottom, left] = val.split(' ');
        this._layout.setMargin(yoga__default["default"].EDGE_TOP, parseFloat(top));
        this._layout.setMargin(yoga__default["default"].EDGE_RIGHT, parseFloat(right));
        this._layout.setMargin(yoga__default["default"].EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setMargin(yoga__default["default"].EDGE_LEFT, parseFloat(left));
    }
    _setPadding(val = '0 0 0 0') {
        const [top, right, bottom, left] = val.split(' ');
        this._layout.setPadding(yoga__default["default"].EDGE_TOP, parseFloat(top));
        this._layout.setPadding(yoga__default["default"].EDGE_RIGHT, parseFloat(right));
        this._layout.setPadding(yoga__default["default"].EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setPadding(yoga__default["default"].EDGE_LEFT, parseFloat(left));
    }
    _setPosition(val = 'relative') {
        if (val === 'absolute') {
            this._layout.setPositionType(yoga__default["default"].POSITION_TYPE_ABSOLUTE);
        }
        else {
            this._layout.setPositionType(yoga__default["default"].POSITION_TYPE_RELATIVE);
        }
        const { top, right, bottom, left } = this._style;
        top && (this._layout.setPosition(yoga__default["default"].EDGE_TOP, top));
        right && (this._layout.setPosition(yoga__default["default"].EDGE_RIGHT, right));
        bottom && (this._layout.setPosition(yoga__default["default"].EDGE_BOTTOM, bottom));
        left && (this._layout.setPosition(yoga__default["default"].EDGE_LEFT, left));
    }
    _setFlexDirection(val) {
        val === 'column' && this._layout.setFlexDirection(yoga__default["default"].FLEX_DIRECTION_COLUMN);
        val === 'column-reverse' && this._layout.setFlexDirection(yoga__default["default"].FLEX_DIRECTION_COLUMN_REVERSE);
        val === 'row' && this._layout.setFlexDirection(yoga__default["default"].FLEX_DIRECTION_ROW);
        val === 'row-reverse' && this._layout.setFlexDirection(yoga__default["default"].FLEX_DIRECTION_ROW_REVERSE);
    }
    _setFlexWrap(val) {
        val === 'nowrap' && this._layout.setFlexWrap(yoga__default["default"].WRAP_NO_WRAP);
        val === 'wrap' && this._layout.setFlexWrap(yoga__default["default"].WRAP_WRAP);
        val === 'wrap-reverse' && this._layout.setFlexWrap(yoga__default["default"].WRAP_WRAP_REVERSE);
    }
    _setJustifyContent(val) {
        val === 'flex-start' && this._layout.setJustifyContent(yoga__default["default"].JUSTIFY_FLEX_START);
        val === 'flex-end' && this._layout.setJustifyContent(yoga__default["default"].JUSTIFY_FLEX_END);
        val === 'center' && this._layout.setJustifyContent(yoga__default["default"].JUSTIFY_CENTER);
        val === 'space-around' && this._layout.setJustifyContent(yoga__default["default"].JUSTIFY_SPACE_AROUND);
        val === 'space-between' && this._layout.setJustifyContent(yoga__default["default"].JUSTIFY_SPACE_BETWEEN);
    }
    _setAlignItems(val) {
        val === 'baseline' && this._layout.setAlignItems(yoga__default["default"].ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignItems(yoga__default["default"].ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignItems(yoga__default["default"].ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignItems(yoga__default["default"].ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignItems(yoga__default["default"].ALIGN_STRETCH);
    }
    _setAlignContent(val) {
        val === 'baseline' && this._layout.setAlignContent(yoga__default["default"].ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignContent(yoga__default["default"].ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignContent(yoga__default["default"].ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignContent(yoga__default["default"].ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignContent(yoga__default["default"].ALIGN_STRETCH);
        val === 'space-around' && this._layout.setAlignContent(yoga__default["default"].ALIGN_SPACE_AROUND);
        val === 'space-between' && this._layout.setAlignContent(yoga__default["default"].ALIGN_SPACE_BETWEEN);
    }
    _setAlignSelf(val) {
        val === 'baseline' && this._layout.setAlignSelf(yoga__default["default"].ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignSelf(yoga__default["default"].ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignSelf(yoga__default["default"].ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignSelf(yoga__default["default"].ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignSelf(yoga__default["default"].ALIGN_STRETCH);
    }
}

class PosterGroup extends PosterNode {
    constructor(style, children = []) {
        super(style);
        this.children = [];
        this.type = 'group';
        this._availableNodeType = ['image', 'text', 'group'];
        this.addChildren(children);
    }
    addChildren(children = []) {
        for (let i = 0; i < children.length; i++) {
            this.addChild(children[i]);
        }
    }
    render() {
        return true;
    }
    addChild(child) {
        if (!child.type) {
            console.error(child);
            throw new Error("The node does not have a 'type' property.");
        }
        if (!this._availableNodeType.includes(child.type)) {
            console.error("The 'type' property of the child node is incorrect. It must be one of 'image', 'group', or 'text'.");
            console.error(child);
            return;
        }
        this.children.push(child);
        this._layout.insertChild(child.layout, this.children.length - 1);
    }
}

class Renderer {
}

const mimeType = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
};
class WebRenderer extends Renderer {
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

// TODO: 判断当前是什么环境，然后使用相关渲染适配器
const renderer = new WebRenderer();

class PosterImage extends PosterNode {
    constructor(style, image) {
        super(style);
        this.type = 'image';
        if (!image) {
            throw new Error('image node not source');
        }
        this._image = image;
    }
    get image() {
        return this._image;
    }
    render() {
        try {
            renderer.drawImage(this);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}

class PosterStage extends PosterGroup {
    constructor(style, chidren) {
        super(style, chidren);
        this.type = 'stage';
        this.width = style.width || 0;
        this.height = style.height || 0;
        this._setRenderWH();
        this._setStagetyle();
    }
    calculateLayout() {
        this._layout.calculateLayout(Number(this.width), Number(this.height), yoga__default["default"].DIRECTION_LTR);
    }
    exportImageSrc(type = 'png', quality = 0.6) {
        return renderer.exportPoster(type, quality);
    }
    _setRenderWH() {
        renderer.width = Number(this.width);
        renderer.height = Number(this.height);
    }
    _setStagetyle() {
        this._layout.setWidth(this.width);
        this._layout.setHeight(this.height);
    }
}

class PosterText extends PosterNode {
    constructor(style, text) {
        super(style);
        this.type = 'text';
        this._text = '';
        this._text = text;
    }
    get text() {
        return this._text;
    }
    render() {
        try {
            renderer.drawText(this);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}

function defineSchema(schema) {
    return schema;
}
function index (schema, progress, success) {
    loadSchemaImages(schema, progress, (imgList) => {
        const stage = loadParser(schema, imgList);
        stage.calculateLayout();
        stage.render();
        success === null || success === void 0 ? void 0 : success();
    });
}
function loadSchemaImages(schema, progressCb, successCb) {
    const imageSrcList = [];
    reParserImage(schema);
    console.log('图片列表', imageSrcList);
    const len = imageSrcList.length;
    const imgEleList = [];
    imageSrcList.forEach((src, index) => __awaiter(this, void 0, void 0, function* () {
        const img = yield loadImage(src);
        imgEleList.push(img);
        progressCb === null || progressCb === void 0 ? void 0 : progressCb((index + 1) / len);
        if (index === len - 1) {
            successCb === null || successCb === void 0 ? void 0 : successCb(imgEleList);
        }
    }));
    // 获取 schema 内的所有图片 src 地址，并创建其与
    function reParserImage(s) {
        if (s.type === 'image') {
            imageSrcList.push(s.src);
            return;
        }
        if (s.type === 'stage' || s.type === 'group') {
            return s.children.forEach((subS) => reParserImage(subS));
        }
        return;
    }
    // 加载图片资源
    function loadImage(src) {
        return new Promise((resolve) => {
            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.src = src;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (e) {
                resolve(image);
            };
        });
    }
}
function loadParser(schema = {
    type: 'stage',
    style: {},
    children: [],
}, imgList) {
    function reParser(s) {
        if (s.type === 'image') {
            return new PosterImage(s.style, imgList.shift());
        }
        if (s.type === 'text') {
            return new PosterText(s.style, s.text);
        }
        const nodeList = s.children.map((subS) => reParser(subS));
        if (s.type === 'stage') {
            return new PosterStage(s.style, nodeList);
        }
        return new PosterGroup(s.style, nodeList);
    }
    const stage = reParser(schema);
    return stage;
}

exports["default"] = index;
exports.defineSchema = defineSchema;
