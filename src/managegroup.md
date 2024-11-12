---
title: 管理群组
description: 群组是一种常用的聊天方式，Telegram支持至多20万人的群组。本文介绍了Telegram管理群组的方法，查看近期操作，以及设置成员权限。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram管理群组,Telegram群管理员,Telegram设置成员权限,Telegram群组近期操作,TG管理群组,TG群管理员,TG设置成员权限,TG群组近期操作,电报管理群组,电报群管理员,电报设置成员权限,电报群组近期操作,Telegram功能, TGwiki, Telegram知识库
---

# Telegram管理群组

## 说明

 - 群组人数最高 20 万。转换为广播群组（Broadcast Group）之后，人数将不受限制，但只有管理员可以说话，但是成员仍然可以加入语音聊天。[点击查看官方说明](https://telegram.org/blog/autodelete-inv2#groups-with-unlimited-members)。

   ::: warning

   请注意，切换为广播群组之后，将不能回退到普通群组。

   :::

 - 静音群组只有在提到你（@）、回复你（Reply）和管理员置顶消息（Pin）时才会收到通知。

 - 新加入的成员可以看到全部的群聊历史记录（**私密群组可以设置为`隐藏`**）。 

 - 加入群组之前，可看到（单向）好友是否在列。如果不想让好友知道你加入了某个群组，注册一个小号吧。

 - 支持在任何设备上发起语音聊天。

::: details 操作演示

![A-managegroup1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/managegroup1.jpg)

:::

## 成员权限

管理员可以限制所有成员或单个成员只能发送特定类型的内容。

如此一来，你便可建立一个没有表情贴纸或者GIF的高质量交流社区。或者甚至完全限制成员发送信息，让管理员彼此交谈，而群成员则默默地旁观。

- 慢速模式（Slow Mode）：在10 秒/30 秒/1分钟/5分钟/15 分钟/1个小时内，成员只能发送一条消息，这样可以使小组中的对话更加有序，也可以提高每条信息的价值。详情请参阅[慢速模式](/tgwiki/slowmode)。

::: details 操作演示

![A-managegroup2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/managegroup2.jpg)

:::

## 邀请链接

创建和管理群组的邀请链接。

## 强力反垃圾

这是Telegram官方提供的一个反垃圾服务。

::: danger

该功能尚不完善，误杀概率很大，且被限制的用户将无法在公开群组中发送消息。不建议开启此功能！

:::

## 近期操作

当多个管理员在一起工作时，很容易搞不清楚哪个管理员或管理机器人，在什么时候做了什么。所以 Telegram 的`管理员`页面增加了`近期操作`功能。用于存储过去48小时内在组中执行的所有服务操作的日志，仅对管理员可见。

## 隐藏成员列表

开启后，非群组管理员将无法查看完整的成员列表，仅能看到管理员列表。

## 其他

- 管理员可删除成员的单条消息或全部消息。
- 可对群主（creator）及管理员（administrators）设置自定义头衔。
- 管理员可以匿名发布消息（在管理员权限处设置）。
- 成员超过500人后，自动开通群组分析功能。
- 群组获得助推后将开启高级功能（修改主页外观、发布动态、自定义emoji包等），具体请参阅 [此处](/tgwiki/boost) 。
