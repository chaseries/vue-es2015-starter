import "./scss/main.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home
  },
  { path: "/about", component: About
  },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");

