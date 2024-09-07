<script setup lang="ts">
import { h } from "vue";

import {
  StatisticCountdown,
  Timeline,
  TimelineItem,
  Spin,
} from "ant-design-vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import LineChart from "@/components/echarts/LineChart.vue";
import { userList } from "@/mock";
console.log(userList);
const indicator = h(LoadingOutlined, {
  style: { fontSize: "1rem" },
  spin: true,
});
const deadLine = Date.now() + 1000 * 60 * 60 * 24;

function onFinish() {}
</script>

<template>
  <div class="dashboard">
    <div class="a item">
      <LineChart />
    </div>
    <div class="b item">
      <StatisticCountdown
        title="CountDown"
        :value="deadLine"
        @finish="onFinish"
      />
    </div>
    <div class="c item">
      <Timeline mode="right" class="pr-2 pt-2">
        <TimelineItem color="green">立项</TimelineItem>
        <TimelineItem color="green">需求</TimelineItem>
        <TimelineItem color="">
          <template #dot>
            <div class="bg-transparent">
              <Spin :indicator="indicator" />
            </div>
          </template>
          设计
        </TimelineItem>
      </Timeline>
    </div>
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
