import Vue from "vue";
import Vuex from "vuex";
import reward from "./reward";
import auth from "./auth";
import matches from "./matches";
import general from "./general";
import leaderboards from "./leaderboards";
import points from "./points";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    reward,
    auth,
    matches,
    general,
    leaderboards,
    points,
  },
});

export default store;
