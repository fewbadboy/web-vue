<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { Button, Result } from "ant-design-vue";

const { t } = useI18n();
const router = useRouter();
function backDashboard() {
  router.push({ path: "/dashboard" });
}
</script>

<template>
  <Result status="404" title="404" :sub-title="t('error.e404.title')">
    <template #extra>
      <Button type="primary" @click="backDashboard">
        {{ t("error.e404.back") }}
      </Button>
    </template>
  </Result>
</template>

<style scoped lang="scss"></style>
