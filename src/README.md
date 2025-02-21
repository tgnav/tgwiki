---
home: true
icon: home
title: 主页
head:
  - - meta
    - name: keywords
      content: TGwiki,Telegram知识库,Telegram使用说明,Telegram教程,Telegram功能介绍,Telegram设置,Telegram使用技巧,TG知识库,TG使用说明,TG教程,TG功能介绍,TG设置,TG使用技巧,电报知识库,电报使用说明,电报教程,电报功能介绍,电报设置,电报使用技巧
heroImage: ./assets/icon/logo.svg
heroImageDark: ./assets/icon/logo2.svg
bgImage: ./assets/image/0-light.svg
bgImageDark: ./assets/image/0-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: TGwiki - Telegram知识库
tagline: TGwiki - Telegram知识库，由TGNAV打造的高质量Telegram知识库，帮助用户更科学地使用Telegram。
heroFullScreen: true
actions:
  - text: 立即开始
    icon: lightbulb
    link: ./guide.html
    type: primary
  - text: TGNAV
    icon: link
    link: https://tgnav.github.io/

highlights:
  - header: 特性
    image: ./assets/image/1.svg
    bgImage: ./assets/image/1-light.svg
    bgImageDark: ./assets/image/1-dark.svg
    highlights:
      - title: 全面
        details: TGwiki汇集了Telegram常用功能介绍和使用说明，旨在打造一个高质量的Telegram知识库。
      - title: 清晰
        details: 多个来源的内容重新汇集整理，重点突出、清晰明了，为您提供更好的阅读体验。
      - title: 易懂
        details: 内容通俗易懂，并配有操作演示和界面截图，帮助刚接触Telegram的小白快速入门！
      - title: 开源
        details: 本项目在GitHub上开源，您可以点击导航栏中的“开源地址”访问GitHub仓库找到本站的源代码。
      - title: 自由
        details: 您可以点击知识库文章底部的“编辑此页”协助修改完善知识库，管理员审核后会推送更新。
      - title: 便捷
        details: TGwiki支持PWA（渐进式网络应用程序），您可以将TGwiki安装到设备桌面上。

  - header: 热门文章
    image: ./assets/image/2.svg
    bgImage: ./assets/image/2-light.svg
    bgImageDark: ./assets/image/2-dark.svg
    features:
      - title: 名词解释
        icon: info-circle
        details: Telegram常用术语介绍
        link: /term.html
      - title: 中文语言包
        icon: language
        details: 安装中文语言包，将界面转换为中文
        link: /language.html
      - title: 消息格式
        icon: paragraph
        details: Telegram消息富文本格式，以及部分引用功能
        link: /format.html
      - title: 图片排版
        icon: image
        details: 发送图片时添加文字说明，发送原图，对图片重新排序
        link: /editphoto.html
      - title: 创建贴纸
        icon: note-sticky
        details: 创建自己的贴纸包，可通过链接分享给别人
        link: /createsticker.html
      - title: 创建机器人
        icon: robot
        details: 依照Bot Api编写自己的机器人
        link: /createrobot.html
      - title: 对话分组
        icon: folder-open
        details: 设置对话分组，分类整理对话列表
        link: /divide.html
      - title: 邮箱登录
        icon: envelope-open-text
        details: 开启邮箱登录，通过邮箱接收验证码登录Telegram
        link: /emaillogin.html
      - title: 私聊机器人搭建
        icon: reply-all
        details: 搭建私聊机器人，方便被双向限制的用户私聊
        link: /livegram.html
      - title: 小程序
        icon: window-restore
        details: 创建Web应用程序，提供无缝且灵活的用户体验
        link: /miniapp.html
      - title: 频道/群组助推
        icon: bolt
        details: 通过助推帮助频道/群组开启更多功能
        link: /boost.html
      - title: 第三方客户端
        icon: wand-magic-sparkles
        details: 第三方客户端通过Api编写，加入了一些额外的功能
        link: /thirdparty.html
      - title: 隐私设置
        icon: shield-halved
        details: 完善隐私设置，有效保护隐私
        link: /privacy.html
      - title: 未收到验证码
        icon: comment-sms
        details: 注册登录时没有收到验证码的解决方案
        link: /notcomesms.html
      - title: 解除私聊限制
        icon: user-lock
        details: 无法发起私聊的申诉步骤
        link: /spam.html
      - title: 解除敏感内容限制
        icon: table-cells-row-lock
        details: Telegram解除敏感内容限制，加入开车群
        link: /pornios.html

  - header: 电报入门
    description: Telegram的入门知识，快速入手Telegram
    image: ./assets/image/3.svg
    bgImage: ./assets/image/3-light.svg
    bgImageDark: ./assets/image/3-dark.svg
    highlights:
      - title: 文档指南
        icon: lightbulb
        details: TGwiki文档使用说明和阅读提示
        link: /guide.html
      - title: 名词解释
        icon: info-circle
        details: Telegram常用术语介绍
        link: /term.html
      - title: Telegram限制
        icon: hand
        details: Telegram的规则和限制
        link: /limit.html
      - title: DC说明
        icon: database
        details: 有关Telegram的5个数据中心的介绍
        link: /dc.html
      - title: 中文语言包
        icon: language
        details: 安装中文语言包，将界面转换为中文
        link: /language.html

  - header: 基础操作
    description: Telegram基础操作介绍，Telegram必备技能
    image: ./assets/image/4.svg
    bgImage: ./assets/image/4-light.svg
    bgImageDark: ./assets/image/4-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 新建群组
        icon: users
        link: /creategroup.html
      - title: 新建频道
        icon: bullhorn
        link: /createchannel.html
      - title: 添加账号
        icon: user-plus
        details: 在一个设备上登录多个账号
        link: /multiaccount.html
      - title: 删除账号
        icon: user-slash
        details: 永久删除您的账号，此操作不可恢复
        link: /deleteaccount.html
      - title: 管理群组
        icon: users-gear
        details: Telegram群组设置和管理
        link: /managegroup.html
      - title: 评论功能
        icon: comments
        details: 在频道消息下方显示评论区
        link: /comment.html
      - title: 对话归档
        icon: archive
        details: 将不常用的对话归档并关闭消息通知
        link: /archive.html
      - title: 收藏夹
        icon: bookmark
        details: 将消息转发到收藏夹，在所有设备上均可访问
        link: /favourite.html
      - title: 扫一扫
        icon: qrcode
        details: 扫描二维码登录桌面版客户端或Telegram网页版
        link: /scan.html
      - title: 消息格式
        icon: paragraph
        details: Telegram消息富文本格式，以及部分引用功能
        link: /format.html
      - title: 创建投票
        icon: square-poll-vertical
        details: 投票支持匿名投票和小测验模式
        link: /poll.html
      - title: 图片排版
        icon: image
        details: 发送图片时添加文字说明，发送原图，对图片重新排序
        link: /editphoto.html
      - title: 消息翻译
        icon: right-left
        details: 将其他语言的消息翻译成选定语言
        link: /translate.html
      - title: 内置搜索
        icon: magnifying-glass
        details: Telegram搜索技巧，通过内置搜索查找对话、消息
        link: /search.html
      - title: 动态功能
        icon: camera-retro
        details: 发布动态，动态将显示在对话列表上方标题处
        link: /stories.html     
      - title: 对话分组
        icon: folder-open
        details: 设置对话分组，分类整理对话列表
        link: /divide.html
      - title: 附近的人和群组
        icon: location-arrow
        link: /nearby.html
      - title: Telegram主题
        icon: palette
        details: 设置个性化主题美化界面，支持自定义
        link: /theme.html
      - title: 创建贴纸
        icon: note-sticky
        details: 创建自己的贴纸包，可通过链接分享给别人
        link: /createsticker.html
      - title: 创建机器人
        icon: robot
        details: 依照Bot Api编写自己的机器人
        link: /createrobot.html
      - title: 机器人推荐
        icon: thumbs-up
        details: Telegram实用机器人推荐
        link: /robot.html

  - header: 高级功能
    description: Telegram的高级功能介绍，教你玩转Telegram
    image: ./assets/image/5.svg
    bgImage: ./assets/image/5-light.svg
    bgImageDark: ./assets/image/5-dark.svg
    features:
      - title: 慢速模式
        icon: clock-rotate-left
        details: 设置群组成员发言时间间隔
        link: /slowmode.html
      - title: Telegraph
        icon: indent
        details: 通过Telegraph快速发表并分享你的文章
        link: /telegraph.html
      - title: 加密对话
        icon: masks-theater
        details: 开启端到端加密，可设置阅后即焚计时器
        link: /encrypt.html
      - title: 私聊机器人搭建
        icon: reply-all
        details: 搭建私聊机器人，方便被双向限制的用户私聊
        link: /livegram.html
      - title: 小程序
        icon: window-restore
        details: 创建Web应用程序，提供无缝且灵活的用户体验
        link: /miniapp.html
      - title: 内置浏览器
        icon: window-maximize
        details: 使用内置浏览器在Telegram内打开任何链接
        link: /browser.html
      - title: Premium
        icon: gem
        details: Telegram大会员专属功能介绍及开通价格
        link: /premium.html
      - title: Business
        icon: briefcase
        details: Telegram商业版专属功能及开通方法介绍
        link: /business.html
      - title: 频道/群组助推
        icon: bolt
        details: 通过助推帮助频道/群组开启更多功能
        link: /boost
      - title: 频道创收
        icon: coins
        details: 频道广告收入分成，发布付费媒体赚取星币
        link: /monetization.html
      - title: Telegram星币
        icon: star
        details: 使用Telegram星币赠送礼物、购买商品
        link: /stars.html
      - title: 找出群管理员
        icon: user-tie
        details: 快速找到Telegram群组管理员的几种方法
        link: /findadmin.html
      - title: 频道身份发言
        icon: message
        details: 以频道马甲身份发言，在防止骚扰的同时引流
        link: /speakaschannel.html
      - title: 快捷键
        icon: keyboard
        details: Telegram Desktop常用快捷键介绍
        link: /shortcut.html
      - title: 第三方客户端
        icon: wand-magic-sparkles
        details: 第三方客户端通过Api编写，加入了一些额外的功能
        link: /thirdparty.html
      - title: Fragment
        icon: hand-holding-dollar
        details: Fragment拍卖平台及TON加密货币介绍
        link: /fragment.html

  - header: 设置与帮助
    description: Telegram各项设置说明，Telegram常见问题
    image: ./assets/image/6.svg
    bgImage: ./assets/image/6-light.svg
    bgImageDark: ./assets/image/6-dark.svg
    highlights:
      - title: 隐私设置
        icon: shield-halved
        details: 完善隐私设置，有效保护隐私
        link: /privacy.html
      - title: 代理设置
        icon: server
        details: 连接到Telegram内置代理
        link: /proxy.html
      - title: 缓存与下载
        icon: download
        details: 清除Telegram缓存，修改自动下载设置
        link: /download.html
      - title: 邮箱登录
        icon: envelope-open-text
        details: 开启邮箱登录，通过邮箱接收验证码登录Telegram
        link: /emaillogin.html
      - title: 未收到验证码
        icon: comment-sms
        details: 注册登录时没有收到验证码的解决方案
        link: /notcomesms.html
      - title: 号码被封禁
        icon: ban
        details: 注册登录时提示号码被封禁的解决方案
        link: /banned.html
      - title: 解除私聊限制
        icon: user-lock
        details: 无法发起私聊的申诉步骤
        link: /spam.html
      - title: 解除敏感内容限制
        icon: table-cells-row-lock
        details: Telegram解除敏感内容限制，加入开车群
        link: /pornios.html
      - title: 联系官方
        icon: address-book
        details: Telegram官方的联系方式
        link: /contact.html
      - title: 常见问题与解答
        icon: circle-question
        link: /faq.html

footer: Copyright © 2025 <a href="https://tgnav.github.io/tgwiki/" target="_blank">TGwiki</a> by <a href="https://tgnav.github.io/" target="_blank">TGNAV</a><br/><span id="busuanzi_container_site_pv">本站总访问量：<span id="busuanzi_value_site_pv"></span>次</span>
---

