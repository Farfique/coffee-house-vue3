<template>
 <header class="main-header">
  <RouterLink class="main-logo-link" to="/">
   <div class="logo"></div>
  </RouterLink>
  <input id="menu__toggle" type="checkbox" />
  <label id="menu-btn" for="menu__toggle">
  </label>
  <nav class="navigation">
   <div class="nav-container">
    <ul class="nav-container-ul link-text">
     <li class="menu-item"><a class="menu-item-link text-dark" href="#favorite-coffee">Favorite coffee</a></li>
     <li class="menu-item"><a class="menu-item-link text-dark" href="#about">About</a></li>
     <li class="menu-item"><a class="menu-item-link text-dark" href="#mobile-app">Mobile app</a></li>
     <li class="menu-item"><a class="menu-item-link text-dark" href="#contacts">Contact us</a></li>
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
<script>

import { defineComponent } from 'vue';


export default defineComponent({
 name: 'Navigation'
});

</script>