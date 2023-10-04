<script setup lang="ts">
import {ref} from "vue";
import {useCarouselItem} from "./use-carousel-item.ts";

const props = defineProps<{
  width?: string
}>();

defineOptions({
  name: 'trudbot'
})
const box = ref<HTMLElement | null>(null);
const {translate} = useCarouselItem(box);

</script>

<template>
  <div class="carousel-item-container"
       :style="{width: (props.width ? props.width : 'auto'), translate: translate + 'px'}"
       ref="box">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.carousel-item-container {
  height: 100%;
  flex-shrink: 0;
  transition: all 0.3s linear;
}
</style>
