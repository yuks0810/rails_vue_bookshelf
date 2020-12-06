import Vue from "vue";
import App from "./App.vue";
import Router from "../router/router.js";
import Store from "../store/store.js";
import VueSwal from "vue-swal";

Vue.use(VueSwal);

window.onload = function() {
  const app = new Vue({
    el: "#app",
    router: Router,
    store: Store,
    render: (h) => h(App),
  });
};
