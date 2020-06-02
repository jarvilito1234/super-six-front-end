import Vue from "vue";
import Vuex from "vuex";
import reward from "./reward";
import auth from "./auth";
import matches from "./matches";
import general from "./general";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    reward,
    auth,
    matches,
    general,
  },
});

export default store;
