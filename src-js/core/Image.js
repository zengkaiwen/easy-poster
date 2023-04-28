import renderer from "../renderer";
import PosterNode from "./Node";
export default class PosterImage extends PosterNode {
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
