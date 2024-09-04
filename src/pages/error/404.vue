<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "ant-design-vue";

const router = useRouter();
function goSignIn() {
  router.push({ path: "/sign-in" });
}
</script>

<template>
  <div>
    404 Error
    <Button type="primary" @click="goSignIn">Goto Sign In</Button>
  </div>
</template>

<style scoped lang="scss"></style>
