<script setup lang="ts">
import type { Ref } from 'vue'
import { h, onBeforeMount, onMounted, ref, useAttrs, useSlots, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Space,
  Button,
  Popconfirm
} from 'ant-design-vue'
import {
  SettingOutlined,
  SettingFilled,
  createFromIconfontCN
} from '@ant-design/icons-vue';

import { compact, values } from 'lodash/fp'

console.log(compact([0, 1, 3 ,2]));

import iconFont from './iconfont?raw'

const IconFont = createFromIconfontCN({
  /**
   * 资源管理 - 我的项目
   * 修改名称
   * symbol 下查看新名称
   * 1. 离线 - 下载本地 - 引入 iconfont.js 文件
   * 2. 使用在线链接
   */
  scriptUrl: iconFont,
})

import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()
const { count, doubleCount } = storeToRefs(globalStore)
const {increment } = globalStore

export type Status = 'success' | 'warning' | 'danger'

export interface Props {
  msg?: string,
  type?: Status
}

const attrs = useAttrs()
const slots = useSlots()

defineOptions({
  inheritAttrs: false
})

const dSlots = defineSlots<{
  default(props: { msg: string }): any
}>()

// readonly
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  type: 'success'
})

const emit = defineEmits<{
  change: [id: number]
}>()

const divElement: Ref<HTMLElement | null> = ref(null)

// data to be loaded asynchronously
const countNum = ref(null)
console.log(countNum)

const vMyDirector = {
  onBeforeMount: (el: HTMLElement) => {
    // todo
  }
}

onMounted(() => {
  if (divElement.value) {
    divElement.value.style.backgroundColor = 'lightblue'
  }
})

watchEffect(() => {
  if (countNum.value) {
    // todo: do something when data is loaded
  }
})

function handleDelete() {
  // todo
}

defineExpose({
  handleDelete
})
</script>

<template>
  
  <Space class="bg-slate-300">
    Space
    <RouterLink :to="{ path: '/car' }">Car</RouterLink>
    <Button type="primary" loading>测试按钮</Button>
    <Button danger ghost :icon="h(SettingOutlined)">Danger</Button>
    <Popconfirm title="Are you sure delete this task?">
      <Button type="dashed" :icon="h(SettingFilled)">Confirm</Button>
    </Popconfirm>
    <IconFont type="icon-log" class="red" />
  </Space>

  <div :ref="(el) => divElement = el as HTMLElement" class="custom-card" v-bind="attrs">
    Tailwind css 自定义组件样式
  </div>
  <h1>{{ msg }}</h1>
  <Button type="primary" @click="increment">+1</Button>
  {{ count }} {{ doubleCount }}
  <slot :msg="props.msg" />
</template>

<style scoped lang="scss">
:deep(.red) {
  @apply text-red-600;
}
</style>
