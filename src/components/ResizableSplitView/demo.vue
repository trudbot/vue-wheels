<script setup lang="ts">
import ResizableSplitView from './index.vue'
import {dark} from "../../assets/colorSystem.ts";

</script>

<template>
  <div class="fill-up">
    <ResizableSplitView :min-width="100" :default-width="200" pos="left" :foldable="false">
      <template #sidebar>
        <div class="fill-up box" :style="{background: dark[1]}"></div>
      </template>
      <template #main>
        <div class="fill-up box" :style="{background: dark[4]}"></div>
      </template>
    </ResizableSplitView>
  </div>
</template>

<style scoped lang="less">
.fill-up {
  width: 100%;
  height: 100%;
}

.box {
  border-radius: 10px;
}
</style>
