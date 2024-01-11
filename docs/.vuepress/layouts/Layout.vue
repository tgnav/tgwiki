<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-content-bottom>
      <div class="content-share"><a href="" id="shareurl" target="_blank">点击此处</a> 将文章分享到Telegram</div>
    </template>
    <template #page-bottom>
      <div class="my-footer">Copyright © 2023 <a href="https://tgnav.github.io/tgwiki" target="_blank">TGwiki</a> by <a href="https://tgnav.github.io/" target="_blank">TGNAV</a><br/><span id="busuanzi_container_site_pv">本站总访问量：<span id="busuanzi_value_site_pv"></span>次</span></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
.content-share {
  text-align: center;
  color:rgb(0, 145, 255)
}
</style>
<script>
    var contenturl = window.location,href;
    var shareurl = "https://https://t.me/share?url=" + contenturl + "&text=%E6%9D%A5%E7%9C%8B%E7%9C%8B%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%EF%BC%8C%E5%B8%8C%E6%9C%9B%E5%AF%B9%E4%BD%A0%E6%9C%89%E5%B8%AE%E5%8A%A9%EF%BC%81";
    document.getElementById("shareurl").href = shareurl;
</script>