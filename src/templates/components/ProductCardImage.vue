<template>
 <img class="product-card-picture" :src="'../src/assets/' + image" :alt="altDescription">
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['image']);

const altDescription = computed(() => {
 if (!!props.image && !!props.image.lastIndexOf('/') && !!props.image.lastIndexOf('.'))
  return props.image.substring(props.image.lastIndexOf('/') + 1, props.image.lastIndexOf('.'));
 else
  return 'product';
})
</script>