import renderer from "../renderer";
import PosterNode from "./Node";
export default class PosterText extends PosterNode {
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
