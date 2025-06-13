<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
</script>

<template>
  <Layout>
    <!-- 通过 contentBefore 插槽在 Markdown 内容前添加广告-->
    <template #contentBefore>
      <!-- <div>广告内容</div> -->
    </template>
  </Layout>
</template>
