---
title: DC说明
description: Telegram在世界各地部署有5个数据中心（DC）。本文介绍了各个数据中心所在的地理位置，以及如何查看自己账号所在的数据中心（DC）。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram数据中心,Telegram DC,Telegram DC说明,Telegram查看账号所在的数据中心,TG数据中心,TG查看账号所在的数据中心,电报数据中心,电报查看账号所在的数据中心,Telegram入门,TGwiki,Telegram知识库
---

# Telegram DC说明

DC：Data Centers，数据中心，Telegram在世界各地部署有5个数据中心： 
- DC1：美国-迈阿密
- DC2：荷兰-阿姆斯特丹
- DC3：美国-迈阿密
- DC4：荷兰-阿姆斯特丹
- DC5：新加坡  
  

## 如何知道自己账号属于哪个DC?

1. 根据 [Telegram 官方文档说明](https://core.telegram.org/api/datacenter) ，账号属于哪个DC是由注册时的IP决定的
2. 但实际上并非如此，账号属于哪个DC实际上是由注册账号时选择的国家/地区决定的，比如+86的号码大都是在DC5，+1的号码大都是在DC1。
3. DC是注册时候就决定了，无法更换，更换手机号也不能更换DC，如果想要更换DC，只有注销重新注册新账号。
4. 可以用机器人Bot查询自己账号属于哪个DC： [@nmnmfunBot](https://t.me/nmnmfunBot) [@KinhRoBot](https://t.me/KinhRoBot) [@Sean_Bot](https://t.me/Sean_Bot) [@WooMaiBot](https://t.me/WooMaiBot)

::: details 附：注册手机号区号对应的Telegram DC

![image.png](https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png)

:::

## 代理单独为 Telegram 设置策略组有用吗?

1. 你的账号属于哪个DC，你的数据（消息、图片、文件等）也就存放在哪个DC，你给别人私聊和群里发送媒体，则别人是从你的账号所在的DC下载在客户端上才能看到的。
2. 假如你的账号在DC5，不管别人的账号在DC几，查看你发送的媒体都是从DC5上下载. 你去查看别人发的文件也是如此的，别人的账号在DC1，你的账号在DC5，那你查看他发送的媒体也是从DC1下载的。
3. 理解了以上两点，你就会发现单独为Telegram设置策略组是没有意义的，因为群里的人，有的在DC1，有的在DC5，你把Telegram策略设为SG，那查看DC1发送的媒体也就要从SG绕一下，不过感知差别不明显。

## 其他

Telegram的数据中心都是土豆服务器，时不时会炸，如果大家都发不出去消息那就是Telegram服务器炸了。
