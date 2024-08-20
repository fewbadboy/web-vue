<script setup lang="ts">
import { h, ref } from 'vue'
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

defineProps<{ msg: string }>()

const count = ref(0)
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
</template>

<style scoped lang="scss">
:deep(.red) {
  @apply text-red-600;
}
</style>
