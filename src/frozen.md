---
title: 账号被冻结
description: 当Telegram官方认为你违反了服务协议时，便会冻结你的账号。此举为防止大量封禁账号导致误封。本文介绍了账号被冻结后的特征及申诉步骤。
head:
  - - meta
    - name: keywords
      content: Telegram冻结,Telegram账号被冻结,TG冻结,TG账号被冻结,电报冻结,电报账号被冻结
---

Telegram在2025年4月推出了账号冻结。当Telegram官方认为你违反了服务协议时，便会冻结你的账号。此举为防止大量封禁账号导致误封。

## 冻结特征

- 冻结后账号将处于“只读”模式，可以正常登录，但无法执行任何操作。
- 仅自己可以看到个人信息，其他用户看到的是“❄️已注销账号”（雪花表示冻结状态）。
- 发消息被举报、大多数封控情形均会导致账号被冻结。
- 账号冻结2周后会自动注销，同时账号状态转变为 [封禁](./banned.html) 。

::: details 界面截图

![tfa-frozen1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/frozen1.jpg)

![tfa-frozen2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/frozen2.jpg)

:::

## 申诉步骤

1. 联系官方机器人 [@SpamBot](https://t.me/SpamBot) 并发送 `/start` 命令。

   Bot回复：`Your account was blocked for violations of the Telegram Terms of Service based on user reports confirmed by our moderators.`（`经用户举报并由版主确认，您的帐户因违反Telegram服务条款而被封锁`）

2. 点击输入框下方按钮`This is a mistake`

   Bot回复：`If you think your account was blocked by mistake, you can submit a complaint...`（`如果您认为您的帐户被错误封锁，您可以提交投诉`）

3. 点击输入框下方按钮`Yes`

   Bot回复：`Please write us more details about your case. Why do you think your account was blocked, what went wrong?`（`请详细说明您的情况。您认为您的账号被封的原因是什么？出了什么问题？`）

   ::: details 操作演示

   ![tfa-frozen3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/frozen3.jpg)

   :::

4. 输入申诉理由，结合自己情况，态度诚恳些。

   参考话术1：

   ```
   My account is running well, I don't understand what I did to violate the rules. I subscribed to Telegram Premium this morning, but my account was frozen as soon as the membership arrived. I don't understand why, please help me unfreeze it. My account is very important to me. Thank you.
   ```

   参考话术2：

   ```
   I was just using my account normally. I am sure I has not violated Telegram terms of service, and I promise I will never do so in the future. My account was blocked by accident. It was a mistake! Please help me check it and recover my account. Thanks.
   ```

   Bot回复：`Please enter your full legal name.`（`请输入您的完整法定姓名`）

5. 输入一个名字（不一定要真名，可以是Telegram昵称，但是看起来要正经些）。

   Bot回复：`Please enter your contact email.`（`请输入联系邮箱`）

6. 输入一个可以接收邮件的邮箱。

   Bot回复：`Approximately, what year did you sign up for Telegram with this account?`（`大约在哪一年，您注册了这个Telegram账号？`）

7. 输入你注册账号的年份，例如`2023`。

   Bot回复：`Please provide a brief general description outlining how you discovered Telegram and, if applicable, who invited you to join.`（`请提供一份简短的概述，概述您如何发现Telegram，以及（如果适用）谁邀请您加入`）

   ::: details 操作演示

   ![tfa-frozen4.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/frozen4.jpg)

   :::

8. 发送以下内容：

   ```
   My colleague recommended it to me to use
   ```

   Bot回复：`Please briefly describe your average daily use of Telegram — including what you like doing the most on the platform and which features you prefer.`（`请简要描述您每天平均使用Telegram的情况——包括您最喜欢在该平台上做什么以及您喜欢哪些功能`）

9. 输入你平时使用Telegram的情况，可以稍微具体些。

   示例：

   ```
   Work communication, enjoy the Telegram ecosystem
   ```

   Bot回复：`By submitting this appeal, you hereby acknowledge and agree that all the information you provided is accurate and truthful...`（`提交此申诉，即表示您确认并同意您提供的所有信息均准确真实`）

   ::: details 操作演示

   ![tfa-frozen5.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/frozen5.jpg)

   :::

10. 点击输入框下方按钮`Confirm`

11. 完成人机验证，然后点击输入框下方按钮`Done`

    Bot回复：`Thank you! Your appeal has been successfully submitted. Our team’s supervisors will check it as soon as possible.`（`谢谢！您的申诉已成功提交。我们团队的主管将尽快审核`）

::: important

被冻结的账号一周只能申诉一次。

:::

## 其他

- Telegram账号冻结后恢复的概率很小，建议想办法导出账号数据

- 您可以尝试应用内申诉的同时，前往 [支持页面](https://telegram.org/support) 提交申诉、给官方发送邮件轰炸、联系官方Twitter，增大账号恢复概率。

  ::: info

  以上申诉方式在 [号码被封禁](./banned.html) 中均有介绍。

  :::
