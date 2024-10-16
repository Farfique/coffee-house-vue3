<template>
  <div class="product-modal" ref="product-modal" @click.self="closeModal">
    <div class="product-modal-container background-light">
      <ProductCardImage :image="imgSrc" />
      <div class="product-modal-info">
        <div class="product-modal-main-info">
          <h3 class="product-modal-title">{{ title }}</h3>
          <p class="product-modal-description">{{ description }}</p>
        </div>
        <div class="product-modal-add-container product-modal-size-container">
          <p class="no-margin">Size</p>
          <div class="product-modal-size-menu">
            <div class="menu-selection flex-start">
              <label v-for="(sizeObj, sizeName, index) in sizes" class="menu-selection-link link-text"
                :class="((sizeName == sizeSelected) ? 'text-light container' : 'text-dark')">
                <input type="radio" name="size" :value="sizeName" :checked="sizeName == 's'" v-model="sizeSelected" />
                <span class="menu-icon text-dark">{{ sizeName.toUpperCase() }}</span>{{
                  sizeObj.size
                }}
              </label>
            </div>
          </div>
        </div>
        <div class="product-modal-add-container product-modal-additives-container">
          <p class="no-margin">Additives</p>
          <div class="product-modal-additives-menu">
            <div class="menu-selection flex-start">
              <label v-for="(additive, index) in additives" class="menu-selection-link link-text">
                <input type="checkbox" name="additive-type" :value="additive" checked="false"
                  v-model="additivesSelected" />
                <span class="menu-icon">{{ index + 1 }}</span>{{ additive.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="product-modal-total">
          <h3 class="product-modal-total-text">Total:</h3>
          <h3>${{ totalPrice }}</h3>
        </div>
        <div class="product-modal-disclaimer">
          <div class="product-modal-disclaimer-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_311_4007)">
                <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
                  stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_311_4007">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg></div>
          <div class="product-modal-disclaimer-text caption-text">The cost is not final. Download our mobile app to see
            the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20%
            discount.</div>
        </div>
        <button class="transparent-button product-modal-close-btn link-text" ref="button-modal"
          @click="closeModal">Close</button>
      </div>
    </div>

  </div>
</template>
<script setup>

import { ref, computed, useTemplateRef } from 'vue';
import ProductCardImage from './ProductCardImage.vue';

const props = defineProps([
  'title',
  'imgSrc',
  'description',
  'sizes',
  'additives',
  'price'
]);

const additivesSelected = ref([]);
const sizeSelected = ref('s');

const buttonModal = useTemplateRef('button-modal');
const closeModalEvent = new Event('close-modal-event', { bubbles: true });

//computed properties
const additivesPrice = computed(() => additivesSelected.value.reduce((acc, current) => parseFloat(acc) + parseFloat(current["add-price"]), 0)) //Number

const sizePrice = computed(() => parseFloat(props.sizes[sizeSelected.value]['add-price'])) //Number

const totalPrice = computed(() => (sizePrice.value + additivesPrice.value + parseFloat(props.price)).toFixed(2)) //String

//methods

const closeModal = () => {
  buttonModal.value.dispatchEvent(closeModalEvent);
}

</script>