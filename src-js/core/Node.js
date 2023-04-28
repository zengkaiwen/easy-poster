import yoga from 'yoga-layout-prebuilt';
export default class PosterNode {
    constructor(style) {
        this.type = 'node';
        this._layout = yoga.Node.create();
        this._style = style;
    }
    // style
    get style() {
        return this._style;
    }
    set style(s) {
        this._style = s;
        this._setStyle(s);
    }
    // bound
    get bound() {
        const { left, top, width, height } = this._layout.getComputedLayout();
        return { left, top, width, height };
    }
    // layout
    get layout() {
        return this._layout;
    }
    render() {
        throw new Error('the render() has not been implemented.');
    }
    _setStyle(style) {
        Object.keys(style).map((key) => this._setStyleItem(key));
    }
    _setStyleItem(key) {
        const value = this._style[key];
        if (value === undefined)
            return;
        switch (key) {
            case 'width':
                this._layout.setWidth(value);
                break;
            case 'height':
                this._layout.setHeight(value);
                break;
            case 'maxWidth':
                this._layout.setMaxWidth(value);
                break;
            case 'maxHeight':
                this._layout.setMaxHeight(value);
                break;
            case 'minWidth':
                this._layout.setMinWidth(value);
                break;
            case 'minHeight':
                this._layout.setMinHeight(value);
                break;
            case 'margin':
                this._setMargin(value);
                break;
            case 'padding':
                this._setPadding(value);
                break;
            case 'position':
                this._setPosition(value);
                break;
            case 'flex':
                this._layout.setFlex(value);
                break;
            case 'flexDirection':
                this._setFlexDirection(value);
                break;
            case 'flexBasis':
                this._layout.setFlexBasis(value);
                break;
            case 'flexGrow':
                this._layout.setFlexGrow(value);
                break;
            case 'flexWrap':
                this._setFlexWrap(value);
                break;
            case 'flexShrink':
                this._layout.setFlexShrink(value);
                break;
            case 'justifyContent':
                this._setJustifyContent(value);
                break;
            case 'alignItems':
                this._setAlignItems(value);
                break;
            case 'alignContent':
                this._setAlignContent(value);
                break;
            case 'alignSelf':
                this._setAlignSelf(value);
                break;
            default:
                break;
        }
    }
    _setMargin(val = '0 0 0 0') {
        const [top, right, bottom, left] = val.split(' ');
        this._layout.setMargin(yoga.EDGE_TOP, parseFloat(top));
        this._layout.setMargin(yoga.EDGE_RIGHT, parseFloat(right));
        this._layout.setMargin(yoga.EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setMargin(yoga.EDGE_LEFT, parseFloat(left));
    }
    _setPadding(val = '0 0 0 0') {
        const [top, right, bottom, left] = val.split(' ');
        this._layout.setPadding(yoga.EDGE_TOP, parseFloat(top));
        this._layout.setPadding(yoga.EDGE_RIGHT, parseFloat(right));
        this._layout.setPadding(yoga.EDGE_BOTTOM, parseFloat(bottom));
        this._layout.setPadding(yoga.EDGE_LEFT, parseFloat(left));
    }
    _setPosition(val = 'relative') {
        if (val === 'absolute') {
            this._layout.setPositionType(yoga.POSITION_TYPE_ABSOLUTE);
        }
        else {
            this._layout.setPositionType(yoga.POSITION_TYPE_RELATIVE);
        }
        const { top, right, bottom, left } = this._style;
        top && (this._layout.setPosition(yoga.EDGE_TOP, top));
        right && (this._layout.setPosition(yoga.EDGE_RIGHT, right));
        bottom && (this._layout.setPosition(yoga.EDGE_BOTTOM, bottom));
        left && (this._layout.setPosition(yoga.EDGE_LEFT, left));
    }
    _setFlexDirection(val) {
        val === 'column' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN);
        val === 'column-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN_REVERSE);
        val === 'row' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
        val === 'row-reverse' && this._layout.setFlexDirection(yoga.FLEX_DIRECTION_ROW_REVERSE);
    }
    _setFlexWrap(val) {
        val === 'nowrap' && this._layout.setFlexWrap(yoga.WRAP_NO_WRAP);
        val === 'wrap' && this._layout.setFlexWrap(yoga.WRAP_WRAP);
        val === 'wrap-reverse' && this._layout.setFlexWrap(yoga.WRAP_WRAP_REVERSE);
    }
    _setJustifyContent(val) {
        val === 'flex-start' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_START);
        val === 'flex-end' && this._layout.setJustifyContent(yoga.JUSTIFY_FLEX_END);
        val === 'center' && this._layout.setJustifyContent(yoga.JUSTIFY_CENTER);
        val === 'space-around' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_AROUND);
        val === 'space-between' && this._layout.setJustifyContent(yoga.JUSTIFY_SPACE_BETWEEN);
    }
    _setAlignItems(val) {
        val === 'baseline' && this._layout.setAlignItems(yoga.ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignItems(yoga.ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignItems(yoga.ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignItems(yoga.ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignItems(yoga.ALIGN_STRETCH);
    }
    _setAlignContent(val) {
        val === 'baseline' && this._layout.setAlignContent(yoga.ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignContent(yoga.ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignContent(yoga.ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignContent(yoga.ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignContent(yoga.ALIGN_STRETCH);
        val === 'space-around' && this._layout.setAlignContent(yoga.ALIGN_SPACE_AROUND);
        val === 'space-between' && this._layout.setAlignContent(yoga.ALIGN_SPACE_BETWEEN);
    }
    _setAlignSelf(val) {
        val === 'baseline' && this._layout.setAlignSelf(yoga.ALIGN_BASELINE);
        val === 'center' && this._layout.setAlignSelf(yoga.ALIGN_CENTER);
        val === 'flex-end' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_END);
        val === 'flex-start' && this._layout.setAlignSelf(yoga.ALIGN_FLEX_START);
        val === 'stretch' && this._layout.setAlignSelf(yoga.ALIGN_STRETCH);
    }
}
