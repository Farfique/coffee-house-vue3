<template>
 <li class="product-card-item" :class="category + '-card-item'"><a class="product-card" :class="category + '-card'">
   <img class="product-card-picture" src="../../assets/img/select-coffees/coffee-1.png" alt="coffee-1">
   <div class="product-card-content">
    <h3 class="product-card-title">{{ name }}</h3>
    <p class="product-card-description">{{ description }}</p>
    <h3>{{ price }}</h3>
   </div>
  </a></li>
</template>
<script setup>
const props = defineProps(['name', 'description', 'price', 'category']);

</script>