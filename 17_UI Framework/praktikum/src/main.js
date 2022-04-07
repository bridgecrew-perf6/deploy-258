import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "@/router/router";
import store from "@/store/store";

Vue.config.productionTip = false;
Vue.use(vuetify);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
