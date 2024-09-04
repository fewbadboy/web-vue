<script setup lang="ts">
import type { Ref } from "vue";
import { h, onMounted, ref, useAttrs, useSlots, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { Space, Button, Input, Popconfirm } from "ant-design-vue";
import {
  SettingOutlined,
  SettingFilled,
  createFromIconfontCN,
} from "@ant-design/icons-vue";

import { compact } from "lodash/fp";

console.log(compact([0, 1, 3, 2]));

import iconFont from "@/utils/iconfont?url";

const IconFont = createFromIconfontCN({
  /**
   * 资源管理 - 我的项目
   * 修改名称
   * symbol 下查看新名称
   * 1. 离线 - 下载本地 - 引入 iconfont.js 文件
   * 2. 使用在线链接
   * h(IconFont, { type: 'icon-log' })
   */
  scriptUrl: iconFont,
});

import { useGlobalStore } from "@/stores/global";

import { getMock } from "@/api/mock";

const globalStore = useGlobalStore();
const { count, doubleCount } = storeToRefs(globalStore);
const { increment } = globalStore;

export type Status = "success" | "warning" | "danger";

export interface Props {
  msg?: string;
  type?: Status;
}

const attrs = useAttrs();
const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});

const dSlots = defineSlots<{
  default(props: { msg: string }): any;
}>();

// readonly
const props = withDefaults(defineProps<Props>(), {
  msg: () => "hello",
  type: "success",
});

const emit = defineEmits<{
  change: [id: number];
}>();

const divElement: Ref<HTMLElement | null> = ref(null);

// data to be loaded asynchronously
const countNum = ref(null);
console.log(countNum);

const vMyDirector = {
  onBeforeMount: (el: HTMLElement) => {
    // todo
  },
};

const open = ref(false);

onMounted(() => {
  // getMock({ id: 1 }).then(({ data }) => {
  //   console.log(data)
  // }).catch(({ message }) => {
  //   console.log(message)
  // })
  if (divElement.value) {
    divElement.value.style.backgroundColor = "lightblue";
  }
});

watchEffect(() => {
  if (countNum.value) {
    // todo: do something when data is loaded
  }
});

function handleDelete() {
  // todo
}

defineExpose({
  handleDelete,
});
</script>

<template>
  <Space class="bg-slate-30 px-4 py-1 text-black hover:bg-sky-800">
    Space
    <RouterLink :to="{ path: '/object/car' }">Car</RouterLink>
    <Button type="primary" loading>测试按钮</Button>
    <Button danger ghost :icon="h(SettingOutlined)">Danger</Button>
    <Popconfirm title="Are you sure delete this task?">
      <Button type="dashed" :icon="h(SettingFilled)">Confirm</Button>
    </Popconfirm>
    <IconFont type="icon-log" class="red" />
    <Button type="primary" @click="open = true">Teleport</Button>
    <Input
      type="number"
      class="name w-[160px]"
      :min="1"
      :max="10"
      placeholder=""
    />
  </Space>

  <div
    :ref="(el) => (divElement = el as HTMLElement)"
    class="custom-card"
    v-bind="attrs"
  >
    Tailwind css 自定义组件样式
  </div>
  <h1>{{ msg }}</h1>
  <Button type="primary" @click="increment">+1</Button>
  <div class="test">
    {{ count }} {{ doubleCount }}
    小伙子这是要早餐啊
  </div>
  <slot :msg="props.msg" />
  <Teleport to="body">
    <div v-if="open" class="teleport">
      <p>Hello from the modal!</p>
      <ul class="list-disc marker:text-sky-400">
        <li>武林风</li>
      </ul>
      <Button @click="open = false">Close</Button>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
:deep(.red) {
  @apply text-red-600;
}

.name {
  @apply caret-blue-500 placeholder:text-orange-500 in-range:text-green-500 out-of-range:text-red-500;
}

.test {
  @apply bg-red-200 selection:text-green-500 dark:bg-red-800 dark:selection:text-orange-500;
}

.teleport {
  @apply fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-teal-500 px-6;
}
</style>
