<script setup lang="ts">
import { h, ref } from "vue";
import { Avatar, Dropdown, Flex, Menu, MenuProps } from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { MenuInfo } from "ant-design-vue/es/menu/src/interface";

const items = ref<MenuProps["items"]>([
  {
    key: "detail",
    icon: () => h(UserOutlined),
    label: "详情",
    title: "详情",
  },
  {
    type: "divider",
  },
  {
    key: "out",
    icon: () => h(UserOutlined),
    label: "退出",
    title: "退出",
  },
]);

function handleOperate({ key }: MenuInfo) {
  console.log(key);
}
</script>

<template>
  <Flex :justify="'flex-end'" :align="'center'">
    <Dropdown>
      <div>
        <Avatar>
          <template #icon>
            <UserOutlined />
          </template>
        </Avatar>
      </div>
      <template #overlay>
        <Menu :items="items" @click="handleOperate" />
      </template>
    </Dropdown>
  </Flex>
</template>

<style scoped lang="scss"></style>
