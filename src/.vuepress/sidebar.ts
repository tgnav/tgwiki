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
          link: "/guide.html"
        },
        {
          text: "名词解释",
          icon: "info-circle",
          link: "/term.html"
        },
        {
          text: "Telegram限制",
          icon: "hand",
          link: "/limit.html"
        },
        {
          text: "DC说明",
          icon: "database",
          link: "/dc.html"
        },
        {
          text: "中文语言包",
          icon: "language",
          link: "/language.html"
        },
        {
          text: "谨防诈骗",
          icon: "bug",
          link: "/scam.html"
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
          link: "/creategroup.html"
        },
        {
          text: "新建频道",
          icon: "bullhorn",
          link: "/createchannel.html"
        },
        {
          text: "添加账号",
          icon: "user-plus",
          link: "/multiaccount.html"
        },
        {
          text: "删除账号",
          icon: "user-slash",
          link: "/deleteaccount.html"
        },
        {
          text: "管理群组",
          icon: "users-gear",
          link: "/managegroup.html"
        },
        {
          text: "评论功能",
          icon: "comments",
          link: "/comment.html"
        },
        {
          text: "对话归档",
          icon: "archive",
          link: "/archive.html"
        },
        {
          text: "收藏夹",
          icon: "bookmark",
          link: "/favourite.html"
        },
        {
          text: "扫一扫",
          icon: "qrcode",
          link: "/scan.html"
        },
        {
          text: "消息格式",
          icon: "paragraph",
          link: "/format.html"
        },
        {
          text: "创建投票",
          icon: "square-poll-vertical",
          link: "/poll.html"
        },
        {
          text: "图片排版",
          icon: "image",
          link: "/editphoto.html"
        },
        {
          text: "消息翻译",
          icon: "right-left",
          link: "/translate.html"
        },
        {
          text: "内置搜索",
          icon: "magnifying-glass",
          link: "/search.html"
        },
        {
          text: "动态功能",
          icon: "camera-retro",
          link: "/stories.html"
        },
        {
          text: "对话分组",
          icon: "folder-open",
          link: "/folder.html"
        },
        {
          text: "附近的人和群组",
          icon: "location-arrow",
          link: "/nearby.html"
        },
        {
          text: "Telegram主题",
          icon: "palette",
          link: "/theme.html"
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
      icon: "layer-group",
      collapsible: true,
      children: [
        {
          text: "慢速模式",
          icon: "clock-rotate-left",
          link: "/slowmode.html"
        },
        {
          text: "Telegraph",
          icon: "indent",
          link: "/telegraph.html"
        },
        {
          text: "加密对话",
          icon: "masks-theater",
          link: "/encrypt.html"
        },
        {
          text: "私聊机器人搭建",
          icon: "reply-all",
          link: "/livegram.html"
        },
        {
          text: "小程序",
          icon: "window-restore",
          link: "/miniapp.html"
        },
        {
          text: "内置浏览器",
          icon: "window-maximize",
          link: "/browser.html"
        },
        {
          text: "Premium",
          icon: "gem",
          link: "/premium.html"
        },
        {
          text: "Business",
          icon: "briefcase",
          link: "/business.html"
        },
        {
          text: "频道/群组助推",
          icon: "bolt",
          link: "/boost.html"
        },
        {
          text: "频道创收",
          icon: "coins",
          link: "/monetization.html"
        },
        {
          text: "Telegram星币",
          icon: "star",
          link: "/stars.html"
        },
        {
          text: "找出群管理员",
          icon: "user-tie",
          link: "/findadmin.html"
        },
        {
          text: "频道身份发言",
          icon: "message",
          link: "/speakaschannel.html"
        },
        {
          text: "快捷键",
          icon: "keyboard",
          link: "/shortcut.html"
        },
        {
          text: "Fragment",
          icon: "hand-holding-dollar",
          link: "/fragment.html"
        },
      ],
    },
    {
      text: "第三方客户端",
      icon: "wand-magic-sparkles",
      collapsible: true,
      children: [
        {
          text: "概览",
          icon: "table-list",
          link: "/thirdparty.html"
        },
        {
          text: "Nagram",
          icon: "n",
          link: "/nagram.html"
        },
        {
          text: "Turrit",
          icon: "meteor",
          link: "/turrit.html"
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
          link: "/privacy.html"
        },
        {
          text: "代理设置",
          icon: "server",
          link: "/proxy.html"
        },
        {
          text: "缓存与下载",
          icon: "download",
          link: "/download.html"
        },
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
          text: "账号被冻结",
          icon: "snowflake",
          link: "/frozen.html"
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
        {
          text: "联系官方",
          icon: "address-book",
          link: "/contact.html"
        },
        {
          text: "内容审核",
          icon: "circle-exclamation",
          link: "/moderation.html"
        },
        {
          text: "用户数据披露",
          icon: "address-card",
          link: "/transparency.html"
        },
        {
          text: "常见问题与解答",
          icon: "circle-question",
          link: "/faq.html"
        },
      ],
    },
  ],
});
