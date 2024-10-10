<template>
  <li class="product-card-item" :class="category + '-card-item'"><a class="product-card" :class="category + '-card'">
      <ProductCardImage :image="image" />
      <div class="product-card-content">
        <h3 class="product-card-title">{{ name }}</h3>
        <p class="product-card-description">{{ description }}</p>
        <h3>${{ price }}</h3>
      </div>
    </a></li>
</template>
<script setup>
import ProductCardImage from './ProductCardImage.vue';

const props = defineProps(['name', 'description', 'price', 'category', 'image']);

</script>