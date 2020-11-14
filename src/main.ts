import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//TODO: Create a separete file and import only the necesary components....
import * as ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/en'


import { ValidationProvider, extend } from 'vee-validate';

import moment from 'moment';

//TODO: Add locate.

Vue.config.productionTip = false;


Vue.use(ElementUI, { locale });
Vue.component('ValidationProvider', ValidationProvider);

Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
