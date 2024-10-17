<template>
 <div v-if="!!coffees" class="favorite-coffee-slider-container">
  <div class="coffee-slider-main">
   <div class="coffee-slider-back-btn arrow-left" @click="showPrevious"></div>
   <div class="coffee-current-slide-frame">
    <div class="coffee-slides" ref="slides-rail">
     <div v-for="(coffee, index) in coffees" class="coffee-slider-content" ref="slide">
      <div class="coffee-slider-img"><img class="coffee-slider-img-img" :src="coffee.imgUrl" :alt="coffee.title"></div>
      <h3 class="coffee-slider-title">{{ coffee.title }}</h3>
      <p class="coffee-slider-description">{{ coffee.description }}</p>
      <h3 class="coffee-slider-price">{{ coffee.price }}</h3>
     </div>
    </div>
   </div>
   <div class="coffee-slider-next-btn arrow-right" @click="showNext"></div>
  </div>
  <div class="coffee-slider-bar">
   <ul class="coffee-slider-counter">
    <li v-for="(coffee, index) in coffees" class="coffee-slider-item"
     :class="{ 'coffee-slider-active': index == activeIndex }" @click="selectCoffeeByIndex(index)"></li>
   </ul>
  </div>
 </div>
</template>
<script setup>
import { ref, useTemplateRef, computed } from 'vue';
const coffees = ref([]);
const activeIndex = ref(0);
const slides = useTemplateRef('slide');
const slidesRail = useTemplateRef('slides-rail');

//computed
const coffeesCount = computed(() => coffees.value.length);


//get coffees
fetch('../src/assets/json/home-coffee.json').then((data) => data.json()).then((result) => {
 coffees.value = result;
});

//methods
const selectCoffeeByIndex = (index) => {
 if (index > 2 || index < 0)
  index = 0;
 activeIndex.value = index;

 let slideWidth = getSlideWidth();

 slidesRail.value.style.left = -1 * slideWidth * index + "px";

}

const getSlideWidth = () => {
 if (slides.value.length > 0) {
  let width = window.getComputedStyle(slides.value[0]).getPropertyValue('width');
  if (width.includes('px')) {
   width = width.substring(0, width.length - 2);
   width = (+width);
  }
  let gap = 20;
  width = width + gap;
  return width;
 }
 console.log("no slides");
 return 0;
}

const showNext = () => {
 let newIndex = activeIndex.value + 1;
 if (newIndex > coffeesCount.value - 1) {
  newIndex = 0;
 }
 selectCoffeeByIndex(newIndex);
}

const showPrevious = () => {
 let newIndex = activeIndex.value - 1;
 if (newIndex < 0) {
  newIndex = coffeesCount.value - 1;
 }
 selectCoffeeByIndex(newIndex);
}
</script>