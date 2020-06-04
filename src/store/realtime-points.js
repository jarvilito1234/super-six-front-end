import axios from "axios";
export default {
  namespaced: true,
  state: {
    points: [],
  },
  getters: {},
  mutations: {
    setRealtimePoints(state, payload) {
      state.points = payload;
    },
  },
  actions: {
    async getRealtimePoints(context) {
      // axios.defaults.headers.common["Authorization"] =
      //   context.rootGetters["auth/bearer"];

      await axios
        .get(`${process.env.VUE_APP_API_ROOT_URL}/api/realtime_points`)
        .then((response) => {
          let userPoints = response.data.data.user_points;
          context.commit("setRealtimePoints", userPoints);
        });
    },
  },
};
