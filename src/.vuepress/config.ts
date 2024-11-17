import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/tgwiki/",
  lang: "zh-CN",
  title: 'TGwiki - Telegram知识库',
  description: 'TGwiki - Telegram知识库，由TGNAV打造的高质量Telegram知识库，汇集了Telegram常用功能介绍和使用说明，帮助用户更全面地了解Telegram的各种功能。',
  head: [
    ['meta', { name: 'image', content: '/tgwiki/assets/tgwiki.png' }],
    ['link', { rel: 'icon', href: '/tgwiki/assets/logo.png' }],
    ['script', {async: true, src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'}],
    ['script', {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353728415772033', crossorigin: 'anonymous'}],
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-M50CZY3LGQ'}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-M50CZY3LGQ');` ],
    ['script', {type: 'text/javascript'}, `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "fpva872c50");`],
    ['script', {async: true, src: 'https://static.getclicky.com/101396814.js'}],
    ['noscript', {}, `<p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101396814ns.gif" /></p>`],
    ['script', {}, `!function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra"); woopra.config({ domain: "tgnav.github.io", outgoing_tracking: true, download_tracking: true, click_tracking: true }); woopra.track();`],
    ['script', {async: true, src: 'https://telegram.org/js/telegram-web-app.js' }],
    ['script', {type: 'text/javascript'}, `const urlParams = new URLSearchParams(window.location.search); const pathParam = urlParams.get('tgWebAppStartParam'); if (pathParam) { const path = window.atob(pathParam); window.location.href = window.location.origin + "/tgwiki/" + path; }`],
  ],
  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(__dirname,"./components/Sidebar.vue",),
    "@theme-hope/components/NormalPage": path.resolve(__dirname,"./components/NormalPage.vue",),
  },

});
