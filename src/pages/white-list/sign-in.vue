<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { setToken } from "@/utils/auth";
import { Space, Button, Select, SelectOption } from "ant-design-vue";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";
import { SelectValue } from "ant-design-vue/es/select";

const global = useGlobalStore();
const { language } = storeToRefs(global);
const router = useRouter();
const { locale } = useI18n();
language.value = locale.value;

function signIn() {
  setToken("admin");
  router.push({ path: "/dashboard" });
}

function changeLanguage(value: SelectValue) {
  language.value = value as string;
}
</script>

<template>
  <Space>
    <Select v-model:value="locale" @change="changeLanguage">
      <SelectOption value="en">英文</SelectOption>
      <SelectOption value="zh-CN">中文</SelectOption>
    </Select>
    <Button type="primary" @click="signIn">Sign In</Button>
  </Space>
</template>

<style scoped lang="scss"></style>
