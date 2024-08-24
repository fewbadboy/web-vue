<script setup lang="ts">
import { useRouter } from 'vue-router';
import { setToken } from '@/utils/auth';
import {
  Button
} from 'ant-design-vue'

const router = useRouter()

function signIn() {
  setToken('admin')
  router.push({ path: '/' })
}
</script>

<template>
  <Button type="primary" @click="signIn">Sign In</Button>
</template>

<style scoped lang="scss">

</style>