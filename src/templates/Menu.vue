<template>
  <main class="menu-container">
    <h2 class="menu-container-title text-dark">Behind each of our cups hides an <span class="text-accent">amazing
        surprise</span></h2>
    <div class="menu-selection">
      <label v-for="group in groups" class="menu-selection-link link-text"
        :class="group + '-selection-link ' + ((group == groupSelected) ? 'text-light' : 'text-dark')">
        <input type="radio" name="product-type" :value="group" :checked="group == 'coffee'" v-model="groupSelected" />
        <span class="menu-icon" :class="group + '-menu-icon'"></span>{{ group }}
      </label>
    </div>
    <ul class="cards-container" v-if="products">
      <ProductCard v-for="product in filteredProducts" :name="product.name" :description="product.description"
        :category="product.category" :price="product.price" :image="product.img" @click="openModal(event, product)">
      </ProductCard>
    </ul>
    <ProductModal v-if="isModalVisible && !!openedProduct" :title="openedProduct.name" :imgSrc="openedProduct.img"
      :description="openedProduct.description" :sizes="openedProduct.sizes" :additives="openedProduct.additives"
      :price="openedProduct.price" @close-modal-event="closeModal" />
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../templates/components/ProductCard.vue'
import ProductModal from './components/ProductModal.vue';

const isModalVisible = ref(false);
const groups = ["coffee", "tea", "dessert"];
const groupSelected = ref("coffee");
let products = ref([]);
const openedProduct = ref(null);
let filteredProducts = computed(() => {
  return products.value.filter((item) => item.category == groupSelected.value)
})


//Get products
fetch('../src/assets/json/products.json').then((data) => data.json()).then((result) => {
  products.value = result;
});

const openModal = (e, product) => {
  openedProduct.value = product;
  isModalVisible.value = true;
}

const closeModal = () => {
  console.log("catched close Modal event on Menu page");
  isModalVisible.value = false;
  openedProduct.value = null;
}

</script>