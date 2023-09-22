<script setup lang="ts">
import menus from './menus.ts'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const activeId = ref(0);
const top = ref(32);
const router = useRouter();

function menuClick(idx: number) {
  if (idx === activeId.value) {
    return;
  }
  top.value += (activeId.value - idx) * 5;
  activeId.value = idx;
  router.push({
    name: menus[activeId.value].routeName
  })
}

const sidebar = ref<HTMLElement | null>(null);
const animating = ref(false);

function gotoItem(target: number) {
  if (animating.value || sidebar.value === null || target === activeId.value) {
    return;
  }
  animating.value = true;
  menuClick(target);
  sidebar.value.ontransitionend = () => {
    if (sidebar.value === null) {
      return;
    }
    sidebar.value.ontransitionend = null;
    animating.value = false;
  }
}

// function sidebarWheel(e: WheelEvent) {
//   let deltaY: number = e.deltaY > 0 ? 1 : -1;
//   const updated = Math.min(menus.length - 1, Math.max(0, activeId.value + deltaY));
//   gotoItem(updated)
// }

onMounted(() => {
  if (sidebar.value === null) {
    return;
  }
  sidebar.value.addEventListener('wheel', (e: WheelEvent) => {
    let deltaY: number = e.deltaY > 0 ? 1 : -1;
    const updated = Math.min(menus.length - 1, Math.max(0, activeId.value + deltaY));
    gotoItem(updated)
  }, {passive: true})
});
</script>

<template>
  <div class="home-container">
    <div class="sidebar" ref="sidebar">
      <div class="menu-item block" :style="{height: top + 'vh'}"></div>
      <div v-for="(item, idx) in menus" class="menu-item" :class="{active: activeId === idx}" @click="menuClick(idx)">
        {{ item.label }}
      </div>
    </div>
    <div class="content-container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-container {
  height: 100%;
  width: 90vw;
  margin: 0 10vw;
  display: flex;
}

.sidebar {
  width: 20%;
  overflow: hidden;
  //justify-content: center;
  .menu-item {
    width: 100%;
    height: 5vh;
    line-height: 5vh;
    font-size: 2vw;
    text-align: center;
    margin-top: 10px;
  }

  .active {
    font-size: 3vw;
    transition: font-size 1s ease;
  }

  .block {
    transition: height 1.5s ease;
  }

}

.content-container {
  height: 100%;
  flex-grow: 1;

  .content {
    margin: 10vh 10% 10vh 0;
    height: 80vh;
    width: 90%;
  }
}
</style>
