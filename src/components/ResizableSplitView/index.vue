<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {useVariableWidthBox} from "./composables/variableWidthBox.ts";


const props = withDefaults(defineProps<{
  pos?: 'left' | 'right',
  defaultWidth: number,
  minWidth: number,
  maxWidth?: number,
  foldable?: boolean
}>(), {
  pos: 'left',
  maxWidth: 100000000,
  foldable: true
});

const emit = defineEmits<{
  (e: 'fold'): void
}>();


const posConfig = computed(() => {
  if (!props.pos || props.pos === 'left') {
    return {
      left: 'sidebar',
      right: 'main',
    }
  } else {
    return {
      left: 'main',
      right: 'sidebar',
    }
  }
})
const sign = computed(() => {
  return props.pos === 'left' ? 1 : -1;
});

const drag = ref(null);
const width = ref(props.defaultWidth);

// const {
//   width,
//   fold
// } = useVariableWidthBox(drag, props.defaultWidth, props.minWidth, props.pos, props.foldable, props.maxWidth);

function fold() {
  if (width.value === 0) {
    width.value = props.defaultWidth;
  } else {
    emit('fold')
    width.value = 0;
  }
}
function dragMouseDown() {
  document.onmousemove = null;
  document.onmouseup = null;
  document.onmouseup =  () => {
    document.onmousemove = null;
    document.onmouseup = null;
    console.log('up')
  }
  console.log('down')
  document.onmousemove = (e: MouseEvent) => {
    console.log('move')
    width.value += sign.value * e.movementX;
    if (width.value < props.minWidth) {
      if(document.onmouseup === null){
        return document.onmouseup = null;
      }
      document.onmouseup(e);
      props.foldable ? fold() : width.value = props.minWidth;
    } else if (width.value > props.maxWidth) {
      width.value = props.maxWidth;
    }
  }
}

</script>

<template>
  <div class="container">
    <div :class="posConfig.left" :style="{width: width + 'px'}">
      <slot :name="posConfig.left">
      </slot>
    </div>
    <div class="line" ref="drag" :style="{cursor: width === 0 ? '' : 'col-resize'}"
         @mousedown="dragMouseDown">
      <div class="fold-button" v-if="props.foldable" @click="fold">
        <slot name="fold" @click="fold">
          <button style="background: transparent; cursor: pointer; font-size: 20px;">🤡</button>
        </slot>
      </div>
    </div>
    <div :class="posConfig.right">
      <slot :name="posConfig.right">
      </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .sidebar,
  .main {
    height: 100%;
    overflow: hidden;
  }

  .line {
    width: 3px;
    height: 100%;
    position: relative;
    background: #e6e6e6;
    user-select: none;
  }

  .main {
    flex: 1;
  }

  .fold-button {
    position: absolute;
    top: 50%;
    background: transparent;
    left: -17px;
    text-align: center;
    line-height: 40px;
    width: 40px;
    height: 40px;
  }
}
</style>
