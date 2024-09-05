<script setup lang="ts">
import { ref, shallowRef, watchEffect } from "vue";
import * as ECharts from "echarts";
import { useResize } from "@/utils/resize";
import { LineData } from "./types";

interface LineChartProps {
  height?: string;
  chartData?: LineData;
}

const props = withDefaults(defineProps<LineChartProps>(), {
  height: () => "100%",
  chartData: () => ({
    xAxis: ["A", "B"],
    data: [
      {
        data: [18, 20],
        type: "line",
        smooth: true,
      },
    ],
  }),
});

useResize(resize);

defineExpose({
  setOption,
});

const lineRef = ref(null);
const lineChart = shallowRef<ECharts.EChartsType | null>(null);

watchEffect(() => {
  initChart();
  console.log(props.chartData);
  setOption(props.chartData!);
});

function initChart() {
  if (lineRef.value) {
    lineChart.value = ECharts.init(lineRef.value, "dark", {
      // bug see https://github.com/apache/echarts/issues/20323
      // height: '100%'
    });
  }
}
function setOption({ xAxis, data }: LineData) {
  lineChart.value?.setOption({
    title: {
      text: "ECharts Getting Started Example",
    },
    xAxis: {
      type: "category",
      data: xAxis,
    },
    yAxis: {
      type: "value",
    },
    series: data,
  });
}

function resize() {
  lineChart.value?.resize();
}
</script>

<template>
  <div ref="lineRef" :style="{ height: props.height }"></div>
</template>

<style scoped lang="scss"></style>
