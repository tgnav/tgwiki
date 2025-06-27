---
title: 私聊机器人搭建
description: 部分账号可能会有双向限制，无法直接发起私聊，这时候可能就需要一个私聊机器人。本文介绍了Telegram搭建私聊机器人的方法，无需服务器即可直接搭建。
head:
  - - meta
    - name: keywords
      content: Telegram私聊机器人,Telegram双向机器人,Telegram消息转发机器人,Telegram机器人,TG私聊机器人,TG双向机器人,TG消息转发机器人,TG机器人,电报私聊机器人,电报双向机器人,电报消息转发机器人,电报机器人
---

部分账号可能会有双向限制，无法直接发起私聊，这时候可能就需要一个私聊机器人。同时，私聊机器人还可以用作投稿，防止垃圾信息骚扰。

::: tip

提供双向机器人服务的机器人有很多（均不是Telegram官方），如 [@ModularBot](https://t.me/ModularBot) 、[@EasyPM_bot](https://t.me/EasyPM_bot) 等。本文以  [@LivegramBot](https://t.me/LivegramBot) 为例，其他机器人流程与此相似。

:::

## 步骤

1. 首先，请先 [按照教程](./createrobot.html.html) 创建一个机器人。

2. 私聊 [@LivegramBot](https://t.me/LivegramBot) ，并选择一个语言。

3. 点击`Add Bot`，机器人提示：`To connect a bot, you should follow these two steps...`

4. 将您的Token发送给机器人（格式：`12345:6789ABCDEF`）。

   机器人提示：`Success! @xxxbot has been connected. The bot will forward any (including your own) messages sent to it...`

5. 接下来，私聊你的机器人。所有发给私聊机器人的消息（包括你自己的）都会转发给你。

::: details 操作演示

![tfa-livegram1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/livegram1.jpg)

![tfa-livegram2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/livegram2.jpg)

:::

## 使用技巧

- 回复私聊机器人的消息，机器人会自动将您的消息转发给对方

- 您可以使用`/ban`或`/unban`命令回复消息，来封禁或解封账号

- 你可以在  [@LivegramBot](https://t.me/LivegramBot) ->`My Bots` 中管理机器人：
  - Localizations：设置多语言欢迎信息
  
  - Groups：将私聊消息转发到群组
  
  - Broadcast：向所有使用者发送广播
  
  - Statistics：查看机器人统计信息
  
  - Anonymous Mode
  
    **设置步骤**：准备一个开启话题模式的群组，将机器人拉入群组中并授予管理话题权限。
  
    **功能**：机器人会为不同用户的私信创建不同的话题，便于管理消息。
  
    ::: warning
  
    此项设置开启后不可撤销，请谨慎操作。
  
    :::
  
  - Disconnect Bot：取消连接机器人

::: details 界面截图

![tfa-livegram3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/livegram3.jpg)

:::
