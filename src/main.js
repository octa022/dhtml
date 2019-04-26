import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragResize from 'vue-drag-resize'
import VuePrism from 'vue-prism'
import draggable from 'vuedraggable'
import VeeValidate, { Validator } from 'vee-validate';
import messages from 'vee-validate/dist/locale/es';

Validator.localize('es', messages);
Vue.use(VeeValidate,{locale:"es"});

Vue.use(draggable)
Vue.use(VueAxios, axios)
Vue.use(VuePrism)
  import 'prismjs/themes/prism.css'  //Carga el css generico
  import 'prismjs/themes/prism-okaidia.css' // Carga el tema Negro
  import 'prismjs/components/prism-bash.js' // Carga el tema para los Comandos de Consola
  import 'prismjs/components/prism-markup.js' // Carga el css para el lenguaje de marcas 

Vue.component('vue-drag-resize', VueDragResize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
