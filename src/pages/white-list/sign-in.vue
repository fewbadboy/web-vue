<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { setToken } from "@/utils/auth";
import { Space, Button } from "ant-design-vue";
import LanguageSelect from "@/components/LanguageSelect.vue";
const router = useRouter();
const { t } = useI18n();

function signIn() {
  setToken("admin");
  router.push({ path: "/dashboard" });
}
</script>

<template>
  <Space>
    <LanguageSelect />
    <Button type="primary" @click="signIn">{{ t("signIn") }}</Button>
  </Space>
</template>

<style scoped lang="scss"></style>
