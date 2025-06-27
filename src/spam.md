---
title: 解除私聊限制
description: Telegram 给某人发送私聊消息时遇到如下提示：Sorry, you can only send messages to mutual contacts at the moment.本文介绍了Telegram如何解除私聊限制。
head:
  - - meta
    - name: keywords
      content: Telegram解除私聊限制,Telegram无法私聊,Telegram双向限制,Telegram垃圾号码限制,Telegram私聊限制,TG解除私聊限制,TG无法私聊,TG垃圾号码限制,TG私聊限制,电报解除私聊限制,电报无法私聊,电报双向限制,电报垃圾号码限制,电报私聊限制,Telegram Spam
---

Telegram 给某人发送私聊消息时遇到如下提示：
`Sorry, you can only send messages to mutual contacts at the moment.`
中文：
`抱歉，目前您被限制无法主动发起私聊消息。`或`抱歉，您现在只能给双向联系人发送消息。`

Telegram私聊限制通常分为以下几种，请先判断限制类型，然后按照教程操作。

## +86双向限制

如果您注册时使用的是+86的手机号码，向Telegram官方机器人 [@SpamBot](https://t.me/spambot) 发送消息，回复是`You're free as a bird!`

### 具体原因

之前币圈利用Telegram的便利，大量发广告和拉人进群。Telegram 限制了+86大陆手机号绑定的账号的私聊。

**限制情况：**

- +86的账号不能给非+86的账号主动发起私聊；
- +86的账号能给+86主动发起私聊的；
- 如果是别人给你发起的私聊，你是可以回复交流的；
- 刚刚注册的+86 账号也不能发起私聊的，过段时间就OK了；
- Bot是不会回复你+86的这个限制信息的, 不能仅从Bot回复看你是否是+86限制。

 ### 操作方式

- 向Telegram官方机器人 [@SpamBot](https://t.me/spambot) 发送消息申请（跟着提示操作就行），忽略回复的`You're free as a bird!`(这个说的是你没有被全局限制，和私聊限制没关系，不能仅从Bot回复看你是否是被限制);
  1. 点击选项`But I can't message non-contacts!`;
  2. 点击选项`No I'll never do any of this!`；
  3. 输入内容`accident`，发送。
- 通常24小时内即可解除限制，24小时仍然未解除的可以再次提交；
- Bot不会回复你结果，自己找人私聊测试。

## 垃圾号码限制

向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息，如果Bot回复是：```Unfortunately, some phone numbers may trigger a harsh response from our anti-spam systems. If you think this is the case with you, you can submit a complaint to our moderators or subscribe to Telegram Premium to get less strict limits.```

**原因**：您注册的手机号码可能被Telegram反垃圾系统识别为垃圾号码，需要提交申诉。

**解决**：向Telegram申诉，说明情况，保证不会进行违规操作。申诉后等待24小时即可。

参考话术：

```
I have just registered the account. I didn't do anything before. I have NEVER broken the rules. It must be a mistake. Please help me check it.
```

::: details 操作演示

![tfa-spam1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/spam1.jpg)

![tfa-spam2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/spam2.jpg)

:::

## 公开消息限制

如果你收到的通知是```你的账号被Telegram官方限制了, 不能在公开群和(或)主动私聊发送消息```。

### 具体原因

- 一般是在群里和私聊发消息被人多次举报就有可能被限制（私聊举报和群里管理员的举报+ban的权重比较大）；
- 无法查到被谁举报的，也无法查到是因为哪条消息举报的；
- 这个限制和哪个号码注册没有关系，所有号码注册都有可能被如此限制。
- 也可能是被Telegram群组的强力反垃圾功能误杀（该功能误杀率极高，强烈建议群主将其关闭）。

### 操作方法

向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息。

1. 如果Bot回复的消息里有说明了解封时间，到时间会自动解封，耐心等待即可，不能提前解封。

   ::: details 界面截图

   ![td-spam.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/td/spam.jpg)

   :::

   ::: tip

   注意，是UTC 时间，比北京时间晚8小时，[点击查看UTC时间](https://time.is/zh/UTC) 。

   :::

2. 如果Bot回复的消息里没有说明解封时间，则您可能被Telegram群组的强力反垃圾功能误杀了，需要提交申诉，说明情况，通常24小时可解。

## 滥用限制

如果你收到的消息是：`I'm afraid our users reported some of the public content you posted on telegram in the past as illegal and our moderators have confirmed it and taken the content down... `消息最后结尾是一个邮箱`abuse@telegram.org`。

::: details 界面截图

![tfa-spam3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/spam3.jpg)

:::

### 具体原因

账号在公开频道/群组中发布的内容被其他用户举报并由版主核实，Telegram认为你有滥用行为。被限制后将无法在公开群组中发言，同时也无法创建新的频道/群组。

### 操作方法

给`abuse@telegram.org`发送申诉邮件，说明情况并申请解除限制。

邮件内容示例（请替换成自己的信息）：

```
Dear Telegram Abuse Team,

I am writing to appeal the recent limitation placed on my Telegram account @username (phone number: +1 xxx xxx xxxx) .
I have reviewed my past public content on Telegram and genuinely believe that I have not spread any illegal material. I understand that mistakes can happen, and I am concerned that these limitations may have been applied to my account in error.
I kindly request that you re-examine my account and the content in question. If there is a specific piece of content that was flagged, I would appreciate it if you could provide more details so I can understand the issue better and ensure it does not happen again. I am committed to abiding by Telegram's terms of service and community guidelines.
Thank you for your time and consideration.

Sincerely,
[Your Name]
```

## 其他

开通Telegram Premium可以在一定程度上降低被限制的风险（但这并不意味着您不会被限制！）。

::: info

关于Telegram Premium，请参阅 [此处](./premium.html) 。

:::
