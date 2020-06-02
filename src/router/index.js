import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/rewards",
    name: "Rewards",
    component: () => import("../views/Rewards.vue"),
  },

  {
    path: "/player-center",
    name: "Player-center",
    component: () => import("../views/player-center/Home.vue"),
    children: [
      {
        path: "/",
        name: "Player-center",
        component: () => import("@/components/display/player-center/Index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.query.access && !store.getters["auth/isAuth"])
    window.location = `${store.state.auth.backendUrl}/login?redirect_url=http://localhost:8080`;
  // next({
  //   path: `${store.state.auth.backendUrl}/login?redirect_url=http://localhost:8080`,
  // });
  else next();
});

export default router;
