import PosterGroup from "./core/Group";
import PosterImage from "./core/Image";
import PosterNode from "./core/Node";
import PosterStage from "./core/Stage";
import PosterText from "./core/Text";
import type { PosterGroupSchema, PosterImageSchema, PosterStageSchema, PosterTextSchema } from "./easy-poster";

const imgUrlRegex = /(http:|https:)?\/\/([\w\.\-%\u4E00-\u9FA5]+\/)+[\w\.\-%\u4E00-\u9FA5]+(\.(png|jpg|jpeg))/ig;

export function defineSchema(schema: PosterStageSchema) {
  return schema;
}

export default function (schema: PosterStageSchema,
  progress: (v: number) => void, 
  success: () => void,
) {

}

function loadSchemaImages(schema: PosterStageSchema, progressCb: (v: number) => void, successCb: (imgList: HTMLImageElement[]) => void) {
  const imageSrcList: string[] = [];
  // 获取 schema 内的所有图片 src 地址，并创建其与
  function reParserImage(s: PosterStageSchema | PosterGroupSchema | PosterImageSchema | PosterTextSchema) {
    if (s.type === 'image') {
      imageSrcList.push(s.src);
      return;
    }
    if (s.type === 'stage' || s.type === 'group') {
      return s.children.forEach((subS) => reParserImage(s))
    }
    return;
  }
  reParserImage(schema);
  console.log(imageSrcList);

  
}

function loadParser(schema: PosterStageSchema = {
  type: 'stage',
  style: {},
  children: [],
}, imgList: HTMLImageElement[]): PosterStage {
  function reParser(s: PosterStageSchema | PosterGroupSchema | PosterImageSchema | PosterTextSchema): PosterNode {
    if (s.type === 'image') {
      return new PosterImage(s.style, imgList.shift() as HTMLImageElement);
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
  return stage as PosterStage;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;
    image.onload = function() {
      resolve(image);
    }
    image.onerror = function(e) {
      reject(e);
    }
  });
}
