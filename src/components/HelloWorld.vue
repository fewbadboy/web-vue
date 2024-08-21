<script setup lang="ts">
import { h, ref } from 'vue'
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

const IconFont = createFromIconfontCN({
  // symbol 引用
  // https://www.iconfont.cn/help/detail?helptype=code
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})

import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()
const { count, doubleCount } = storeToRefs(globalStore)
const {increment } = globalStore


defineProps<{ msg: string }>()

const countNum = ref(0)
console.log(countNum)

</script>

<template>
  
  <Space class="bg-slate-300">
    Space
    <Button type="primary" loading>测试按钮</Button>
    <Button danger ghost :icon="h(SettingOutlined)">Danger</Button>
    <Popconfirm title="Are you sure delete this task?">
      <Button type="dashed" :icon="h(SettingFilled)">Confirm</Button>
    </Popconfirm>
    <IconFont type="icon-twitter" class="red" />
  </Space>

  <div class="custom-card">
    Tailwind css 自定义组件样式
  </div>
  <h1>{{ msg }}</h1>
  <Button type="primary" @click="increment">+1</Button>
  {{ count }} {{ doubleCount }}
</template>

<style scoped lang="scss">
:deep(.red) {
  @apply text-red-600;
}
</style>
