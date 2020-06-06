import axios from "axios";
export default {
  namespaced: true,

  state: {
    isLoading: true,
    points: [],
  },
  getters: {},
  mutations: {
    setRealtimePoints(state, payload) {
      state.points = payload;
      state.isLoading = false;
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
