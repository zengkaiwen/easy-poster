var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PosterGroup from "./core/Group";
import PosterImage from "./core/Image";
import PosterStage from "./core/Stage";
import PosterText from "./core/Text";
export function defineSchema(schema) {
    return schema;
}
export default function (schema, progress, success) {
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
