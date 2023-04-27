import { PosterStyle, PosterNodeType } from "../easy-poster";
import renderer from "../renderer";
import PosterNode from "./Node";

export default class PosterText extends PosterNode {
  public type: PosterNodeType = 'text';
  private _text: string = '';

  constructor(style: PosterStyle, text: string) {
    super(style);

    this._text = text;
  }

  get text(): string {
    return this._text;
  }

  render(): boolean {
    try {
      renderer.drawText(this);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}