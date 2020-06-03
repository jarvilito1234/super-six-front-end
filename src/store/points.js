import axios from "axios";
export default {
  namespaced: true,
  state: {
    points: [],
  },
  getters: {},
  mutations: {
    setDatas(state, payload) {
      console.log(payload);
    },
  },
  actions: {
    async getPoints(context) {
      if (context.rootGetters["auth/isAuth"]) {
        axios.defaults.headers.common["Authorization"] =
          context.rootGetters["auth/bearer"];

        await axios
          .get(`${context.rootState.auth.backendUrl}/api/realtime_points`)
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
