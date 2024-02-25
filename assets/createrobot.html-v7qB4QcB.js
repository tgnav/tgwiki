import{_ as l,r as a,o as c,c as r,b as e,d as o,e as n,a as t}from"./app-ifc82t19.js";const s={},d=e("h1",{id:"telegram创建机器人",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#telegram创建机器人"},[e("span",null,"Telegram创建机器人")])],-1),p=e("p",null,"机器人是Telegram的特色功能之一。Telegram提供开放的api接口，允许开发者制作自己的机器人。",-1),h=e("h2",{id:"创建机器人",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建机器人"},[e("span",null,"创建机器人")])],-1),m=e("li",null,"打开Telegram",-1),u={href:"https://t.me/botfather",target:"_blank",rel:"noopener noreferrer"},b=t("<li>点击<code>START</code>（开始）</li><li>点击<code>Menu</code>（菜单）-&gt;点击<code>/newbot</code>（新机器人） BotFather 回复：<code>Alright, a new bot. How are we going to call it? Please choose a name for your bot.</code></li><li>输入机器人名称（自定义） BotFather 回复：<code>Good. Now let&#39;s choose a username for your bot. It must end in </code>bot<code>. Like this, for example: TetrisBot or tetris_bot.</code></li><li>输入机器人用户名（bot为结尾，例：<code>abcbot</code>，用户名设置后不可更改） BotFather 回复（得到以下回复说明创建成功）：<code>Done! Congratulations on your new bot. You will find it at t.me/abcbot....</code>（<code>完毕！ 恭喜您的新机器人。 您可以在 t.me/abcbot 找到它。</code>）</li>",4),_=t('<details class="custom-container details"><summary>操作演示</summary><p><img src="https://s2.loli.net/2024/01/28/PFo3Mq7CdxAsTby.jpg" alt="createrobot.jpg"></p></details><div class="custom-container danger"><p class="custom-container-title">警告</p><p>请勿泄露API Token，所有知道API Token的人都可以控制你的机器人！</p></div><h2 id="管理机器人" tabindex="-1"><a class="header-anchor" href="#管理机器人"><span>管理机器人</span></a></h2><ol><li><p>点击<code>Menu</code>（菜单）-&gt; 点击 <code>/mybots</code>（我的机器人）</p></li><li><p>点击机器人用户名</p><ul><li><p>API Token（API令牌，用于控制机器人）</p></li><li><p>Edit bot（编辑bot）</p><ul><li>Edit Name（编辑名称）</li><li>Edit About（编辑关于，内容显示在机器人简介处）</li><li>Edit Description（编辑说明，用户会在启用机器人前“它能做什么”中看到）</li><li>Edit Description Pecture（编辑描述图片）</li><li>Edit Botpic（编辑机器人头像）</li><li>Edit Commands（编辑命令，可以在此处添加/修改命令，如<code>/help</code>等）</li></ul></li><li><p>Bot settings（bot设置）</p><ul><li>lnline mode（内联模式，开启后在输入框@机器人可以使用内联功能）</li><li>Allow Groups?（允许将机器人拉入群组吗？）</li><li>Group Privacy（群组隐私，默认开启，机器人未收到命令不会读取群组消息内容）</li><li>Group Admin Rights（群组管理员权限，开启后拉入群组时需要授予管理员权限）</li><li>Channle Admin Rights（频道管理员权限，开启后拉入频道时需要授予管理员权限）</li><li>Payments（付款方式，您可以在此处添加付款方式）</li><li>Domain（域名，您可以在此处将域名绑定至机器人）</li><li>Menu Button（菜单按钮，显示在机器人输入框下方）</li><li>Back to bot（返回机器人）</li></ul></li><li><p>Payments（付款方式）</p></li><li><p>Transfer Ownership（转让所有权） BotFather 回复：<code>You can transfer bot ownership to another Telegram user.</code>（<code>您可以将机器人所有权转让给其他Telegram用户。</code>）</p><ol><li><p>点击 Choose recipient（选择收件人）</p><p>BotFather 回复：<code>Please share the new owner&#39;s contact or their username.</code>（<code>请分享新所有者的联系方式或用户名。</code>）</p></li><li><p>发送收件人ID（收件人必须先前给机器人发送过1条消息）</p><p>BotFather 回复：<code>You are about to transfer ownership of the bot @abcbot to </code>收件人名称.....（<code>您即将将机器人@abcbot 的所有权转让给 </code>某某人.....）</p></li><li><p>点击 <code>Yes，I am sure, Proceed.</code>（<code>是的，我确定，继续。</code>） （如已设置需输入）</p></li></ol></li><li><p>Delete Bot（删除机器人，该操作无法撤销）</p></li><li><p>« Back to Bots List（返回机器人列表）</p></li></ul></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在找Telegram机器人推荐？请参阅 <a href="/tgwiki/robot">此处</a> 。</p></div>',5);function g(f,B){const i=a("ExternalLinkIcon");return c(),r("div",null,[d,p,h,e("ol",null,[m,e("li",null,[o("搜索 "),e("a",u,[o("@BotFather"),n(i)])]),b]),_])}const w=l(s,[["render",g],["__file","createrobot.html.vue"]]);export{w as default};