<script setup lang="ts">
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import { onMounted, ref, shallowRef, watchEffect } from "vue";
import { DataSet } from "vis-data";
import { Timeline, TimelineOptions } from "vis-timeline";

const timelineRef = ref<HTMLDivElement | null>(null);
/**
 * ISO date
 *
 * setWindow()
 * setSelection()
 * moveTo()
 * fit()
 *
 * addCustomTime/setCustomTimeMarker
 */
const timeline = shallowRef<Timeline | null>(null);

const groups = new DataSet([
  { id: 1, content: "Group 1", value: 1 },
  { id: 3, content: "Group 3", value: 3 },
  { id: 2, content: "Group 2", value: 2 },
]);

/**
 * clear()
 * add()
 * update()
 */
const items = new DataSet([
  {
    // 添加区域背景
    id: "A",
    content: "Period A",
    start: "2024-08-10",
    end: "2024-08-20",
    type: "background",
    group: 1,
    className: "custom",
  },
  { id: 1, content: "item 1", start: "2024-08-20", group: 1 },
  { id: 2, content: "item 2", start: "2024-08-14", group: 1 },
  {
    id: 3,
    content: "item 3 updateTime",
    start: "2024-08-18",
    group: 2,
    title: "item 3 tooltip", // tooltip
    editable: { updateTime: true, updateGroup: false, remove: false },
  },
  {
    id: 4,
    content: "item 4",
    start: "2024-08-16",
    end: "2024-08-19",
    group: 1,
  },
  { id: 5, content: "item 5", start: "2024-08-25" },
  { id: 6, content: "item 6", start: "2024-08-27", type: "point", group: 1 },
]);

const options = ref<TimelineOptions>({
  height: "300px",
  hiddenDates: [],
  // start: '2024-8-1',
  // end: ,
  min: "2024-08-01",
  max: "2024-09-30",
  // rollingMode: {
  //   follow: true,
  //   offset: 0.5,
  // },
  // tooltip: {
  //   template: (originalItemData, parsedItemData) => {}
  // },
  editable: true,
  multiselect: true,
  showCurrentTime: true,
  groupOrder: function (a: { value: number }, b: { value: number }) {
    return a.value - b.value;
  },
  onAdd: function (item, callback) {
    return callback(item);
  },
  // onUpdate: function (item, callback) {
  //   return callback(item);
  // },
  // onRemove: function (item, callback) {
  //   return callback(item);
  // },
});

onMounted(() => {
  if (timelineRef.value) {
    timeline.value = new Timeline(
      timelineRef.value,
      items,
      groups,
      options.value,
    );
  }
});

watchEffect(() => {
  // if (timeline.value) {
  //   timeline.value.setItems(items);
  //   timeline.value.setGroups(groups);
  //   timeline.value.setOptions(options.value);
  //   // timeline.value?.setSize('100%', '500px')
  // }
});
</script>

<template>
  <div ref="timelineRef"></div>
</template>

<style scoped lang="scss">
.vis-item.vis-background {
  &.custom {
    @apply bg-orange-600;
  }
}
</style>
