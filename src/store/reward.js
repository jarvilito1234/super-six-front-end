import axios from "axios";
export default {
  namespaced: true,
  state: {
    rewards: [],
  },

  getters: {
    getRewards(state) {
      return state.rewards;
    },

    getHotRewards(state) {
      return state.rewards.filter((reward) => reward.isHot);
    },
  },

  mutations: {
    setRewards(state, payload) {
      state.rewards = payload.rewards;
    },
  },
  actions: {
    async getRewards(context) {
      axios.defaults.headers.common["Authorization"] =
        context.rootGetters["auth/bearer"];

      await axios
        .get(`${process.env.VUE_APP_API_ROOT_URL}/api/rewards`)
        .then((response) => {
          console.log(response);
          context.commit("setRewards", {
            rewards: response.data.data.rewards,
          });
        });
    },
  },
};
