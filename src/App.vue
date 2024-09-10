<script setup lang="ts">
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider } from "ant-design-vue";

import { useGlobalStore } from "./stores/global";
import { storeToRefs } from "pinia";

const global = useGlobalStore();
const { language } = storeToRefs(global);
</script>

<template>
  <ConfigProvider :locale="language === 'en' ? enUS : zhCN">
    <RouterView />
  </ConfigProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
