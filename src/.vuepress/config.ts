import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: 'TGwiki - Telegram知识库',
  shouldPrefetch: false,
  description: 'TGwiki (Telegram Wiki) - Telegram知识库，由TGNAV打造的高质量Telegram知识库，汇集了Telegram常用功能介绍和使用说明，帮助用户更全面地了解Telegram的各种功能。',
  head: [
    ['meta', { name: 'image', content: '/assets/tgwiki.png' }],
    ['link', { rel: 'icon', href: '/assets/logo.png' }],
    ['script', {async: true, src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'}],
    ['script', {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8134487633157988', crossorigin: 'anonymous'}],
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-M50CZY3LGQ'}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-M50CZY3LGQ');` ],
    ['script', {type: 'text/javascript'}, `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "fpva872c50");`],
    ['script', {async: true, src: 'https://static.getclicky.com/101396814.js'}],
    ['noscript', {}, `<p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101396814ns.gif" /></p>`],
    ['script', {async: true, src: 'https://telegram.org/js/telegram-web-app.js' }],
    ['script', {type: 'text/javascript'}, `const urlParams = new URLSearchParams(window.location.search); const pathParam = urlParams.get('tgWebAppStartParam'); if (pathParam) { const path = window.atob(pathParam); window.location.href = window.location.origin + "/" + path; }`],
  ],
  theme,
});
