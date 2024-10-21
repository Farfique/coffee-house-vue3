<template>
 <header class="main-header">
  <RouterLink class="main-logo-link" to="/">
   <div class="logo"></div>
  </RouterLink>
  <input id="menu__toggle" type="checkbox" v-model="menuToggle"/>
  <label id="menu-btn" for="menu__toggle">
  </label>
  <nav class="navigation">
   <div class="nav-container">
    <ul class="nav-container-ul link-text">
     <li class="menu-item" @click="closeMenu"><RouterLink class="menu-item-link text-dark" :to="{path: '/', hash: '#favorite-coffee'}">Favorite coffee</RouterLink></li>
     <li class="menu-item" @click="closeMenu"><RouterLink class="menu-item-link text-dark" :to="{path: '/', hash: '#about'}">About</RouterLink></li>
     <li class="menu-item" @click="closeMenu"><RouterLink class="menu-item-link text-dark" :to="{path: '/', hash: '#mobile-app'}">Mobile app</RouterLink></li>
     <li class="menu-item" @click="closeMenu"><RouterLink class="menu-item-link text-dark" :to="{path: '/', hash: '#contacts'}">Contact us</RouterLink></li>
    </ul>
   </div>
  </nav>
  <div class="header-menu-container">
   <div class="header-menu-container-inside">
    <div class="header-menu link-text">
     <RouterLink class="menu-item-link text-dark" to="/menu">Menu</RouterLink>
    </div>
    <div class="header-menu-icon"></div>
   </div>

  </div>

 </header>
</template>
<script setup>
import { ref } from 'vue';
const menuToggle = ref(false);

const closeMenu = () => {
 menuToggle.value = false;
}

</script>