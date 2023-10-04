<script setup lang="ts">

import {useCarousel} from "./use-carousel.ts";

useCarousel();

</script>

<template>
  <div class="container">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.box {
  position: absolute;
  width: 100%;
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
}
</style>
