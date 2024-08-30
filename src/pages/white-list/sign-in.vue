<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { setToken } from "@/utils/auth";
import { Space, Button, Select, SelectOption } from "ant-design-vue";

const router = useRouter();
const { locale } = useI18n();

function signIn() {
  setToken("admin");
  router.push({ path: "/" });
}
</script>

<template>
  <Space>
    <Select v-model:value="locale">
      <SelectOption value="en">英文</SelectOption>
      <SelectOption value="zh-CN">中文</SelectOption>
    </Select>
    <Button type="primary" @click="signIn">Sign In</Button>
  </Space>
</template>

<style scoped lang="scss"></style>
