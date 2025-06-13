---
title: 文档指南
description: 欢迎使用TGwiki！TGwiki是Telegram Wiki的缩写，汇集了Telegram的使用说明，旨在帮助用户更全面地了解Telegram的各种功能。本页是TGwiki的文档指南，向你介绍一些文档的使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram使用说明,TGwiki指南,Telegram介绍,Telegram入门,TG使用说明,TG介绍,TG入门,电报使用说明,电报介绍,电报入门,TGwiki,Telegram知识库
---

欢迎使用TGwiki！TGwiki是Telegram Wiki的缩写，汇集了Telegram的使用说明，旨在帮助用户更全面地了解Telegram的各种功能。本页是TGwiki的文档指南，向你介绍一些文档的使用技巧。

知识库由人为编写，难免存在一些疏漏。如果您发现了一些问题，欢迎进行补充、修改（流程见本页下方的“文档维护”），我们将不胜感激！

::: tip

为了更好地解释和示范，文档中附有`操作演示`和`界面截图`。随着时间推移，最新版界面可能会有细节差异。理论上，若没有特大界面变化，截图仍然适用。

:::

## 关于Telegram

Telegram（非正式简称TG、电报、纸飞机）是跨平台的即时通信软件，其客户端是自由及开放源代码软件，但服务端是专有软件。用户可以相互交换加密与自毁消息，发送照片、影片等所有类型文件。

- 高度加密：使用独有的网络传输协议MTProto，无惧被黑客攻击。

- 没有审查：不用担心被封号，除非执法调查单位能证明用户是恐怖分子。

  ::: warning

  自2024年10月起，Telegram开始大力审查被举报的频道/群组，并对违反用户协议的频道/群组（包括色情、暴力、版权问题等）进行限制，严重的会直接删除。

  有关Telegram内容审查的详细信息请参阅 [此处](./moderation.html) 。

  :::

- 不占内存：聊天记录保存在云端，任何设备，无缝同步，随取随用。

  ::: info

  有关Telegram缓存和下载，请参阅 [此处](./download.html) 。

  :::

- 超大群聊：封顶 20 万人，配合各种管理工具（例如限制发言间隔），让大型社群的交流也能井井有条。

- 表情贴纸：采用高清的矢量图格式，并且支持自制表情包。

  ::: info

  有关创建自己的贴纸包，请参阅 [此处](./createsticker.html) 。

  :::

- 机器人：开放的api接口，允许开发者制作自己的机器人。

  ::: info

  有关创建机器人，请参阅 [此处](./createrobot.html) 。

  :::

::: note

自2024年10月起（Durov在法国被俘保释后），Telegram开始回复地方政府的法律请求，向其大量披露有关违法账号的手机号和IP地址。

你可以在 [此处](./transparency.html) 查看更多信息。

:::

## 谨防盗号

近期大量盗号分子出现，请大家务必小心。

::: caution

Telegram官方不会主动联系你！

所有管你要手机号的都是盗号！

陌生人发的未知文件不要轻易下载！

:::

::: info

Telegram平台上的常见骗术请参阅 [此处](./scam.html) 。提前了解谨防上当受骗！

:::

## 在开始之前

您需要在设备上安装Telegram客户端并注册一个Telegram账号。

::: important

桌面版/网页版Telegram以及第三方客户端均不能用于注册，您需要使用移动设备上的Telegram官方客户端注册账号。

:::

::: details 附：Telegram官方应用程序下载地址

|             名称             |        适用系统         |                             地址                             |
| :--------------------------: | :---------------------: | :----------------------------------------------------------: |
|     Telegram for Android     |         Android         | [官网直装版](https://telegram.org/dl/android/apk) / [Google Play](https://play.google.com/store/apps/details?id=org.telegram.messenger) |
| Telegram for iPhone and iPad |           iOS           | [App Store](https://apps.apple.com/us/app/telegram-messenger/id686449807) |
|       Telegram Desktop       |   Windows/macOS/Linux   |          [官网下载](https://desktop.telegram.org/)           |
|      Telegram for macOS      |          macOS          | [官网直装版](https://telegram.org/dl/macos) / [App Store](https://apps.apple.com/us/app/telegram/id747648890) |
|         Telegram Web         |     *All platforms*     | [旧版（K）](https://telegram.org/dl/webk) / [新版（A）](https://telegram.org/dl/weba) |
|            TDLib             | *cross-platform client* | [官方介绍](https://telegram.org/blog/tdlib) / [GitHub](https://github.com/tdlib/td) |
|          Telegram X          |         Android         | [官方频道](https://t.me/tgx_log) / [Google Play](https://play.google.com/store/apps/details?id=org.thunderdog.challegram) |

:::

## 开始阅读

- 初识Telegram？从 [Telegram名词解释](./term.html) 开始吧！
- 想知道如何保护隐私？ [Telegram隐私设置](./privacy.html) 可能帮助到你。
- 界面全是英文，看不懂？安装 [Telegram语言包](./language.html) ，将界面切换为中文。
- 无法查看敏感内容？请阅读 [Telegram解除敏感内容限制](./pornios.html) 。
- 无法主动私聊？[Telegram解除私聊限制](./spam.html) 中有详细的解决方法。
- 收不到短信验证码？请参阅 [此处](./notcomesms.html) 。

::: tip

侧边栏有文档目录，您可以快速定位到目标内容。

[文档主页](/) 有完整的文章列表。

您可以查看 [Telegram常见问题与解答](./faq.html) ，希望能帮助到您。

除此之外，您还可以通过文档的关键词搜索功能查找相关内容。

*若搜索无法加载，请刷新页面重试。*

:::

## 文档维护

本文档在 [GitHub](https://github.com/tgnav/tgwiki) 上开源，所有人均可以协助维护。

**如何参与维护文档？**

- 点击对应页面下方的“编辑此页“
- 登录GitHub账号
- Fork储存库，编辑文件
- 提交Pull Request
- 管理员审核后将推送更新

## 参考资料

本文档内容搜集自以下来源，并在其基础上重新整理：

- [Telegram官方博客](https://telegram.org/blog)
- [Telegram Tips](https://t.me/TelegramTips)
- [Telegram Info](https://t.me/tginfo)
- [Telegram Info中文](https://t.me/tginfocn)
- [Telegram中文频道](https://t.me/tgcnz)
- [TG极客](https://t.me/TGgeek)
- [Telegram新手指南、使用教程及频道推荐](https://tingtalk.me/telegram)

Telegram中文社群（已满）：[@tgcnx](https://t.me/tgcnx)

Telegram 中文圈2：[@tgzhcn](https://t.me/tgzhcn)

::: tip

查找更多Telegram优质频道/群组请访问 [TGNAV - Telegram频道群组导航](https://www.tgnav.org/) 。

:::
