import Vue from 'vue'
import App from './App.vue'
// import HeaderBar from './components/HeaderBar.vue'
import { ResizeController } from './components/ResizeController';
import { ScrollController } from './components/ScrollController';

Vue.config.productionTip = false;
Vue.config.runtimeCompiler = true;

new Vue({
  render: h => h(App),
}).$mount('#app');

let Scroller = ScrollController;
Scroller.$mount("#scroller");

let Resizer = ResizeController;
Resizer.$mount("#sizer");
