<template>
  <li class="product-card-item" :class="category + '-card-item'"><a class="product-card" :class="category + '-card'">
      <img class="product-card-picture" :src="'../src/assets/' + image" :alt="altDescription">
      <div class="product-card-content">
        <h3 class="product-card-title">{{ name }}</h3>
        <p class="product-card-description">{{ description }}</p>
        <h3>${{ price }}</h3>
      </div>
    </a></li>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['name', 'description', 'price', 'category', 'image']);

const altDescription = computed(() => {
  if (!!props.image && !!props.image.lastIndexOf('/') && !!props.image.lastIndexOf('.'))
    return props.image.substring(props.image.lastIndexOf('/') + 1, props.image.lastIndexOf('.'));
  else
    return 'product';
})


</script>