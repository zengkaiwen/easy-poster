import PosterNode from "./Node";
export default class PosterGroup extends PosterNode {
    constructor(style, children = []) {
        super(style);
        this.children = [];
        this.type = 'group';
        this._availableNodeType = ['image', 'text', 'group'];
        this.addChildren(children);
    }
    addChildren(children = []) {
        for (let i = 0; i < children.length; i++) {
            this.addChild(children[i]);
        }
    }
    render() {
        return true;
    }
    addChild(child) {
        if (!child.type) {
            console.error(child);
            throw new Error("The node does not have a 'type' property.");
        }
        if (!this._availableNodeType.includes(child.type)) {
            console.error("The 'type' property of the child node is incorrect. It must be one of 'image', 'group', or 'text'.");
            console.error(child);
            return;
        }
        this.children.push(child);
        this._layout.insertChild(child.layout, this.children.length - 1);
    }
}
