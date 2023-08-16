<template><div><h1 id="telegram找出群管理员" tabindex="-1"><a class="header-anchor" href="#telegram找出群管理员" aria-hidden="true">#</a> Telegram找出群管理员</h1>
<h2 id="通用方法" tabindex="-1"><a class="header-anchor" href="#通用方法" aria-hidden="true">#</a> 通用方法</h2>
<ul>
<li>方法1：对话消息中，成员后带有&quot;创建者&quot;或&quot;管理员&quot;或其他自定义头衔的都是管理员。</li>
<li>方法2：如果群里有Bot，可以发送<code v-pre>@admin</code>或<code v-pre>/admin</code>呼出所有的管理员，但不推荐这个方法，这样会@并通知所有管理员， 有些群没有开启此功能就无法使用此方法。</li>
</ul>
<h2 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h2>
<table>
<thead>
<tr>
<th>系统</th>
<th>客户端</th>
<th>查询管理员方法</th>
</tr>
</thead>
<tbody>
<tr>
<td>iOS</td>
<td>Telegram/Nicegram</td>
<td>点群头像-&gt;向上滑动成员列表-&gt;点击左上角搜索-&gt;就会显示&quot;联系人/机器人/管理员/成员&quot;分类</td>
</tr>
<tr>
<td>Android</td>
<td>Telegram/Telegram X</td>
<td>使用上面所说的通用方法</td>
</tr>
<tr>
<td>Android</td>
<td>第三方客户端 Plus Messager</td>
<td>方法1:点群头像-&gt;点击顶上&quot;管理员&quot;图标。方法2:点群头像-&gt;成员筛选-&gt;管理员(如果没有&quot;成员筛选&quot;，点右上角三点-&gt;显示「成员筛选」)</td>
</tr>
<tr>
<td>Windows/macOS/Linux</td>
<td>Desktop</td>
<td>点群头像-&gt;成员列表-&gt;成员后带有&quot;★&quot;都是管理员</td>
</tr>
<tr>
<td>Windows/macOS</td>
<td>第三方客户端 Kotatogram</td>
<td>群组信息-&gt;管理员</td>
</tr>
<tr>
<td>Windows/macOS</td>
<td>第三方客户端 64Gram</td>
<td>群组右上角按钮-&gt;管理员</td>
</tr>
<tr>
<td>macOS</td>
<td>Telegram</td>
<td>使用上面所说的通用方法</td>
</tr>
</tbody>
</table>
<p>关于第三方客户端的说明请参阅<a href="/tgwiki/thirdparty">此处</a></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果已经被群组ban了则无法查看成员列表，也就无法直接找出管理，可以用小号或找其他人查看。</p>
</div>
</div></template>


