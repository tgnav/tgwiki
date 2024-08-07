import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "电报入门",
      icon: "paper-plane",
      collapsible: true,
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
          text: "Telegram限制",
          icon: "hand",
          link: "/limit"
        },
        {
          text: "DC说明",
          icon: "database",
          link: "/dc"
        },
        {
          text: "中文语言包",
          icon: "language",
          link: "/language"
        },
      ],
    },
    {
      text: "基础操作",
      icon: "feather",
      collapsible: true,
      children: [
        {
          text: "新建群组",
          icon: "users",
          link: "/creategroup"
        },
        {
          text: "新建频道",
          icon: "bullhorn",
          link: "/createchannel"
        },
        {
          text: "添加账号",
          icon: "user-plus",
          link: "/multiaccount"
        },
        {
          text: "删除账号",
          icon: "user-slash",
          link: "/deleteaccount"
        },
        {
          text: "管理群组",
          icon: "users-gear",
          link: "/managegroup"
        },
        {
          text: "评论功能",
          icon: "comments",
          link: "/comment"
        },
        {
          text: "对话归档",
          icon: "archive",
          link: "/archive"
        },
        {
          text: "收藏夹",
          icon: "bookmark",
          link: "/favourite"
        },
        {
          text: "扫一扫",
          icon: "qrcode",
          link: "/scan"
        },
        {
          text: "消息格式",
          icon: "paragraph",
          link: "/format"
        },
        {
          text: "创建投票",
          icon: "square-poll-vertical",
          link: "/poll"
        },
        {
          text: "图片添加说明",
          icon: "align-justify",
          link: "/adddescription"
        },
        {
          text: "消息翻译",
          icon: "right-left",
          link: "/translate"
        },
        {
          text: "内置搜索",
          icon: "magnifying-glass",
          link: "/search"
        },
        {
          text: "动态功能",
          icon: "camera-retro",
          link: "/stories"
        },
        {
          text: "附近的人和群组",
          icon: "location-arrow",
          link: "/nearby"
        },
        {
          text: "Telegram主题",
          icon: "palette",
          link: "/theme"
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
        {
          text: "机器人推荐",
          icon: "thumbs-up",
          link: "/robot"
        },
      ],
    },
    {
      text: "高级功能",
      icon: "layer-group",
      collapsible: true,
      children: [
        {
          text: "慢速模式",
          icon: "clock-rotate-left",
          link: "/slowmode"
        },
        {
          text: "对话分组",
          icon: "folder-open",
          link: "/divide"
        },
        {
          text: "Telegraph",
          icon: "indent",
          link: "/telegraph"
        },
        {
          text: "加密对话",
          icon: "masks-theater",
          link: "/encrypt"
        },
        {
          text: "邮箱登录",
          icon: "envelope-open-text",
          link: "/emaillogin"
        },
        {
          text: "私聊机器人搭建",
          icon: "reply-all",
          link: "/livegram"
        },
        {
          text: "小程序",
          icon: "window-restore",
          link: "/miniapp"
        },
        {
          text: "Premium",
          icon: "gem",
          link: "/premium"
        },
        {
          text: "Business",
          icon: "briefcase",
          link: "/business"
        },
        {
          text: "频道/群组助推",
          icon: "bolt",
          link: "/boost"
        },
        {
          text: "频道创收",
          icon: "coins",
          link: "/monetization"
        },
        {
          text: "找出群管理员",
          icon: "user-tie",
          link: "/findadmin"
        },
        {
          text: "频道身份发言",
          icon: "message",
          link: "/speakaschannel"
        },
        {
          text: "第三方客户端",
          icon: "wand-magic-sparkles",
          link: "/thirdparty"
        },
        {
          text: "Fragment",
          icon: "hand-holding-dollar",
          link: "/fragment"
        },
      ],
    },
    {
      text: "设置与帮助",
      icon: "gear",
      collapsible: true,
      children: [
        {
          text: "隐私设置",
          icon: "shield-halved",
          link: "/privacy"
        },
        {
          text: "代理设置",
          icon: "server",
          link: "/proxy"
        },
        {
          text: "缓存与下载",
          icon: "download",
          link: "/download"
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
        {
          text: "联系官方",
          icon: "address-book",
          link: "/contact"
        },
        {
          text: "常见问题与解答",
          icon: "circle-question",
          link: "/faq"
        },
      ],
    },
  ],
});
