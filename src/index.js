import './index.css';
import { router } from "./js/router";

import { createApp } from "vue";
import App from './App.vue'     //Our .vue startup file

//Will mount the vue app inside a HTML element which id equals to "app" (div into templetes/index.html file)
createApp(App).use(router).mount('#app');