import { DirectiveBinding, VNode } from "vue";


export const myDirective = {
  created(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    console.log(el, binding, vNode);
  },

  beforeMount(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    console.log(el, binding, vNode);
  },
  mounted(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    console.log(el, binding, vNode);
  },
  beforeUpdate(el: HTMLElement, binding: DirectiveBinding, vNode: VNode, prevVNode: VNode) {
    console.log(el, binding, vNode, prevVNode);
  },
  updated(el: HTMLElement, binding: DirectiveBinding, vNode: VNode, prevVNode: VNode) {
    console.log(el, binding, vNode, prevVNode);
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    console.log(el, binding, vNode);
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    console.log(el, binding, vNode);
  }
}