export default {
  type: "stage",
  width: 750,
  height: 1624,
  style: {
    width: 750,
    height: 1624,
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
      source: "//yun.duiba.com.cn/zengkaiwen/henanUpnewSpring/55964fec-77a1-4147-82fa-39d0aad811ad.png",
    },
    {
      type: "image",
      style: {
        position: 'absolute',
        bottom: 100,
        width: 200,
        height: 200,
      },
      source: "//yun.duiba.com.cn/zengkaiwen/henanUpnewSpring/share.png",
    },
    {
      type: "text",
      style: {
        width: 750,
        // height: 100,
        fontSize: 20,
        position: 'absolute',
        left: 0,
        top: 0,
        fontWeight: 700,
      },
      text: '测试文案测试文案测试文案测试文案测试文案测试文案测试文案'
    },
  ]
}