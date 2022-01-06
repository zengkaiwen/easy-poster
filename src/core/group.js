import PosterNode from './node'
import PosterImage from './image'
import PosterText from './text'

import { schemaName } from '../constants/schema'

class PosterGroup extends PosterNode {
  constructor(style, children = [], mode = 'block') {
    super(style)

    this.children = []
    this.addChildren(children)
    this.type = schemaName.group
  }

  addChildren(children = []) {
    for (let i=0; i<children.length; i++) {
      this._addChild(children[i])
    }
    // this.recalc()
  }

  render() {
    return true
  }

  _addChild(schemaNode) {
    if (!schemaNode.type) {
      console.error(schemaNode)
      throw new Error('schema节点不能没有type属性')
    }

    if (!['image', 'text', 'group'].includes(schemaNode.type)) {
      console.error(`${schemaNode.type} 属性不能添加到 group 里面：`, schemaNode)
      return;
    }

    switch(schemaNode.type) {
      case schemaName.image:
        this._addImage(schemaNode)
        break
      case schemaName.group:
        this._addGroup(schemaNode)
        break
      case schemaName.text:
        this._addText(schemaNode)
        break
    }
  }

  _addImage(schemaNode) {
    const imageNode = new PosterImage(
      schemaNode.style,
      schemaNode.source,
      schemaNode.mode
    );
    this.children.push(imageNode)
    this._layout.insertChild(imageNode.layout)
  }

  _addGroup(schemaNode) {
    const groupNode = new PosterGroup(
      schemaNode.style,
      schemaNode.children,
      schemaNode.mode
    )
    this.children.push(groupNode)
    this._layout.insertChild(groupNode.layout)
  }

  _addText(schemaNode) {
    const textNode = new PosterText(schemaNode.style, schemaNode.text)
    this.children.push(textNode)
    this._layout.insertChild(textNode.layout)
  }
}

export default PosterGroup
