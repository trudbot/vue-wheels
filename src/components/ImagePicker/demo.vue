<script setup lang="ts">
import ImagePicker from './index.vue'
import {ref} from "vue";
const path = ref('未选择');
const url = ref('https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202309221744484.jpg');
const uploadState = ref(false);

function uploadImage(image: string) {
  path.value = image;
  uploadState.value = true;
  setTimeout(() => {
    url.value = "https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202309221957600.png";
    uploadState.value = false;
  }, 3000);
}
</script>

<template>
  <div class="img-picker-demo-container">
    <div class="img">
      <ImagePicker :url="url" @upload="uploadImage" :upload-state="uploadState"></ImagePicker>
    </div>
    <div class="selected-info">当前选择的图片为: {{path}}</div>
  </div>
</template>

<style scoped lang="less">
.img-picker-demo-container {

  display: flex;
  //justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .img {
    margin-top: 20%;
    width: 200px;
    height: 200px;
  }

  .selected-info {
    margin-top: 50px;
    font-size: 30px;
  }
}
</style>
