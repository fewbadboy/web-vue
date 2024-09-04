<script setup lang="ts">
import { h, ref } from "vue";
import { storeToRefs } from "pinia";
import { usePermissionStore } from "@/stores/permission";
import {
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuProps,
} from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { MenuInfo } from "ant-design-vue/es/menu/src/interface";
import Header from "./Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const permission = usePermissionStore();
const { accessMenus } = storeToRefs(permission);

const collapsed = ref(false);
const selectedKeys = ref(["/dashboard"]);
const items = ref<MenuProps["items"]>([
  {
    key: "one",
    icon: () => h(UserOutlined),
    label: "Navigation One",
    title: "Navigation One",
  },
  {
    key: "two",
    icon: () => h(UserOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
    children: [
      {
        key: "two1",
        icon: () => h(UserOutlined),
        label: "Navigation Two1",
        title: "Navigation Two1",
        children: [
          {
            key: "two11",
            icon: () => h(UserOutlined),
            label: "Navigation Two11",
            title: "Navigation Two11",
            children: [
              {
                key: "two111",
                icon: () => h(UserOutlined),
                label: "Navigation Two111",
                title: "Navigation Two111",
              },
              {
                key: "two112",
                icon: () => h(UserOutlined),
                label: "Navigation Two112",
                title: "Navigation Two112",
              },
            ],
          },
          {
            key: "two12",
            icon: () => h(UserOutlined),
            label: "Navigation Two12",
            title: "Navigation Two12",
          },
        ],
      },
      {
        key: "two2",
        icon: () => h(UserOutlined),
        label: "Navigation Two2",
        title: "Navigation Two2",
        children: [
          {
            key: "two21",
            label: "Navigation Two21",
            title: "Navigation Two21",
          },
          {
            key: "two22",
            label: "Navigation Two22",
            title: "Navigation Two22",
          },
        ],
      },
    ],
  },
  {
    key: "three",
    icon: () => h(UserOutlined),
    label: "Navigation Three",
    title: "Navigation Three",
    children: [
      {
        key: "three1",
        label: "Navigation Three1",
        title: "Navigation Three1",
      },
    ],
  },
]);

function handleClick({ keyPath }: MenuInfo) {
  selectedKeys.value = keyPath as string[];
  router.push({ path: (keyPath as string[])?.join("/") });
}
</script>

<template>
  <Layout class="h-full">
    <LayoutSider v-model:collapsed="collapsed" collapsible>
      <div class="h-[64px] bg-yellow-500"></div>
      <Menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        :items="accessMenus"
        @click="handleClick"
      />
    </LayoutSider>
    <Layout class="h-full">
      <LayoutHeader :style="{ backgroundColor: '#eee' }">
        <Header />
      </LayoutHeader>
      <LayoutContent class="content">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="route.meta.transition || 'fade'" :key="route.path">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </LayoutContent>
    </Layout>
  </Layout>
</template>

<style scoped lang="scss">
.header {
  @apply bg-white dark:bg-black;
}
.content {
  min-width: calc(100% - 64px);
}
</style>
