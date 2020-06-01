import axios from "axios";
export default {
  namespaced: true,
  state: {
    matches: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async getAllMatches(context) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${context.rootState.auth.token}`;

      await axios
        .get(`${context.rootState.auth.backendUrl}/api/matches`)
        .then((response) => {
          console.log(response.data);
          //   context.commit('setAllMatches', {payload: response.data})
        });
    },
  },
};
