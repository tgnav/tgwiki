---
title: Nagram
description: Nagram是一个基于NekoX并进行了一些修改的第三方Telegram客户端。拥有强大的功能且在GitHub上开源。本文介绍了Nagram的特色功能及自定义设置。
head:
  - - meta
    - name: keywords
      content: Nagram,Nagram自定义设置,Nagram功能,Telegram第三方客户端推荐,Telegram第三方,TG第三方客户端推荐,TG第三方,电报第三方客户端推荐,电报第三方
---

Nagram是一个基于NekoX并进行了一些修改的第三方Telegram客户端。拥有强大的功能且在 [GitHub](https://github.com/NextAlone/Nagram) 上开源。

**Nagram下载方式**：[GitHub](https://github.com/NextAlone/Nagram/releases) / [Telegram Channel](https://t.me/nagram_channel)

::: tip

以下介绍的各项功能设置均在`设置`->`N-设置`中。

由于Nagram自定义设置条目较多，本文篇幅有限，一些通俗易懂和不常用的条目在此省略。

:::

::: important

以下各项目中的“直达”按钮仅在Nagram内有效，使用外部浏览器或其他应用无法打开。您可以复制链接到Nagram应用中打开。

:::

## 通用

### 翻译 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/general?r=TranslationProvider)

::: details 界面截图

![na-general1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/general1.jpg)

:::

- **翻译源**：Google翻译<Badge text="推荐" type="tip" vertical="top" />、Google中文翻译、Yandex翻译、彩云小译、微软翻译、有道翻译、DeepL翻译、Telegram API、腾讯交互翻译

- 目标翻译语言：将其他人的消息翻译成什么语言。

- 输入翻译目标语言：将你输入的消息翻译成什么语言。

  ::: tip

  输入翻译使用方法：输入消息后点击输入框右侧的三个点，选择`翻译`。

  :::

- Google Cloud翻译秘钥：设置后，将调用云翻译API，翻译更快速、稳定且节省流量。

- 翻译后隐藏原文：若关闭，你将会同时看到消息的原文和译文，中间用`-------`分隔开。

### 文件夹（对话分组） [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/general?r=HideAllTab)

::: details 界面截图

![na-general2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/general2.jpg)

:::

- 隐藏“全部对话”：开启后，将不再显示“全部对话”分组。你可以在主页按“返回”按钮打开“全部对话”。
- 下拉打开已归档对话：将“已归档对话”隐藏在列表顶部，通过下拉打开。
- 忽略文件夹标签中静音的未读计数：文件夹未读对话数量仅显示置顶对话和开启通知的对话。
- 忽略文件夹标签上的未读计数：压根不显示文件夹未读对话数量。
- 在标签栏上显示：`标题`/`图标`/`图标和标题`
- 隐藏文件夹中的“全部取消静音”：长按文件夹标签时不再显示`全部静音`和`全部取消静音`选项。

### 外观 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/general?r=TypefaceUseDefault)

::: details 界面截图

![na-general3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/general3.jpg)

:::

- 一直显示圣诞帽：在主界面标题（”Nagram“）显示圣诞帽，重启应用生效。
- 一直显示下载管理器：在主界面右上角（搜索旁边）一直显示下载按钮，而不是有下载时才显示。
- 标题栏装饰、图标装饰、聊天框装饰：是否显示节日装饰，默认是`基于日期`
- 通知图标样式：`官方`/`Nagram`<Badge text="默认" type="tip" vertical="top" />/`Nekogram`

### 隐私 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/general?r=DisableSystemAccount)

- 禁用系统账户：在**手机系统设置**的“用户与账号”中（不同系统名称可能不同）不显示Nagram账号信息，防止其他应用读取。
- 禁用分享我的手机号码：添加联系人时取消勾选“分享手机号码”
- 禁用修改手机号码的建议：不再在设置中显示“xxx还是你的手机号吗”通知
- 禁用官方网页自动登录：打开网页时不传递账号登录信息

### 通用 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/general?r=CustomTitle)

::: details 界面截图

![na-general4.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/general4.jpg)

:::

- 自定义标题：自定义主界面顶部的标题
- 自定义存储路径：修改文件的下载路径
- 禁用五秒内后悔：执行操作（例如删除对话）时，不再显示“撤销”提示。
- 在个人资料中显示ID/DC：是否显示用户ID和所在数据中心
- 启用应用内相机：拍摄照片使用应用内相机还是系统相机
- 禁用数字舍入：开启后，频道/群组的成员数将显示精确数字，而不是大概数量。

## 聊天

### 聊天 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/chat?r=EmojiSet)

::: details 界面截图

![na-chat1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat1.jpg)

:::

- Emoji包：自定义显示的表情包，支持导入ttf文件，仅本地生效。

- 以秒为单位显示时间戳：消息时间戳精确到秒（正常是精确到分钟）

- 标记频道匿名身份别名：在别人用频道发言的右上角标记别名，以和正常用户发言区分。

- 消息菜单：设置轻点消息时显示的菜单

  ::: details 操作演示

  ![na-chat2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat2.jpg)

  :::

- 默认删除菜单：设置管理员删除成员时默认的操作菜单

- 禁用对话导航栏按钮：设置长按选中消息时，哪些按钮不显示在操作栏中

- 显示服务消息时间：为所有服务消息（加入/退出提示，近期操作等）显示时间戳

- 显示转发消息日期：显示被转发的消息原先的发出时间

- 总是保存聊天记录的偏移量：离开对话后重新打开仍保持原先的阅读进度

- 文本样式：设置在输入框选中文本后可以进行的样式编辑操作

- 显示用户最近在线状态：在群组聊天时，每个成员的右下角显示一个在线状态

- 着色管理员头衔：使管理员头衔更明显

### 交互 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/chat?r=HideKeyboardOnChatScroll)

::: details 界面截图

![na-chat3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat3.jpg)

:::

- 禁用相机即时预览：选择图片时是否开启即时相机预览

- 禁用趋势推荐：您可以在此处禁用一些TG内的一些通知和功能。例如Premium升级通知（在对话列表顶部推荐你订阅Premium的通知）等。

  ::: details 操作演示

  ![na-chat4.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat4.jpg)

  :::

- 禁用点按切换图片/头像：点按图片左右侧将不再切换到上/下一张图片。

- 隐藏消息已读提示：隐藏群组内点击“已读回执”时下方的”已读信息仅保留7天“提示

- 使用群组名称作为输入框提示：将输入框占位符（placeholder）显示为当前群组名称。

- 隐藏输入框中的机器人按钮：输入框右侧不再显示“/”（召唤机器人命令的按钮）

- 禁用点击指令文本发送：点击其他人发送的机器人命令时不会发送消息，防止误触

### 贴纸 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/chat?r=DontSendGreetingSticker)

::: details 界面截图

![na-chat5.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat5.jpg)

:::

- 不要发送问候贴纸：禁用打开新聊天时点击发送问候贴纸的功能

- 隐藏贴纸发送时间：隐藏贴纸右下角的时间信息，同时也会隐藏已读标识

- 真正的隐藏贴纸发送时间：隐藏贴纸右下角的时间信息，您仍可以看到已读标识

  ::: tip

  以上两个条目只是在你的设备上不显示贴纸的发送时间，而不是从服务器上隐藏。同时你的在线行为（比如已读回执）也会被正常记录。

  :::

### 操作确认 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/chat?r=AskBeforeCalling)

- 呼叫前确认
- 跳过打开链接确认
- 发送视频/语音留言前确认
- 复读前确认

## 实验性功能 [<Badge text="直达" vertical="middle" />](https://t.me/nasettings/experimental?r=channelAlias)

::: details 界面截图

![na-experimental.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/na/experimental.jpg)

:::

- 频道别名：您可以为每个频道标记别名（频道信息右上角三个点->`标记别名`），本地生效。
- 伪装高性能设备：让服务器认为当前设备是高性能设备
- 隐藏代理赞助商频道：使用内置代理时，隐藏对话列表顶部的赞助商广告。
- 外部贴纸缓存：与其他应用共享贴纸包
- Pangu化：发送（或接收）消息时，在中文等全角语言和英文等半角语言中间插入空格，使消息更具可读性。

## 其他

- Nagram支持最多登录8个账号（大会员可以登录10个）。
- 联系人列表支持显示是否是双向联系人。
- 全局搜索->点击搜索框右侧二维码图标，可以使用扫一扫功能，直接扫描其他用户分享的二维码。
- 长按全局搜索图标，打开收藏夹。
- 长按主界面左上角三个横线，显示最近的对话。
- 在设置主页面点击右上角搜索图标，可以搜索Nagram自定义设置条目。


