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
            link: "/guide.html"
          },
          {
            text: "名词解释",
            icon: "info-circle",
            link: "/term.html"
          },
          {
            text: "语言包",
            icon: "language",
            link: "/language.html"
          },
        ],
      },
      {
        text: "设置与帮助",
        children: [
          {
            text: "隐私设置",
            icon: "shield-halved",
            link: "/privacy.html"
          },
          {
            text: "缓存和下载",
            icon: "download",
            link: "/download.html"
          },
          {
            text: "常见问题与解答",
            icon: "circle-question",
            link: "/faq.html"
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
            link: "/format.html"
          },
          {
            text: "图片排版",
            icon: "image",
            link: "/editphoto.html"
          },
          {
            text: "内置搜索",
            icon: "magnifying-glass",
            link: "/search.html"
          },
          {
            text: "创建贴纸",
            icon: "note-sticky",
            link: "/createsticker.html"
          },
          {
            text: "创建机器人",
            icon: "robot",
            link: "/createrobot.html"
          },
        ],
      },
      {
        text: "高级功能",
        children: [
          {
            text: "Telegraph",
            icon: "indent",
            link: "/telegraph.html"
          },
          {
            text: "私聊机器人搭建",
            icon: "reply-all",
            link: "/livegram.html"
          },
          {
            text: "Premium",
            icon: "gem",
            link: "/premium.html"
          },
          {
            text: "频道/群组助推",
            icon: "bolt",
            link: "/boost.html"
          },
          {
            text: "第三方客户端",
            icon: "wand-magic-sparkles",
            link: "/thirdparty.html"
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
        link: "/emaillogin.html"
      },
      {
        text: "未收到验证码",
        icon: "comment-sms",
        link: "/notcomesms.html"
      },
      {
        text: "号码被封禁",
        icon: "ban",
        link: "/banned.html"
      },
      {
        text: "解除私聊限制",
        icon: "user-lock",
        link: "/spam.html"
      },
      {
        text: "解除敏感内容限制",
        icon: "table-cells-row-lock",
        link: "/pornios.html"
      },
    ],
  },
  {
    text: "TGNAV",
    icon: "compass",
    children: [
      {
        text: "频道导航",
        icon: "bullhorn",
        link: "https://tgnav.github.io/",
      },
      {
        text: "群组导航",
        icon: "users",
        link: "https://tgnav.github.io/group/"
      },
      {
        text: "机器人导航",
        icon: "robot",
        link: "https://tgnav.github.io/robot/"
      }
    ]
  }
]);
