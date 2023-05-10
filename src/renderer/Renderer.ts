import PosterImage from '../core/Image';
import PosterText from '../core/Text';
import type { PosterType } from '../easyposter';

export default abstract class Renderer {
  width: number;

  height: number;

  abstract drawImage(image: PosterImage);

  abstract drawText(text: PosterText);

  abstract exportPoster(type: PosterType, quality: number): string;

  abstract toString();
}
