---
title: 缓存和下载
lang: zh-CN
description: Telegram客户端在使用过程中会自动下载媒体（图片/视频/音频/文件）缓存在设备上，就会大量的占用设备存储空间。本文介绍了如何清理Telegram缓存，以及Telegram自动下载的有关设置。
head:
  - - meta
    - name: keywords
      content: Telegram缓存,Telegram下载,Telegram清理缓存,Telegram自动下载,Telegram存储空间,Telegram解除占用,TG缓存,TG下载,TG清理缓存,TG自动下载,TG存储空间,TG解除占用,电报缓存,电报下载,电报清理缓存,电报自动下载,电报存储空间,电报解除占用
---

Telegram客户端在使用过程中会自动下载媒体（图片/视频/音频/文件）缓存在设备上，就会大量的占用设备存储空间。

可以在设置中手动和自动清理这部分缓存，但依然有小部分运行App必须用到的数据是不能清理的；清理缓存并不是删除媒体，这些媒体会保留在Telegram云端，需要的时候可以再次下载使用。

Telegram的消息是全平台全客户端自动同步的（除了加密对话)，清理缓存并不会删除消息，删除消息也不是清理缓存的办法。

## 清理缓存方法

- iOS/macOS/Android客户端：`设置`->`数据`->`存储使用`->`清理缓存`，可以把`媒体文件保留时间`设置短一点，Telegram就会自动清理(3天/1周/1月)之前的缓存，如果选择`永远`就不会自动清理；此处也可以设置`最大缓存大小`。

  ::: details 操作演示

  ![tfa-download1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/download1.jpg)

  ![tfa-download2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/download2.jpg)

  :::

- Windows/macOS/Linux Desktop 客户端：左上角三短线->`设置`->`高级`->`缓存管理`->`清理缓存`，可以设置缓存总大小的限制。

  ::: details 操作演示

  ![td-download1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/td/download1.jpg)
  
  :::



## 自动下载设置

- iOS/macOS/Android客户端：`设置`->`数据`->`自动下载媒体`

  ::: details 操作演示

  ![tfa-download3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/download3.jpg)

  :::

- Windows/macOS/Linux Desktop客户端：左上角三短线->`设置`->`高级`->`自动下载媒体`
  可以关闭自动下载或把自动下载的大小限制小一点，关闭自动下载后，手动在对话中点击了媒体也会缓存在设备上

  ::: details 操作演示

  ![td-download2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/td/download2.jpg)

  :::
