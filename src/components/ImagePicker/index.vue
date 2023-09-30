<script setup lang="ts">

const emit = defineEmits<{
  (e: 'upload', path: string): void;
}>();

const props = defineProps<{
  url: string;
  uploadState: boolean;
}>();

function select(e: Event) {
  emit('upload', (e.target as HTMLInputElement).value);
}

</script>

<template>
  <div class="fill-up img-picker-container" :class="{uploading: props.uploadState}">
    <img :src="props.url" alt="avatar">
    <input type="file" class="fill-up" @change="select" accept="image/*">
  </div>
</template>

<style scoped lang="less">
.fill-up {
  width: 100%;
  height: 100%;
}

.img-picker-container {
  position: relative;
  overflow: hidden;

  &.uploading:after {
    content: 'uploading';
    background: hsla(0, 0%, 0%, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: inset 0 0 5px hsla(264, 46%, 23%, 0.5);
    color: white;
    font-size: 2em;
    font-family: Monospaced, serif;
  }

  &:hover:after {
    content: 'edit';
    background: hsla(0, 0%, 0%, 0.2);
  }

  img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }

  input {
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
