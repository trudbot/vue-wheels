<script setup lang="ts">
import LoopingCarousel from './index.vue'
import CarouselItem from "./carousel-item.vue";

const images = [
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/1.webp',
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/1.jpg',
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202307062115424.jpg',
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202310041650750.png',
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202310041651725.gif',
    'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202310041651047.jpg'
]

</script>

<template>
  <div class="fill-up demo-container">
    <div class="demo-content">
      <LoopingCarousel>
        <CarouselItem v-for="url in images" width="300px">
          <div class="fill-up item">
            <img :src="url" class="img">
          </div>
        </CarouselItem>
      </LoopingCarousel>
    </div>
  </div>
</template>

<style scoped lang="less">
.fill-up {
  width: 100%;
  height: 100%;
}

.demo-container {
  position: relative;
  .demo-content {
    top: 10%;
    position: absolute;
    width: 100%;
    height: 60%;
  }
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    width: 250px;
  }
}
</style>
