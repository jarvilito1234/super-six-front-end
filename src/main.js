import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "./assets/css/app.scss";
import MarqueeText from "vue-marquee-text-component";

Vue.config.productionTip = false;

Vue.component("marquee-text", MarqueeText);

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
