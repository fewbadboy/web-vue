<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "ant-design-vue";

const router = useRouter();
function goHome() {
  router.push({ path: "/" });
}
</script>

<template>
  <div>
    Audi
    <Button type="primary" @click="goHome">Home</Button>
  </div>
</template>

<style scoped lang="scss"></style>
