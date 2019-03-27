import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.component('headertop', require("./components/header.vue").default);
Vue.component('footerbottom', require("./components/footer.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
