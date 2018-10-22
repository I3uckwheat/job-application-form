import "@babel/polyfill";
import Vue from "vue";

import "./plugins/vuetify";
import "./plugins/vueLodash";
import "./plugins/moment";

import App from "./App.vue";
import router from "./router";
import store from "./store/store";

// import VueSweetalert2 from "vue-sweetalert2";
// import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

// Vue.use(VueMomentJS, moment);
// Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
