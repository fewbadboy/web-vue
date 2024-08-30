<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";

const list = ref<Array<{ msg: string }>>([]);

function onBeforeEnter(el: Element) {}
function onEnter(el: Element, done: () => void) {
  gsap.to(el, {
    opacity: 1,
    height: "1.5em",
    delay: parseFloat(el.getAttribute("data-index") ?? "0") * 0.15,
    onComplete: done,
  });
}
function onLeave(el: Element, done: () => void) {}
</script>

<template>
  <TransitionGroup
    tag="ol"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li v-for="({ msg }, index) in list" :key="index" :data-index="index">
      {{ msg }}
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss"></style>
