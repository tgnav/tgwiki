---
title: 小程序
description: 通过小程序（迷你应用程序），开发人员可以使用JavaScript创建无限灵活的界面，这些界面可以在Telegram内启动，并且可以完全取代任何网站。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram小程序,Telegram迷你应用程序,Telegram Mini App,Telegram Web App,TG小程序,TG迷你应用程序,TG Mini App,TG Web App,电报小程序,电报迷你应用程序,电报 Mini App,电报 Web App,Telegram功能,TGwiki,Telegram知识库
---


# Telegram小程序

Telegram小程序（迷你应用程序）不仅仅是一个简单的工具，而且是一个可以替代普通网站的强大平台。

本知识库完成了Telegram小程序的初步适配，您可以打开 [@TGwikiAppBot](https://t.me/TGwikiAppBot) 进行体验。

## 功能和特性

以下是一些主要功能：

- 灵活的界面：开发者可以使用JavaScript创建无限灵活的前端应用，直接在Telegram内启动小程序。
- 无缝授权：小程序支持无缝授权，用户可以方便地登录和使用。
- 集成支付：支持20多家支付提供商，包括Google Pay和Apple Pay，方便用户进行支付。
- 推送通知：小程序可以向用户发送定制的推送通知，保持用户的参与度。
- 多种启动方式：小程序可以通过键盘按钮、内联按钮、机器人菜单按钮、内联模式、直接链接和附件菜单启动。
- 与区块链交互：小程序可以与区块链和智能合约直接交互，提高账户安全性。

## 创建小程序

1. 创建机器人：按照 [教程](/tgwiki/createrobot) 创建一个机器人。

2. 配置服务器：将你的服务器配置为处理来自Telegram的请求。

3. 开发小程序：使用HTML、CSS和JavaScript开发你的前端应用。

Telegram小程序支持丰富的前端功能，可以与用户进行交互。

你可以使用Telegram提供的Web App API来与Telegram进行交互，例如发送和接收消息。

4. 集成小程序与机器人：在机器人代码中，使用API令牌来验证和控制你的机器人。

你可以使用`sendMessage`方法发送包含`web_app`类型的按钮，用户点击按钮后将启动小程序。

5. 测试和部署：在发布之前，确保对小程序进行全面测试，修复错误并优化用户体验。


::: tip

有关Telegram小程序开发的详细内容（代码细则，支持的API，用户交互等），请参阅 [Telegram Mini Apps官方文档](https://core.telegram.org/bots/webapps) 。

:::


