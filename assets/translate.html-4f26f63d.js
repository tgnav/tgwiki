import{_ as d,r as l,o as c,c as n,b as e,d as o,e as a,a as r}from"./app-e0c29b0b.js";const i={},s=r('<h1 id="telegram消息翻译" tabindex="-1"><a class="header-anchor" href="#telegram消息翻译" aria-hidden="true">#</a> Telegram消息翻译</h1><p>本文介绍Telegram翻译消息内容的方法，如果您想要翻译客户端界面，请使用语言包，详情请参阅：<a href="/tgwiki/language">Telegram语言包</a>。</p><h2 id="telegram-ios" tabindex="-1"><a class="header-anchor" href="#telegram-ios" aria-hidden="true">#</a> Telegram iOS</h2><ul><li>方法1：Telegram for iOS ≥v8.4 官方客户端更新新增&quot;消息翻译&quot;功能：先使用中文语言包汉化-&gt;设置-&gt;语言-&gt;打开&quot;显示翻译按钮&quot;，使用方法：<code>长按消息</code>-&gt;<code>翻译</code> (系统要求：≥iOS 15)</li><li>方法2：使用第三方客户端&quot;Nicegram/iMe Messenger&quot;App可以翻译消息内容，详情请参阅：<a href="/tgwiki/thirdparty">Telegram第三方客户端</a>。</li><li>方法3：复制消息内容到翻译App，比如&quot;Google 翻译&quot;</li></ul><h2 id="telegram-android" tabindex="-1"><a class="header-anchor" href="#telegram-android" aria-hidden="true">#</a> Telegram Android</h2><ul><li>方法1：Telegram for Android ≥v8.4 官方客户端更新新增&quot;消息翻译&quot;功能：<code>先使用中文语言包汉化</code>-&gt;<code>设置</code>-&gt;<code>语言</code>-&gt;<code>打开&quot;显示翻译按钮&quot;</code>，使用方法：轻点消息-&gt;翻译 (使用Google翻译接口)</li><li>方法2：使用第三方客户端&quot;Plus Messager/Nekogram&quot;App，可以翻译消息内容，<code>点击消息</code>-&gt;<code>Translate/翻译</code>，详情请参阅：<a href="/tgwiki/thirdparty">Telegram第三方客户端</a>。</li><li>方法3：使用<code>&quot;Google翻译&quot;App</code>-&gt;<code>设置</code>-&gt;<code>点按翻译</code>-&gt;<code>启用</code></li></ul><h2 id="telegram-macos" tabindex="-1"><a class="header-anchor" href="#telegram-macos" aria-hidden="true">#</a> Telegram macOS</h2><p>方法：Telegram for macOS ≥v8.4 官方客户端更新新增&quot;消息翻译&quot;功能：<code>先使用中文语言包汉化</code>-&gt;<code>设置</code>-&gt;<code>语言</code>-&gt;<code>打开&quot;显示翻译按钮&quot;</code>，然后选择一条消息：<code>右键消息</code>-&gt;<code>翻译</code> (系统要求：≥macOS 12, 此功能调用 iOS 系统翻译接口)</p><h2 id="telegram-desktop" tabindex="-1"><a class="header-anchor" href="#telegram-desktop" aria-hidden="true">#</a> Telegram Desktop</h2>',9),h=r('<li>方法1：Telegram Desktop &gt;=4.3.2 已支持消息翻译功能：<code>设置</code>-&gt;<code>语言</code>-&gt;<code>显示翻译按钮</code>，使用方法：<code>右键消息</code>-&gt;<code>Translate</code></li><li>方法2：使用第三方客户端 iMe Desktop，详情请参阅：<a href="/tgwiki/thirdparty">Telegram第三方客户端</a>。</li>',2),g={href:"https://www.microsoft.com/store/apps/9n97zckpd60q",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"设置",-1),u=e("code",null,"语言",-1),m=e("code",null,'打开"显示翻译按钮"',-1),p=e("code",null,"鼠标右键一条消息",-1),f=e("code",null,"翻译",-1),k={href:"https://github.com/zu1k/translator/releases",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"全平台可用方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#全平台可用方法","aria-hidden":"true"},"#"),o(" 全平台可用方法")],-1),b=e("p",null,"用机器人Bot：",-1),T={href:"https://t.me/fanyi_bot",target:"_blank",rel:"noopener noreferrer"},x={href:"https://t.me/en_to_tw2_bot",target:"_blank",rel:"noopener noreferrer"},w={href:"https://t.me/grouptranslator_bot",target:"_blank",rel:"noopener noreferrer"};function S(v,O){const t=l("ExternalLinkIcon");return c(),n("div",null,[s,e("ul",null,[h,e("li",null,[o("方法3：使用第三方客户端 "),e("a",g,[o("Unigram"),a(t)]),o(' ≥v8.4 更新新增"消息翻译"功能：'),_,o("->"),u,o("->"),m,o(", 然后"),p,o("->"),f]),e("li",null,[o("方法4：使用工具方便翻译，"),e("a",k,[o("点击下载"),a(t)])])]),q,b,e("ul",null,[e("li",null,[e("a",T,[o("@fanyi_bot"),a(t)])]),e("li",null,[e("a",x,[o("@en_to_tw2_bot"),a(t)])]),e("li",null,[e("a",w,[o("@grouptranslator_bot"),a(t)])])])])}const N=d(i,[["render",S],["__file","translate.html.vue"]]);export{N as default};