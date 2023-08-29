import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import {sitemapPlugin} from "vuepress-plugin-sitemap2";
import {fullTextSearchPlugin} from 'vuepress-plugin-full-text-search2'

import { pwaPlugin } from '@vuepress/plugin-pwa'
export default defineUserConfig({
    base: "/tgwiki/",
    lang: 'zh-CN',
    title: 'TGwiki - Telegram知识库',
    description: 'TGwiki - Telegram知识库，由TGNAV打造的高质量Telegram知识库，帮助用户更全面地了解Telegram的各种功能。',
    markdown: {
      lineNumbers: true,
    },
    head: [
      ['link', { rel: 'manifest', href: '/tgwiki/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['link', {rel: 'icon', href: '/tgwiki/assets/logo.png'}],
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
            { text: '隐私设置', link: '/privacy'},
            { text: '常见问题与解答', link: '/faq' },
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
              children: ['/creategroup.md', '/managegroup.md', '/createchannel.md', '/comment.md', '/archive.md', '/favourite.md', '/createsticker.md', '/createrobot.md', '/slowmode.md', '/poll.md', '/scan.md', '/nearby.md', '/adddescription.md', '/translate.md', '/telegraph.md', '/search.md', '/encrypt.md', '/findadmin.md', '/speakaschannel.md'],
            },
            {
              text: '设置',
              collapsible: true,
              children: ['/privacy.md', '/proxy.md', '/theme.md', '/download.md', '/divide.md', '/language.md', '/pornios.md', 'multiaccount.md', '/deleteaccount.md'],
            },
            {
              text: '其他',
              collapsible: true,
              children: ['/contact.md', '/spam.md', '/banned', '/premium.md', '/thirdparty.md', '/robot.md', '/faq.md'],
            }
          ],
        lastUpdated: '最近更新',
        editLinkText: '帮助我们改善此文档',
        tip: '提示',
        warning: '注意',
        danger: '警告',
      }),
    plugins: [
        pwaPlugin({
            skipWaiting: true,
        }),
        sitemapPlugin({
            hostname: "https://tgnav.github.io/tgwiki/",
        }),
        fullTextSearchPlugin
        // docsearchPlugin({
        //   // 配置项
        //   //new Crawler({
        //     appId: 'YOUR_APP_ID',
        //     apiKey: 'YOUR_API_KEY',
        //     rateLimit: 8,
        //     startUrls: [
        //       // 这是 Algolia 开始抓取网站的初始地址
        //       // 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接
        //       'https://tgnav.github.io/tgwiki/',
        //     ],
        //     sitemaps: [
        //       // 如果你在使用 Sitemap 插件 (如: vuepress-plugin-sitemap2)，你可以提供 Sitemap 链接
        //       'https://tgnav.github.io/tgwiki/sitemap.xml',
        //     ],
        //     ignoreCanonicalTo: false,
        //     exclusionPatterns: [
        //       // 你可以通过它阻止 Algolia 抓取某些 URL
        //     ],
        //     discoveryPatterns: [
        //       // 这是 Algolia 抓取 URL 的范围
        //       'https://tgnav.github.io/tgwiki/**',
        //     ],
        //     // 爬虫执行的计划时间，可根据文档更新频率设置
        //     schedule: 'at 00:00 every 1 day',
        //     actions: [
        //       // 你可以拥有多个 action，特别是你在一个域名下部署多个文档时
        //       {
        //         // 使用适当的名称为索引命名
        //         indexName: 'tgwiki',
        //         // 索引生效的路径
        //         pathsToMatch: ['https://tgnav.github.io/tgwiki/**'],
        //         // 控制 Algolia 如何抓取你的站点
        //         recordExtractor: ({ $, helpers }) => {
        //           // @vuepress/theme-default 的选项
        //           return helpers.docsearch({
        //             recordProps: {
        //               lvl0: {
        //                 selectors: '.sidebar-heading.active',
        //                 defaultValue: 'Documentation',
        //               },
        //               lvl1: '.theme-default-content h1',
        //               lvl2: '.theme-default-content h2',
        //               lvl3: '.theme-default-content h3',
        //               lvl4: '.theme-default-content h4',
        //               lvl5: '.theme-default-content h5',
        //               lvl6: '.theme-default-content h6',
        //               content: '.theme-default-content p, .theme-default-content li',
        //             },
        //             indexHeadings: true,
        //           })
        //         },
        //       },
        //     ],
        //     initialIndexSettings: {
        //       // 控制索引如何被初始化，这仅当索引尚未生成时有效
        //       // 你可能需要在修改后手动删除并重新生成新的索引
        //       YOUR_INDEX_NAME: {
        //         attributesForFaceting: ['type', 'lang'],
        //         attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
        //         attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
        //         attributesToSnippet: ['content:10'],
        //         camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
        //         searchableAttributes: [
        //           'unordered(hierarchy_radio_camel.lvl0)',
        //           'unordered(hierarchy_radio.lvl0)',
        //           'unordered(hierarchy_radio_camel.lvl1)',
        //           'unordered(hierarchy_radio.lvl1)',
        //           'unordered(hierarchy_radio_camel.lvl2)',
        //           'unordered(hierarchy_radio.lvl2)',
        //           'unordered(hierarchy_radio_camel.lvl3)',
        //           'unordered(hierarchy_radio.lvl3)',
        //           'unordered(hierarchy_radio_camel.lvl4)',
        //           'unordered(hierarchy_radio.lvl4)',
        //           'unordered(hierarchy_radio_camel.lvl5)',
        //           'unordered(hierarchy_radio.lvl5)',
        //           'unordered(hierarchy_radio_camel.lvl6)',
        //           'unordered(hierarchy_radio.lvl6)',
        //           'unordered(hierarchy_camel.lvl0)',
        //           'unordered(hierarchy.lvl0)',
        //           'unordered(hierarchy_camel.lvl1)',
        //           'unordered(hierarchy.lvl1)',
        //           'unordered(hierarchy_camel.lvl2)',
        //           'unordered(hierarchy.lvl2)',
        //           'unordered(hierarchy_camel.lvl3)',
        //           'unordered(hierarchy.lvl3)',
        //           'unordered(hierarchy_camel.lvl4)',
        //           'unordered(hierarchy.lvl4)',
        //           'unordered(hierarchy_camel.lvl5)',
        //           'unordered(hierarchy.lvl5)',
        //           'unordered(hierarchy_camel.lvl6)',
        //           'unordered(hierarchy.lvl6)',
        //           'content',
        //         ],
        //         distinct: true,
        //         attributeForDistinct: 'url',
        //         customRanking: [
        //           'desc(weight.pageRank)',
        //           'desc(weight.level)',
        //           'asc(weight.position)',
        //         ],
        //         ranking: [
        //           'words',
        //           'filters',
        //           'typo',
        //           'attribute',
        //           'proximity',
        //           'exact',
        //           'custom',
        //         ],
        //         highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        //         highlightPostTag: '</span>',
        //         minWordSizefor1Typo: 3,
        //         minWordSizefor2Typos: 7,
        //         allowTyposOnNumericTokens: false,
        //         minProximity: 1,
        //         ignorePlurals: true,
        //         advancedSyntax: true,
        //         attributeCriteriaComputedByMinProximity: true,
        //         removeWordsIfNoResults: 'allOptional',
        //       },
        //     },
        //   //}),
        // }),
      ],
  })