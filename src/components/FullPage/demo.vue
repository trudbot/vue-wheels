<script setup lang="ts">
import FullPage from './index.vue'
import PageItem from "./page-item.vue";
import {dark} from "../../assets/colorSystem.ts";
</script>

<template>
  <FullPage duration="1s" @to-page="(to: number) => console.log(`当前页面为${to}`)">
    <PageItem v-for="(v, i) in 5">
      <div class="box" :style="{background: dark[i]}">
        {{v}}
      </div>
    </PageItem>
  </FullPage>
</template>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
