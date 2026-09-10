<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import { usePageFrontmatter } from "vuepress/client";

const frontmatter = usePageFrontmatter();
</script>

<template>
  <Layout>
    <template #sidebarTop v-if="!frontmatter.home && frontmatter.sidebar !== false">
      <div class="sidebar-top-box">
        <a href="https://fxvpn.app/zh/register?inviteCode=bXhcpt" target="_blank" rel="noopener noreferrer">
          <img class="sidebar-top-img" src="/assets/feixing.jpg" alt="飞星VPN" />
        </a>
      </div>
    </template>
    <!-- 通过 contentBefore 插槽在 Markdown 内容前添加内容-->
    <template #contentBefore>
      <!-- <div>内容</div> -->
    </template>
  </Layout>
</template>

<style scoped>
.sidebar-top-box {
  padding: 0.2rem 0.25rem 0.2rem 0.25rem;
  text-align: center;
}

.sidebar-top-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
}
</style>
