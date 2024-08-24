<script setup lang="ts">

</script>

<template>
  <div>
    Layout
  </div>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'fade'" :key="route.path">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">

</style>