<template><div><h1 id="telegraph" tabindex="-1"><a class="header-anchor" href="#telegraph" aria-hidden="true">#</a> Telegraph</h1>
<p>Telegraph是一个极简的匿名内容发布工具。</p>
<p>如果内容侵权了，例如使用有版权的图片，可能文章会被投诉下架。</p>
<h2 id="用法一" tabindex="-1"><a class="header-anchor" href="#用法一" aria-hidden="true">#</a> 用法一</h2>
<p>此法不需要注册账号与下载软件。</p>
<ol>
<li>打开<a href="https://telegra.ph/" target="_blank" rel="noopener noreferrer">Telegraph<ExternalLinkIcon/></a></li>
<li>写文章</li>
<li>发布（Publish）</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>内容发布之后，只要清除浏览器缓存，便无法再编辑文章，也不能追溯到文章作者。</p>
</div>
<h2 id="用法二-推荐" tabindex="-1"><a class="header-anchor" href="#用法二-推荐" aria-hidden="true">#</a> 用法二（推荐）</h2>
<p>通过Telegraph机器人<a href="https://t.me/telegraph" target="_blank" rel="noopener noreferrer">@telegraph<ExternalLinkIcon/></a>管理文章：</p>
<ul>
<li>能看到你发了多少篇文章，多少人看了（但是读者依旧看不到作者是谁）。</li>
<li>在任意聊天窗口输入<code v-pre>@telegraph</code>，即可弹出你发布的所有文章。</li>
</ul>
<h3 id="发布流程" tabindex="-1"><a class="header-anchor" href="#发布流程" aria-hidden="true">#</a> 发布流程</h3>
<ol>
<li>在Telegram打开<a href="https://t.me/telegraph" target="_blank" rel="noopener noreferrer">@telegraph<ExternalLinkIcon/></a></li>
<li>根据提示配置账号</li>
<li>写文章：作者（Author）可以写频道或者群组的公开链接</li>
<li>发布（Publish）</li>
</ol>
<h3 id="修改流程" tabindex="-1"><a class="header-anchor" href="#修改流程" aria-hidden="true">#</a> 修改流程</h3>
<p>在任何一个设备都可以再次编辑文章的标题、作者和正文（除了文章链接）：</p>
<ol>
<li><code v-pre>Log in as *** on this device</code></li>
<li>返回 @telegraph</li>
<li>选择<code v-pre>My posts</code>，点击文章的标题</li>
</ol>
<ul>
<li>电脑：自动跳转到浏览器打开，然后在右上角找到 <code v-pre>EDIT</code></li>
<li>手机：点击界面的右上角 3 个点，选择 <code v-pre>Open in…</code> 用浏览器打开，滑倒文章底部即可看到 <code v-pre>EDIT</code></li>
</ul>
<h2 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧</h2>
<h3 id="让文章链接更美观" tabindex="-1"><a class="header-anchor" href="#让文章链接更美观" aria-hidden="true">#</a> 让文章链接更美观</h3>
<p>Telegraph默认URL = <code v-pre>https://telegra.ph</code>/<code v-pre>首次输入的标题</code>-<code v-pre>首次发表时的月份</code>-<code v-pre>首次发表时的日期</code></p>
<p>如果你用中文撰写标题，例如《选择 Telegraph 的 10 个理由》，那么文章链接会变得又臭又长，且不能从链接获得文章主题，而通过如下方法即可获得一个更美观的Telegraph链接：</p>
<ol>
<li>首次编辑请使用英文标题：
<ul>
<li>英文单词全部小写：<code v-pre>10 reasons to choose the telegraph</code></li>
<li>把the、a、an等去掉：<code v-pre>10 reasons to choose telegraph</code></li>
<li>用连字符 <code v-pre>-</code> 代替标点和空格：`10-reasons-to-choose-telegraph；</li>
<li>是否可以精简或者采用另外一种翻译：<code v-pre>why-telegraph</code></li>
</ul>
</li>
<li>再用 <code v-pre>Edit</code> 功能修改标题为中文：<code v-pre>选择Telegraph的10个理由</code></li>
</ol>
<h3 id="让文章排版更美观" tabindex="-1"><a class="header-anchor" href="#让文章排版更美观" aria-hidden="true">#</a> 让文章排版更美观</h3>
<ol>
<li>使用Markdown写文章，<a href="https://markdown.com.cn/basic-syntax/" target="_blank" rel="noopener noreferrer">点击此处查看Markdown基本语法<ExternalLinkIcon/></a></li>
<li>复制Markdown预览（不是源代码）</li>
<li>粘贴到<code v-pre>Telegraph</code>，即可快速排出精美的文章（不支持某些格式，例如多级项目列表）</li>
</ol>
</div></template>


