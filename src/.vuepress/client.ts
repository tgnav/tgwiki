// docs/.vuepress/client.ts
import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.afterEach(() => {
      if (window.adsbygoogle) {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.warn('Adsense reload failed:', e);
        }
      }
    });
  },
});
