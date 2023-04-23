import { PosterType } from "../easy-poster";

export default abstract class Renderer {
  width: number;
  height: number;

  abstract drawImage(
    image: CanvasImageSource,
    left: number,
    top: number,
    width: number,
    height: number
  );

  abstract drawText(
    text: string,
  );

  abstract exportPoster(
    type: PosterType,
    quality: number
  ): string;

  abstract toString();
}