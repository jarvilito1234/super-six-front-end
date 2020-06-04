import axios from "axios";
export default {
  namespaced: true,
  state: {
    leaderboards: [],
  },
  getters: {},
  mutations: {
    setDatas(state, payload) {
      console.log(payload);
      state.leaderboards = payload.leaderboard;
    },
  },
  actions: {
    async getLeaderBoards(context) {
      if (context.rootGetters["auth/isAuth"]) {
        axios.defaults.headers.common["Authorization"] =
          context.rootGetters["auth/bearer"];

        await axios
          .get(`${context.rootState.auth.backendUrl}/api/leaderboard`)
          .then((response) => {
            const data = response.data.data;
            // console.log(data);
            context.commit("setDatas", data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return false;
      }
    },
  },
};
