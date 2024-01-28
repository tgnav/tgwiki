import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import {sitemapPlugin} from 'vuepress-plugin-sitemap2'
import { pwaPlugin } from '@vuepress/plugin-pwa'
export default defineUserConfig({
    base: "/tgwiki/",
    lang: 'zh-CN',
    title: 'TGwiki - Telegram知识库',
    description: 'TGwiki - Telegram知识库，由TGNAV打造的高质量Telegram知识库，帮助用户更全面地了解Telegram的各种功能。',
    keywords: 'TGwiki,Telegram知识库,Telegram使用说明,Telegram教程,Telegram功能介绍,Telegram设置,Telegram使用技巧,TG知识库,TG使用说明,TG教程,TG功能介绍,TG设置,TG使用技巧,电报知识库,电报使用说明,电报教程,电报功能介绍,电报设置,电报使用技巧',
    markdown: {
      lineNumbers: true,
    },
    head: [
      ['link', { rel: 'manifest', href: '/tgwiki/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'image', content: '/tgwiki/assets/tgwiki.png' }],
      ['link', { rel: 'icon', href: '/tgwiki/assets/logo.png' }],
      ['script', {async: true, src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'}],
      ['script', {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353728415772033', crossorigin: 'anonymous'}],
      ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-M50CZY3LGQ'}],
      [
        'script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-M50CZY3LGQ');
        `
      ],
      [
        'script', {type: 'text/javascript'}, `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "fpva872c50");
        `
      ],
      ['script', {async: true, src: 'https://static.getclicky.com/101396814.js'}],
      [
        'noscript', {}, `
        <p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101396814ns.gif" /></p>
        `
      ],
      [
        'script', {}, `
        !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
          woopra.config({
          domain: "tgnav.github.io",
          outgoing_tracking: true,
          download_tracking: true,
          click_tracking: true
        });
        woopra.track();
        `
      ],
    ],
    theme: defaultTheme( {
        logo: 'https://tgnav.github.io/assets/images/logo.png',
        logoDark: 'https://tgnav.github.io/assets/images/logo2.png',
        repo: 'https://github.com/tgnav/tgwiki',
        docsDir: 'docs',
        repoLabel: '开源地址',
        navbar: [
            { text: '文档指南', link: '/guide' },
            { text: '名词解释', link: '/term'},
            { text: '隐私设置', link: '/privacy'},
            { text: '语言包', link: '/language'},
            { text: 'FAQ', link: '/faq' },
          ],
        sidebar: [
            {
              text: '入门',
              collapsible: true,
              children: ['/guide.md', '/term.md', '/limit.md', '/dc.md'],
            },
            {
              text: '功能',
              collapsible: true,
              children: ['/creategroup.md', '/managegroup.md', '/createchannel.md', '/comment.md', '/archive.md', '/favourite.md', '/createsticker.md', '/createrobot.md', '/slowmode.md', '/poll.md', '/scan.md', '/nearby.md', '/adddescription.md', '/translate.md', '/telegraph.md', '/search.md', '/stories.md', '/encrypt.md', '/findadmin.md', '/speakaschannel.md'],
            },
            {
              text: '设置',
              collapsible: true,
              children: ['/privacy.md', '/proxy.md', '/theme.md', '/download.md', '/divide.md', '/language.md', '/pornios.md', 'multiaccount.md', '/deleteaccount.md'],
            },
            {
              text: '其他',
              collapsible: true,
              children: ['/notcomesms.md', '/contact.md', '/spam.md', '/banned', '/premium.md', '/boost.md', '/emaillogin.md', '/thirdparty.md', '/robot.md', '/faq.md'],
            }
          ],
        lastUpdatedText: '最近更新',
        editLinkText: '编辑此页',
        contributors: false,
        tip: '提示',
        warning: '注意',
        danger: '警告',
      }),
    plugins: [
      docsearchPlugin({
        appId: 'FLBJDNSJ4H',
        // apiKey: '4f79f1c7c76126cc9cbf510cb3f6661d',
        apiKey: 'f0fde104fdda0ec7d000a2b7e2234200',
        indexName: 'tgwiki_tgwiki',
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      }),
        pwaPlugin({
            skipWaiting: true,
        }),
        sitemapPlugin({ 
            hostname: "https://tgnav.github.io/tgwiki/",
        }),

      ],
  })