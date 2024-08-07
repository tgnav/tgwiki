import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "快速开始",
    icon: "rocket",
    children: [
      {
        text: "电报入门",
        children: [
          {
            text: "文档指南",
            icon: "lightbulb",
            link: "/guide"
          },
          {
            text: "名词解释",
            icon: "info-circle",
            link: "/term"
          },
          {
            text: "语言包",
            icon: "language",
            link: "/language"
          },
        ],
      },
      {
        text: "设置与帮助",
        children: [
          {
            text: "隐私设置",
            icon: "shield-halved",
            link: "/privacy"
          },
          {
            text: "缓存和下载",
            icon: "download",
            link: "/download"
          },
          {
            text: "常见问题与解答",
            icon: "circle-question",
            link: "/faq"
          },
        ],
      },
    ],
  },
  {
    text: "常用功能",
    icon: "star",
    children: [
      {
        text: "基础操作",
        children: [
          {
            text: "消息格式",
            icon: "paragraph",
            link: "/format"
          },
          {
            text: "图片添加说明",
            icon: "align-justify",
            link: "/adddescription"
          },
          {
            text: "内置搜索",
            icon: "magnifying-glass",
            link: "/search"
          },
          {
            text: "创建贴纸",
            icon: "note-sticky",
            link: "/createsticker"
          },
          {
            text: "创建机器人",
            icon: "robot",
            link: "/createrobot"
          },
        ],
      },
      {
        text: "高级功能",
        children: [
          {
            text: "Telegraph",
            icon: "indent",
            link: "/telegraph"
          },
          {
            text: "私聊机器人搭建",
            icon: "reply-all",
            link: "/livegram"
          },
          {
            text: "Premium",
            icon: "gem",
            link: "/premium"
          },
          {
            text: "频道/群组助推",
            icon: "bolt",
            link: "/boost"
          },
          {
            text: "第三方客户端",
            icon: "wand-magic-sparkles",
            link: "/thirdparty"
          },
        ],
      },
    ],
  },
  {
    text: "账号相关",
    icon: "user",
    children: [
      {
        text: "邮箱登录",
        icon: "envelope-open-text",
        link: "/emaillogin"
      },
      {
        text: "未收到验证码",
        icon: "comment-sms",
        link: "/notcomesms"
      },
      {
        text: "号码被封禁",
        icon: "ban",
        link: "/banned"
      },
      {
        text: "解除私聊限制",
        icon: "user-lock",
        link: "/spam"
      },
      {
        text: "解除敏感内容限制",
        icon: "table-cells-row-lock",
        link: "/pornios"
      },
    ],
  },
  {
    text: "频道导航",
    icon: "compass",
    link: "https://tgnav.github.io/",
  }
]);
