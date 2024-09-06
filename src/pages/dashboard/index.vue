<script setup lang="ts">
import LineChart from "@/components/echarts/LineChart.vue";
import { userList } from "@/mock";
console.log(userList);
</script>

<template>
  <div class="dashboard">
    <div class="a item">
      <LineChart />
    </div>
    <div class="b item"></div>
    <div class="c item"></div>
    <div class="d item"></div>
    <div class="e item"></div>
    <div class="f item"></div>
    <div class="g item"></div>
    <div class="h item"></div>
  </div>
</template>

<style scoped lang="scss">
@mixin border {
  @apply border-2 border-solid border-red-500;
}

.dashboard {
  @apply grid h-full grid-cols-3 grid-rows-3 gap-5 p-4;
  grid-template-areas:
    "a d f"
    "b d g"
    "c e h";
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}
.e {
  grid-area: e;
}
.f {
  grid-area: f;
}
.g {
  grid-area: g;
}
.h {
  grid-area: h;
}
.item {
  @include border;
}
</style>
