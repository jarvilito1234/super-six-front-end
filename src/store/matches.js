import axios from "axios";
export default {
  namespaced: true,
  state: {
    announcement: "",
    event: {
      category: {
        name: "",
      },
    },
    matches: [],
  },
  getters: {
    matches: (state) => state.matches,
    event: (state) => state.event,
    // bearer: (state, getters, rootState) => `Bearer ${rootState.auth.token}`,
  },
  mutations: {
    setDatas(state, payload) {
      // console.log(payload.);
      console.log(payload.matches);
      state.event = payload.event;
      state.matches = payload.matches;
    },
  },
  actions: {
    async getAllMatches(context) {
      console.log(context.rootGetters["auth/bearer"]);
      axios.defaults.headers.common["Authorization"] =
        context.rootGetters["auth/bearer"];

      await axios
        .get(`${context.rootState.auth.backendUrl}/api/matches`)
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          context.commit("setDatas", data);
        });
    },
  },
};
