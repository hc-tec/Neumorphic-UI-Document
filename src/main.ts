import Vue from 'vue';
import App from './App.vue';
import router from './router';
import neumorphic from 'neumorphic-ui-vue';
import VueHighLight from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-light.css';


Vue.use(neumorphic);
Vue.use(VueHighLight);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
