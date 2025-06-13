import { defineClientConfig } from "vuepress/client";
import Layout from "./layouts/Layout.vue";
export default defineClientConfig({
  layouts: {
    Layout,
  },
  enhance: ({ router }) => {
    const SCRIPT_ID = 'busuanzi-script';

    function reloadScript() {
      const old = document.getElementById(SCRIPT_ID);
      if (old) old.remove();

      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.async = true;
      s.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
      document.head.appendChild(s);
    }
    reloadScript();
    router.afterEach(() => {
      // 给浏览器一点时间，让 DOM 完全渲染好
      setTimeout(() => {
        // 再次告诉 adsbygoogle 去扫描并渲染广告
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          // 避免重复 push 报错
          console.warn('Adsense reload failed:', e);
        }
        reloadScript();
      }, 200);
    });
  },
});
 