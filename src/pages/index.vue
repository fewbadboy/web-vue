<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import HelloWorld from '@/components/HelloWorld.vue';

const { t, d, n } =  useI18n()
// mile-per-hour
</script>

<template>
  <HelloWorld :msg="'Hello'">
    <template #default="{ msg }">
      {{ msg }}
    </template>
  </HelloWorld>
  <div>{{ t('operate.delete') }}</div>
  <div>{{ d(Date.now(), 'long') }}</div>
  <div>{{ n(13.4456789, 'currency') }}</div>
  <div>{{ n(13456.4456789, { style: 'unit', unit: 'byte' }) }}</div>
  <div v-t="{path: 'dashboard'}" />
</template>

<style scoped lang="scss">

</style>