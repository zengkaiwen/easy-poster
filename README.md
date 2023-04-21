# easy-poster
一个使用简单，基于 Canvas 和约定 schema 方式的 Web 移动端海报生成工具

> 注意：是移动端工具，不兼容 IE 浏览器！！！Firefox 浏览器在绘制文本的时候，会有兼容问题。Safari和微信浏览器均兼容，安卓内核 Webview v4以上兼容


# 一、功能
- [x] 支持进度条
- [x] 根据 Schema 进行布局，生成海报
- [ ] 支持唤起下载
- [x] 图片 source 支持 HtmlImageElement 对象实例和资源URI
- [ ] 文本支持外部字体导入
- [ ] 支持视网膜屏优化
- [ ] 图片支持形状截取（正圆形）


# 二、用法

## 1、安装 easy-poster

```bash
npm i easy-poster -S
```

## 2、构建海报的 schema，有动态数据的话，在动态数据拿到之后，再构建 schema，例如：

```js
import easyPoster from 'easy-poster'

const schame = {
  type: "stage",
  width: 750,
  height: 1624,
  style: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: [
    {
      type: "image",
      style: {
        width: 750,
        height: 1624,
        position: 'absolute',
        top: 0,
        left: 0,
      },
      source: "xxxx",
    },
    {
      type: "image",
      style: {
        width: 200,
        height: 200,
      },
      source: "xxxx",
    },
  ]
}

// 生成 base64 的图片
const image = easyPoster(schema, {
  /** 进度回调方法 */
  progress: function(p) {
    // p 是 0~1的浮点数
  },
  /** 生成海报成功的回调方法 */
  success: function(res) {
    // res 是最终生成的png图片 base64 字符串
  }
})
```


# 三、schema 类型

## 图片 image

```json
{
  type: "image",
  style: {
    width: 120,
    height: 120,
  },
  source: "",
}
```

## 文字 text

```json
{
  type: "text",
  style: {
    width: 120,
    font: "", // 字体文件
    fontWeight: "",
    fontSize: "",
    textAlign: "",
  },
  text: "文本内容",
}
```

## 容器 group

```json
{
  type: "group",
  style: {
    width: 120,
    height: 120,
  },
  children: [],
}
```

## 舞台 stage

stage 的 width和height 是整个画布的宽高，也就是整个导出来的图片的宽高

```json
{
  type: "stage",
  width: 750,
  height: 1624,
  style: {},
  children: []
}
```


# 四、style 属性

easy-poster 中所有的 schema 元素都是默认 flex 布局的，可以直接设置子元素的相关 flex 属性。
其中，只有 `stage` 和 `group` 可以添加子元素，子元素以数组的形式添加进去。easy-poster 中的 style 属性参考如下表格：

|属性|值类型|说明|
|:-|:-|:-|
|width|number|元素宽度|
|height|number|元素高度|
|maxWidth|number|元素最大宽度|
|maxHeight|number|元素最大高度|
|minWidth|number|元素最小宽度|
|minHeight|number|元素最小高度|
|margin|string|外边距，只支持4位数字值中间空格隔开，分别是top,right,bottom,left，例如：'10 10 20 20'|
|padding|string|内边距，只支持4位数字值中间空格隔开，分别是top,right,bottom,left，例如：'10 10 20 20'|
|position|string|两个值，默认为空，可设置成relative或absolute，需设置方位值才有效|
|top|number|当position为relative或absolute时，顶部距离|
|bottom|number|当position为relative或absolute时，底部距离|
|left|number|当position为relative或absolute时，左侧距离|
|right|number|当position为relative或absolute时，右侧距离|
|flex|number|设置子元素的弹性值|
|flexDirection|string|弹性布局方向，取row、row-reverse、column、column-reverse|
|flexBasis|string|  |
|flexGrow|string|  |
|flexShrink|string|  |
|justifyContent|string| |
|alignItems|string|  |
|alignContent|string|  |
|alignSelf|string|  |
|font|string|仅text元素有，字体，默认系统字体|
|fontStyle|string|仅text元素有，字体样式，取值normal、italic，默认 normal|
|fontSize|number|仅text元素有，字体大小，默认10，【注意】size的值不能超过text元素的width和height|
|fontWeight|string|仅text元素有，字体粗细，取值light、normal、bold，默认 normal|
|color|string|仅text元素有，字体颜色|
|textAlign|string|仅text元素有，文本对齐方式，left、center、right|
|lineHeight|number|仅text元素有，行高，值为fontSize的倍数。例如 fontSize为16，lineHeight设为1.5，则真实行高度为24|