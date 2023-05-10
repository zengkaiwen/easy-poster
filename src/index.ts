import PosterGroup from './core/Group';
import PosterImage from './core/Image';
import PosterNode from './core/Node';
import PosterStage from './core/Stage';
import PosterText from './core/Text';
import type {
  PosterGroupSchema,
  PosterImageSchema,
  PosterStageSchema,
  PosterTextSchema,
} from './easyposter';

function loadSchemaImages(
  schema: PosterStageSchema,
  progressCb?: (v: number) => void,
  successCb?: (imgList: HTMLImageElement[]) => void
) {
  const imageSrcList: string[] = [];

  // 获取 schema 内的所有图片 src 地址，并创建其与
  function reParserImage(
    s: PosterStageSchema | PosterGroupSchema | PosterImageSchema | PosterTextSchema
  ) {
    if (s.type === 'image') {
      imageSrcList.push(s.src);
      return;
    }
    if (s.type === 'stage' || s.type === 'group') {
      return s.children.forEach((subS) => reParserImage(subS));
    }
    return;
  }
  reParserImage(schema);
  console.log('图片列表', imageSrcList);

  const len = imageSrcList.length;
  const imgEleList: HTMLImageElement[] = [];

  // 加载图片资源
  function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const image = new Image();
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
  imageSrcList.forEach(async (src, index) => {
    const img = await loadImage(src);
    imgEleList.push(img);
    progressCb?.((index + 1) / len);
    if (index === len - 1) {
      successCb?.(imgEleList);
    }
  });
}

function loadParser(
  imgList: HTMLImageElement[],
  schema: PosterStageSchema = {
    type: 'stage',
    style: {},
    children: [],
  }
): PosterStage {
  function reParser(
    s: PosterStageSchema | PosterGroupSchema | PosterImageSchema | PosterTextSchema
  ): PosterNode {
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

export default function (
  schema: PosterStageSchema,
  progress: (v: number) => void,
  success: () => void
) {
  loadSchemaImages(schema, progress, (imgList: HTMLImageElement[]) => {
    const stage = loadParser(imgList, schema);
    stage.calculateLayout();
    stage.render();
    success?.();
  });
}
