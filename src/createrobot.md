---
title: 创建机器人
description: 机器人是Telegram的特色功能之一。Telegram提供开放的api接口，允许开发者制作自己的机器人。本文介绍了如何创建自己的机器人，以及管理机器人的各项功能说明。
head:
  - - meta
    - name: keywords
      content: Telegram创建机器人,Telegram机器人,Telegram管理机器人,Telegram编辑机器人,TG创建机器人,TG机器人,TG管理机器人,TG编辑机器人,电报创建机器人,电报机器人,电报管理机器人,电报编辑机器人
---

机器人是Telegram的特色功能之一。Telegram提供开放的api接口，允许开发者制作自己的机器人。

## 创建机器人

1. 打开Telegram
2. 搜索 [@BotFather](https://t.me/botfather)
3. 点击`START`（开始）
4. 点击`Menu`（菜单）->点击`/newbot`（新机器人）
    BotFather 回复：`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5. 输入机器人名称（自定义）
    BotFather 回复：`Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.`
6. 输入机器人用户名（bot为结尾，例：`abcbot`，用户名设置后不可更改）
    BotFather 回复（得到以下回复说明创建成功）：`Done! Congratulations on your new bot. You will find it at t.me/abcbot....`（`完毕！ 恭喜您的新机器人。 您可以在 t.me/abcbot 找到它。`）

::: details 操作演示

![tfa-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/createrobot1.jpg)

:::

::: danger

请勿泄露API Token（格式：`12345:6789ABCDEF`），所有知道API Token的人都可以控制你的机器人！

:::

## 管理机器人

1. 点击`Menu`（菜单）-> 点击 `/mybots`（我的机器人）

2. 点击机器人用户名

   ::: details 界面截图

   ![tfa-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/createrobot2.jpg)

   :::

   - API Token（API令牌，用于控制机器人）

   - Edit bot（编辑bot）

     - Edit Name（编辑名称）
     - Edit About（编辑关于，内容显示在机器人简介处）
     - Edit Description（编辑说明，用户会在启用机器人前“它能做什么”中看到）
     - Edit Description Pecture（编辑描述图片）
     - Edit Botpic（编辑机器人头像）
     - Edit Commands（编辑命令，可以在此处添加/修改命令，如`/help`等）

   - Bot settings（bot设置）

     - lnline mode（内联模式，开启后在输入框@机器人可以使用内联功能）
   
     - Allow Groups?（允许将机器人拉入群组吗？）
   
     - Group Privacy（群组隐私，默认开启，机器人未收到命令不会读取群组消息内容）
   
     - Group Admin Rights（群组管理员权限，开启后拉入群组时需要授予管理员权限）
   
     - Channle Admin Rights（频道管理员权限，开启后拉入频道时需要授予管理员权限）

     - Payments（付款方式，您可以在此处添加付款方式）

     - Domain（域名，您可以在此处将域名绑定至机器人）
   
     - Menu Button（菜单按钮，显示在机器人输入框下方）
   
     - Configure Mini App（设置迷你应用程序）
   
       ::: info
   
       关于迷你应用程序的详细配置，请参阅 [此处](./miniapp.html) 。
   
       :::
   
     - Paid Broadcast（付费广播，要求机器人星币余额不少于`100,000`星币且月活数超过`100,000`）

     - Back to bot（返回机器人）

   - Payments（付款方式） 
   
   - Transfer Ownership（转让所有权）
     BotFather 回复：`You can transfer bot ownership to another Telegram user.`（`您可以将机器人所有权转让给其他Telegram用户。`）
   
     1. 点击 Choose recipient（选择收件人）
   
        BotFather 回复：`Please share the new owner's contact or their username.`（`请分享新所有者的联系方式或用户名。`）
   
     2. 发送收件人ID（收件人必须先前给机器人发送过1条消息）
   
        BotFather 回复：`You are about to transfer ownership of the bot @abcbot to `收件人名称.....（`您即将将机器人@abcbot 的所有权转让给 `某某人.....）
   
     3. 点击 `Yes，I am sure, Proceed.`（`是的，我确定，继续。`）
        （如已设置需输入）
   
   - Delete Bot（删除机器人，该操作无法撤销）
   
   - « Back to Bots List（返回机器人列表）

::: info

如果您想要搭建一个私聊机器人，接下来请阅读 [Telegram搭建私聊机器人](./livegram.html)

:::

::: tip

在找Telegram机器人推荐？请前往 [Telegram机器人导航](https://www.tgnav.org/robot/) 。

:::