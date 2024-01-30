<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">Copyright © 2024 <a href="https://tgnav.github.io/tgwiki" target="_blank">TGwiki</a> by <a href="https://tgnav.github.io/" target="_blank">TGNAV</a><br/><span id="busuanzi_container_site_pv">本站总访问量：<span id="busuanzi_value_site_pv"></span>次</span></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>