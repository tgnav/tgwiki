// docs/.vuepress/client.ts
import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';

export default defineClientConfig({
  enhance({ app, router }) {
    // 方法一：window 检查
    if (typeof window !== 'undefined') {
      // 方法二：SSR 环境排除
      if (!import.meta.env.SSR) {
        // 方法三：客户端挂载后执行
        onMounted(() => {
          router.afterEach(() => {
            try {
              (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
              // 避免重复 push 报错
              console.warn('Adsense reload failed:', e);
            }
          });
        });
      }
    }
  },
});
