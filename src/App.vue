<template>
  <div class="all-content">
    <Navigation></Navigation>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import Footer from './templates/components/Footer.vue';
import Navigation from './templates/components/Navigation.vue';



export default defineComponent({
  name: 'App',
  components: { Footer, Navigation }
});

</script>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  color: red;
}
</style>