/**
 * @license
 * EasyPoster v1.0.0
 * Copyright (c) 2019 Kevin.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
*/
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('visual-yoga-layout-prebuilt')) :
typeof define === 'function' && define.amd ? define(['exports', 'visual-yoga-layout-prebuilt'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.easyposter = {}, global.yoga));
})(this, (function (exports, yoga) { 'use strict';

function _interopNamespace(e) {
if (e && e.__esModule) return e;
var n = Object.create(null);
if (e) {
Object.keys(e).forEach(function (k) {
if (k !== 'default') {
var d = Object.getOwnPropertyDescriptor(e, k);
Object.defineProperty(n, k, d.get ? d : {
enumerable: true,
get: function () { return e[k]; }
});
}
});
}
n["default"] = e;
return Object.freeze(n);
}

var yoga__namespace = /*#__PURE__*/_interopNamespace(yoga);

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
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
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
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var PosterNode = (function () {
    function PosterNode(style) {
        this.type = 'node';
        this._layout = yoga__namespace.Node.create();
        this._style = style;
    }
    Object.defineProperty(PosterNode.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (s) {
            this._style = s;
            this._setStyle(s);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PosterNode.prototype, "bound", {
        get: function () {
            var _a = this._layout.getComputedLayout(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
            return { left: left, top: top, width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PosterNode.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        enumerable: false,
        configurable: true
    });
    PosterNode.prototype.render = function () {
        throw new Error('the render() has not been implemented.');
    };
    PosterNode.prototype._setStyle = function (style) {
        var _this = this;
        Object.keys(style).map(function (key) { return _this._setStyleItem(key); });
    };
    PosterNode.prototype._setStyleItem = function (key) {
        var value = this._style[key];
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
    };
    PosterNode.prototype._setMargin = function (val) {
        if (val === void 0) { val = '0 0 0 0'; }
        var _a = __read(val.split(' '), 4), top = _a[0], right = _a[1], bottom = _a[2], left = _a[3];
        this._layout.setMargin(yoga__namespace.EDGE_TOP, parseFloat(top));
        this._layout.setMargin(yoga__namespace.EDGE_RIGHT, parseFloat(right));
        this._layout.setMargin(yoga__namespace.EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setMargin(yoga__namespace.EDGE_LEFT, parseFloat(left));
    };
    PosterNode.prototype._setPadding = function (val) {
        if (val === void 0) { val = '0 0 0 0'; }
        var _a = __read(val.split(' '), 4), top = _a[0], right = _a[1], bottom = _a[2], left = _a[3];
        this._layout.setPadding(yoga__namespace.EDGE_TOP, parseFloat(top));
        this._layout.setPadding(yoga__namespace.EDGE_RIGHT, parseFloat(right));
        this._layout.setPadding(yoga__namespace.EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setPadding(yoga__namespace.EDGE_LEFT, parseFloat(left));
    };
    PosterNode.prototype._setPosition = function (val) {
        if (val === void 0) { val = 'relative'; }
        if (val === 'absolute') {
            this._layout.setPositionType(yoga__namespace.POSITION_TYPE_ABSOLUTE);
        }
        else {
            this._layout.setPositionType(yoga__namespace.POSITION_TYPE_RELATIVE);
        }
        var _a = this._style, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (top !== undefined)
            this._layout.setPosition(yoga__namespace.EDGE_TOP, top);
        if (right !== undefined)
            this._layout.setPosition(yoga__namespace.EDGE_RIGHT, right);
        if (bottom !== undefined)
            this._layout.setPosition(yoga__namespace.EDGE_BOTTOM, bottom);
        if (left !== undefined)
            this._layout.setPosition(yoga__namespace.EDGE_LEFT, left);
    };
    PosterNode.prototype._setFlexDirection = function (val) {
        if (val === 'column')
            this._layout.setFlexDirection(yoga__namespace.FLEX_DIRECTION_COLUMN);
        if (val === 'column-reverse')
            this._layout.setFlexDirection(yoga__namespace.FLEX_DIRECTION_COLUMN_REVERSE);
        if (val === 'row')
            this._layout.setFlexDirection(yoga__namespace.FLEX_DIRECTION_ROW);
        if (val === 'row-reverse')
            this._layout.setFlexDirection(yoga__namespace.FLEX_DIRECTION_ROW_REVERSE);
    };
    PosterNode.prototype._setFlexWrap = function (val) {
        if (val === 'nowrap')
            this._layout.setFlexWrap(yoga__namespace.WRAP_NO_WRAP);
        if (val === 'wrap')
            this._layout.setFlexWrap(yoga__namespace.WRAP_WRAP);
        if (val === 'wrap-reverse')
            this._layout.setFlexWrap(yoga__namespace.WRAP_WRAP_REVERSE);
    };
    PosterNode.prototype._setJustifyContent = function (val) {
        if (val === 'flex-start')
            this._layout.setJustifyContent(yoga__namespace.JUSTIFY_FLEX_START);
        if (val === 'flex-end')
            this._layout.setJustifyContent(yoga__namespace.JUSTIFY_FLEX_END);
        if (val === 'center')
            this._layout.setJustifyContent(yoga__namespace.JUSTIFY_CENTER);
        if (val === 'space-around')
            this._layout.setJustifyContent(yoga__namespace.JUSTIFY_SPACE_AROUND);
        if (val === 'space-between')
            this._layout.setJustifyContent(yoga__namespace.JUSTIFY_SPACE_BETWEEN);
    };
    PosterNode.prototype._setAlignItems = function (val) {
        if (val === 'baseline')
            this._layout.setAlignItems(yoga__namespace.ALIGN_BASELINE);
        if (val === 'center')
            this._layout.setAlignItems(yoga__namespace.ALIGN_CENTER);
        if (val === 'flex-end')
            this._layout.setAlignItems(yoga__namespace.ALIGN_FLEX_END);
        if (val === 'flex-start')
            this._layout.setAlignItems(yoga__namespace.ALIGN_FLEX_START);
        if (val === 'stretch')
            this._layout.setAlignItems(yoga__namespace.ALIGN_STRETCH);
    };
    PosterNode.prototype._setAlignContent = function (val) {
        if (val === 'baseline')
            this._layout.setAlignContent(yoga__namespace.ALIGN_BASELINE);
        if (val === 'center')
            this._layout.setAlignContent(yoga__namespace.ALIGN_CENTER);
        if (val === 'flex-end')
            this._layout.setAlignContent(yoga__namespace.ALIGN_FLEX_END);
        if (val === 'flex-start')
            this._layout.setAlignContent(yoga__namespace.ALIGN_FLEX_START);
        if (val === 'stretch')
            this._layout.setAlignContent(yoga__namespace.ALIGN_STRETCH);
        if (val === 'space-around')
            this._layout.setAlignContent(yoga__namespace.ALIGN_SPACE_AROUND);
        if (val === 'space-between')
            this._layout.setAlignContent(yoga__namespace.ALIGN_SPACE_BETWEEN);
    };
    PosterNode.prototype._setAlignSelf = function (val) {
        if (val === 'baseline')
            this._layout.setAlignSelf(yoga__namespace.ALIGN_BASELINE);
        if (val === 'center')
            this._layout.setAlignSelf(yoga__namespace.ALIGN_CENTER);
        if (val === 'flex-end')
            this._layout.setAlignSelf(yoga__namespace.ALIGN_FLEX_END);
        if (val === 'flex-start')
            this._layout.setAlignSelf(yoga__namespace.ALIGN_FLEX_START);
        if (val === 'stretch')
            this._layout.setAlignSelf(yoga__namespace.ALIGN_STRETCH);
    };
    return PosterNode;
}());

var PosterGroup = (function (_super) {
    __extends(PosterGroup, _super);
    function PosterGroup(style, children) {
        if (children === void 0) { children = []; }
        var _this = _super.call(this, style) || this;
        _this.children = [];
        _this.type = 'group';
        _this._availableNodeType = ['image', 'text', 'group'];
        _this.addChildren(children);
        return _this;
    }
    PosterGroup.prototype.addChildren = function (children) {
        if (children === void 0) { children = []; }
        for (var i = 0; i < children.length; i++) {
            this.addChild(children[i]);
        }
    };
    PosterGroup.prototype.render = function () {
        return true;
    };
    PosterGroup.prototype.addChild = function (child) {
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
    };
    return PosterGroup;
}(PosterNode));

var Renderer = (function () {
    function Renderer() {
    }
    return Renderer;
}());

var mimeType = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
};
var WebRenderer = (function (_super) {
    __extends(WebRenderer, _super);
    function WebRenderer() {
        var _this = _super.call(this) || this;
        var canvas = (_this._canvas = document.createElement('canvas'));
        _this._context = canvas.getContext('2d');
        canvas.style.display = 'none';
        document.body.appendChild(canvas);
        return _this;
    }
    WebRenderer.prototype.drawImage = function (image) {
        var _a;
        var _b = image.bound, left = _b.left, top = _b.top, width = _b.width, height = _b.height;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.drawImage(image.image, left, top, width, height);
    };
    WebRenderer.prototype.exportPoster = function (type, quality) {
        var mType = mimeType[type];
        var imgData = this._canvas.toDataURL(mType, quality);
        return imgData;
    };
    WebRenderer.prototype.drawText = function (text) {
        var _this = this;
        var _a;
        if (!this._context)
            return;
        var _b = text.style, maxWidth = _b.maxWidth, width = _b.width, lineHeight = _b.lineHeight, left = _b.left, top = _b.top, fontFamily = _b.fontFamily, fontSize = _b.fontSize, fontWeight = _b.fontWeight, color = _b.color;
        if (fontFamily) {
            var weight = fontWeight || 500;
            var size = Number(fontSize) || '16px';
            this._context.font = "".concat(weight, " ").concat(size, "px ").concat(fontFamily);
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
        var x = Number(left) || 0;
        var y = Number(top) || 0;
        var textWidth = Number(width) || Number(maxWidth) || this.width;
        var textLineHeight = Number(lineHeight) ||
            parseInt(window.getComputedStyle(this._canvas).lineHeight) ||
            parseInt(window.getComputedStyle(document.body).lineHeight);
        var textArr = __spreadArray([], __read(text.text), false);
        var fillText = function (line, $x, $y) {
            var _a, _b, _c;
            var lineX = $x;
            var textLineWidth = ((_b = (_a = _this._context) === null || _a === void 0 ? void 0 : _a.measureText(line)) === null || _b === void 0 ? void 0 : _b.width) || 0;
            if (text.style.textAlign === 'center') {
                lineX = $x + (textWidth - textLineWidth) * 0.5;
            }
            if (text.style.textAlign === 'right') {
                lineX = $x + (textWidth - textLineWidth);
            }
            (_c = _this._context) === null || _c === void 0 ? void 0 : _c.fillText(line, lineX, $y);
        };
        var line = '';
        for (var n = 0; n < textArr.length; n++) {
            var textLine = line + textArr[n];
            var metrics = (_a = this._context) === null || _a === void 0 ? void 0 : _a.measureText(textLine);
            var textLineWidth = (metrics === null || metrics === void 0 ? void 0 : metrics.width) || 0;
            if (textLineWidth > textWidth && n > 0) {
                fillText(line, x, y);
                line = textArr[n];
                y += textLineHeight;
            }
            else {
                line = textLine;
            }
        }
        fillText(line, x, y);
    };
    WebRenderer.prototype.toString = function () {
        return "WebRenderer with Canvas2D";
    };
    return WebRenderer;
}(Renderer));

var renderer = new WebRenderer();

var PosterImage = (function (_super) {
    __extends(PosterImage, _super);
    function PosterImage(style, image) {
        var _this = _super.call(this, style) || this;
        _this.type = 'image';
        if (!image) {
            throw new Error('image node not source');
        }
        _this._image = image;
        return _this;
    }
    Object.defineProperty(PosterImage.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    PosterImage.prototype.render = function () {
        try {
            renderer.drawImage(this);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    return PosterImage;
}(PosterNode));

var PosterStage = (function (_super) {
    __extends(PosterStage, _super);
    function PosterStage(style, children) {
        var _this = _super.call(this, style, children) || this;
        _this.type = 'stage';
        _this.width = style.width || 0;
        _this.height = style.height || 0;
        _this._setRenderWH();
        _this._setStageStyle();
        return _this;
    }
    PosterStage.prototype.calculateLayout = function () {
        this._layout.calculateLayout(Number(this.width), Number(this.height), yoga__namespace.DIRECTION_LTR);
    };
    PosterStage.prototype.exportImageSrc = function (type, quality) {
        if (type === void 0) { type = 'png'; }
        if (quality === void 0) { quality = 0.6; }
        return renderer.exportPoster(type, quality);
    };
    PosterStage.prototype._setRenderWH = function () {
        renderer.width = Number(this.width);
        renderer.height = Number(this.height);
    };
    PosterStage.prototype._setStageStyle = function () {
        this._layout.setWidth(this.width);
        this._layout.setHeight(this.height);
    };
    return PosterStage;
}(PosterGroup));

var PosterText = (function (_super) {
    __extends(PosterText, _super);
    function PosterText(style, text) {
        var _this = _super.call(this, style) || this;
        _this.type = 'text';
        _this._text = '';
        _this._text = text;
        return _this;
    }
    Object.defineProperty(PosterText.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    PosterText.prototype.render = function () {
        try {
            renderer.drawText(this);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    return PosterText;
}(PosterNode));

function loadSchemaImages(schema, progressCb, successCb) {
    var _this = this;
    var imageSrcList = [];
    function reParserImage(s) {
        if (s.type === 'image') {
            imageSrcList.push(s.src);
            return;
        }
        if (s.type === 'stage' || s.type === 'group') {
            return s.children.forEach(function (subS) { return reParserImage(subS); });
        }
        return;
    }
    reParserImage(schema);
    console.log('图片列表', imageSrcList);
    var len = imageSrcList.length;
    var imgEleList = [];
    function loadImage(src) {
        return new Promise(function (resolve) {
            var image = new Image();
            image.crossOrigin = 'anonymous';
            image.src = src;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function () {
                resolve(image);
            };
        });
    }
    imageSrcList.forEach(function (src, index) { return __awaiter(_this, void 0, void 0, function () {
        var img;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, loadImage(src)];
                case 1:
                    img = _a.sent();
                    imgEleList.push(img);
                    progressCb === null || progressCb === void 0 ? void 0 : progressCb((index + 1) / len);
                    if (index === len - 1) {
                        successCb === null || successCb === void 0 ? void 0 : successCb(imgEleList);
                    }
                    return [2];
            }
        });
    }); });
}
function loadParser(imgList, schema) {
    if (schema === void 0) { schema = {
        type: 'stage',
        style: {},
        children: [],
    }; }
    function reParser(s) {
        if (s.type === 'image') {
            return new PosterImage(s.style, imgList.shift());
        }
        if (s.type === 'text') {
            return new PosterText(s.style, s.text);
        }
        var nodeList = s.children.map(function (subS) { return reParser(subS); });
        if (s.type === 'stage') {
            return new PosterStage(s.style, nodeList);
        }
        return new PosterGroup(s.style, nodeList);
    }
    var stage = reParser(schema);
    return stage;
}
function createPoster(schema, progress, success) {
    loadSchemaImages(schema, progress, function (imgList) {
        var stage = loadParser(imgList, schema);
        stage.calculateLayout();
        stage.render();
        success === null || success === void 0 ? void 0 : success();
    });
}

exports.createPoster = createPoster;

Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=easyposter.js.map
