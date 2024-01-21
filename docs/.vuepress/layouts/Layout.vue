<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer"><a href="https://github.com/tgnav/tgwiki" target="_blank" style="color:rgb(0, 162, 255);">本文档已在GitHub上开源，Star支持一下吧！</a></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>