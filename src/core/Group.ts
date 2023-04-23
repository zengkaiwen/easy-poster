import { PosterBaseStyle, PosterNodeType } from "../easy-poster";
import PosterNode from "./Node";

export default class PosterGroup extends PosterNode {
  public children: PosterNode[] = [];
  public type: PosterNodeType = 'group';
  private _availableNodeType: PosterNodeType[] = ['image', 'text', 'group'];

  constructor(style: PosterBaseStyle, children: PosterNode[] = []) {
    super(style);

    this.addChildren(children);
  }

  addChildren(children: PosterNode[] = []) {
    for (let i = 0; i < children.length; i++) {
      this.addChild(children[i]);
    }
  }

  render(): boolean {
    return true;
  }

  addChild(child: PosterNode) {
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
