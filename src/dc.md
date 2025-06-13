---
title: DC说明
description: Telegram在世界各地部署有5个数据中心（DC）。本文介绍了各个数据中心所在的地理位置，以及如何查看自己账号所在的数据中心（DC）。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram数据中心,Telegram DC,Telegram DC说明,Telegram DC分配规则,Telegram查看所在DC,TG数据中心,TG DC,TG DC说明,TG DC分配规则,TG查看所在DC,电报数据中心,电报DC,电报DC说明,电报DC分配规则,电报查看所在DC
---

DC：Data Centers（数据中心），Telegram在世界各地部署有5个数据中心： 
- DC1：美国迈阿密（Miami, USA）
- DC2：荷兰阿姆斯特丹（Amsterdam, NL）
- DC3：美国迈阿密（Miami, USA）
- DC4：荷兰阿姆斯特丹（Amsterdam, NL）
- DC5：新加坡  

## DC的分配规则

1. 根据 [Telegram 官方文档说明](https://core.telegram.org/api/datacenter) ，账号属于哪个DC是由注册时的IP决定的。
2. 但实际上并非如此，账号属于哪个DC实际上是由注册账号时选择的国家/地区决定的，比如`+86`的号码大都是在DC5，`+1`的号码大都是在DC1。
3. DC是注册时候就决定了，**无法更换**，更换手机号也不能更换DC，如果想要更换DC，只有注销重新注册新账号。

## 如何知道自己账号属于哪个DC

可以用机器人快速查询自己账号属于哪个DC： [@nmnmfunBot](https://t.me/nmnmfunBot) [@KinhRoBot](https://t.me/KinhRoBot) [@Sean_Bot](https://t.me/Sean_Bot) [@WooMaiBot](https://t.me/WooMaiBot)

下面提供几个进阶方法。

### 方法一：登录法

当客户端登录账号时，需要连接到正确的DC上获取用户数据。如果连接到了错误的DC，便无法登录。根据以上特性，我们可以通过MTProto协议（官方客户端使用的协议）连接到不同DC来确定自己账号所在的DC。

::: note 例如

我们使用会被分配到DC2的手机号连接DC1，调用`auth.sendCode`接口，尝试发送验证码，注册一个账号。此时服务端会返回`PHONE_MIGRATE_2`错误，提示客户端应当要连接DC2（如果连接DC2后进行同样操作，便会直接发送验证码）。这样，我们就知道这个帐号是一个 DC2 的帐号。

:::

::: tip

这种方法对于已注册的帐号同样有效，但是这种方法需要知道用户的手机号，难以用来查询群友所在的DC。

:::

### 方法二：头像/文件法

客户端在下载用户头像时，可以通过MTProto协议`userProfilePhoto`结构体中的`dc_id` 字段，来获知用户所在的DC。这种方法是通过用户上传的文件所在的DC，来判断用户所在的DC。大多数支持查看DC的第三方客户端用的就是这个方法。

### 方法三：Web CDN法

通过`https://t.me/username`链接显示的头像的CDN链接判断所在DC。例如，控制台中的CDN域名是`cdn1.telegram-cdn.org`，则用户在DC1。

需要注意的是，由于DC2与DC3会“借用”同地点的DC4与DC1域名来提供Web CDN服务，这种方法获取到的DC可能并不准确。

::: details 附：注册手机号区号对应的Telegram DC

![image.png](https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png)

:::

## 代理单独为 Telegram 设置策略组有用吗?

1. 你的账号属于哪个DC，你的数据（消息、图片、文件等）也就存放在哪个DC，你给别人私聊和群里发送媒体，则别人是从你的账号所在的DC下载在客户端上才能看到的。
2. 假如你的账号在DC5，不管别人的账号在DC几，查看你发送的媒体都是从DC5上下载。你去查看别人发的文件也是如此的，别人的账号在DC1，你的账号在DC5，那你查看他发送的媒体也是从DC1下载的。
3. 理解了以上两点，你就会发现单独为Telegram设置策略组是没有意义的，因为群里的人，有的在DC1，有的在DC5，你把Telegram策略设为SG，那查看DC1发送的媒体也就要从SG绕一下，不过感知差别不明显。

## 其他

### 经常宕机的DC5

在5个DC中，DC5在Telegram中文圈格外知名——并不是因为它默默无闻服务了大量的中文用户，而是因为它经常宕机。

当DC5宕机时，身处DC5的用户无法使用Telegram，此时的Telegram圈内的话题往往会变成「DC5 怎么又挂啦」。DC5 用户只能等待自己不断“重连中”的客户端恢复后，再与其他DC的群友们一起批判DC5。

### DC3的消失

细心的用户会发现，上面的图片中DC3没有用户。Telegram在2020年已将DC3用户全部迁移至DC1，同时DC3也不再接受任何新用户。有说法认为，DC3仅作为Telegram故障转移使用。
