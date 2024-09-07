<script setup lang="ts">
import { h, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { setI18NLanguage } from "@/i18n";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";

import { Avatar, Dropdown, Menu, MenuProps } from "ant-design-vue";
import { TranslationOutlined } from "@ant-design/icons-vue";

import { MenuInfo } from "ant-design-vue/es/menu/src/interface";

const global = useGlobalStore();
const { language } = storeToRefs(global);
const { locale } = useI18n();
language.value = locale.value;

watchEffect(() => {
  dayjs.locale(language.value === "en" ? enUS.locale : zhCN.locale);
});

const items = ref<MenuProps["items"]>([
  {
    key: "en",
    icon: () => h(TranslationOutlined),
    label: "English",
    title: "English",
  },
  {
    key: "zh-CN",
    icon: () => h(TranslationOutlined),
    label: "中文",
    title: "中文",
  },
]);

function handleOperate({ key }: MenuInfo) {
  language.value = key as string;
  setI18NLanguage(key as string);
}
</script>

<template>
  <Dropdown>
    <div>
      <Avatar>
        <template #icon>
          <TranslationOutlined />
        </template>
      </Avatar>
    </div>
    <template #overlay>
      <Menu :items="items" @click="handleOperate" />
    </template>
  </Dropdown>
</template>

<style scoped lang="scss"></style>
