<template>
  <div class="product-modal" ref="product-modal">
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
                :class="((sizeName == sizeSelected) ? 'text-light' : 'text-dark')">
                <input type="radio" name="product-type" :value="sizeName" :checked="sizeName == 's'"
                  v-model="sizeSelected" />
                <span class="menu-icon text-dark" :class="group + '-menu-icon'">{{ sizeName.toUpperCase() }}</span>{{
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
                <input type="checkbox" name="additive-type" :value="additive.name" checked="false"
                  v-model="additiveSelected" />
                <span class="menu-icon">{{ index }}</span>{{ additive.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="product-modal-total">
          <h3 class="product-modal-total-text">Total:</h3>
          <h3>${{ totalPrice }}</h3>
        </div>
        <div class="product-modal-disclaimer"></div>
        <button class="transparent-button product-modal-close-btn link-text" ref="button-modal"
          @click="closeModal">Close</button>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTemplateRef, onMounted } from 'vue';
import ProductCardImage from './ProductCardImage.vue';


const props = defineProps(['title', 'imgSrc', 'description', 'sizes', 'additives', 'price']);
//const emit = defineEmits(['close-modal-event']);

const totalPrice = ref(props.price);
const additiveSelected = ref([]);
const sizeSelected = ref('s');

const buttonModal = useTemplateRef('button-modal');
const productModal = useTemplateRef('product-modal');
const closeModalEvent = new Event('close-modal-event', { bubbles: true });


onMounted(() => {

  productModal.value.addEventListener('close-modal-event', () => {
    console.log('event lister!!!');
  })
})

const reportClose = () => {
  console.log("product modal: close reported");
}
const closeModal = () => {
  console.log("closing");
  console.log("element = " + buttonModal.value);
  buttonModal.value.dispatchEvent(closeModalEvent);
}


</script>