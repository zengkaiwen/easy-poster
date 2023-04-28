import PosterGroup from "./Group";
import renderer from "../renderer";
import yoga from "yoga-layout-prebuilt";
export default class PosterStage extends PosterGroup {
    constructor(style, chidren) {
        super(style, chidren);
        this.type = 'stage';
        this.width = style.width || 0;
        this.height = style.height || 0;
        this._setRenderWH();
        this._setStagetyle();
    }
    calculateLayout() {
        this._layout.calculateLayout(Number(this.width), Number(this.height), yoga.DIRECTION_LTR);
    }
    exportImageSrc(type = 'png', quality = 0.6) {
        return renderer.exportPoster(type, quality);
    }
    _setRenderWH() {
        renderer.width = Number(this.width);
        renderer.height = Number(this.height);
    }
    _setStagetyle() {
        this._layout.setWidth(this.width);
        this._layout.setHeight(this.height);
    }
}
