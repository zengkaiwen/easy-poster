import PosterImage from '../core/Image';
import PosterText from '../core/Text';
import { PosterType } from '../types';

export default abstract class Renderer {
  width: number;

  height: number;

  abstract setWidthHeight(width: number, height: number);

  abstract drawImage(image: PosterImage);

  abstract drawText(text: PosterText);

  abstract exportPoster(type: PosterType, quality: number): string;

  abstract toString();
}
