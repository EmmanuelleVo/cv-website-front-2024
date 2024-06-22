<template>
    <div class="carousel">
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="slide.image" :alt="slide.alt">
        </div>
      </div>
      <a class="carousel-control-prev" @click="prevSlide">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" @click="nextSlide">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true
      }
    },
    methods: {
      prevSlide() {
        // Add logic for previous slide
      },
      nextSlide() {
        // Add logic for next slide
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
  }
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    display: none;
    flex: 0 0 100%;
  }
  .carousel-item.active {
    display: block;
  }
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .carousel-control-prev {
    left: 0;
  }
  .carousel-control-next {
    right: 0;
  }
  </style>
  