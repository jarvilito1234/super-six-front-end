import Vue from "vue";
import Vuex from "vuex";
import reward from "./reward";
import auth from "./auth";
import matches from "./matches";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    reward,
    auth,
    matches,
  },
});

export default store;
