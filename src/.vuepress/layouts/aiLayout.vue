<script setup>
// 从 vuepress-theme-hope 的客户端库导入 Layout 组件
import { Layout } from "vuepress-theme-hope/client";
import AiAssistant from '../components/aiAssistant.vue' 
</script>

<template>
  <Layout>
    <template #default>
        <div class="ai-assistant-page">
            <AiAssistant />
        </div>
    </template>
    
    </Layout>
</template>

<style>
/* 确保内容区域在主题布局内正确显示 */
.ai-assistant-page {
  /* 确保占据合理的垂直空间 */
  min-height: 80vh; 
  padding: 2rem 0;
}
</style>
