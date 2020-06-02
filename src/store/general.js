import axios from "axios";
export default {
  namespaced: true,

  state: {
    announcements: [],
    dataLoaded: false,
  },
  getters: {
    lastAnnouncement: (state) =>
      state.announcements[state.announcements.length - 1],
  },
  mutations: {
    setAnnouncement(state, payload) {
      console.log(payload);
      state.announcements = payload.payload;
      state.dataLoaded = true;
    },
  },
  actions: {
    async getAnnouncement(context, payload) {
      axios.defaults.headers.common["Authorization"] =
        context.rootGetters["auth/bearer"];

      axios
        .get(`${context.rootState.auth.backendUrl}/api/announcements`)
        .then((response) => {
          console.log(response);
          context.commit("setAnnouncement", {
            payload: response.data.data.announcements,
          });
        });
    },
  },
};
