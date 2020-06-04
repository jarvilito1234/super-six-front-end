import axios from "axios";
export default {
  namespaced: true,

  state: {
    announcements: [],
    dataLoaded: false,
    menus: [
      {
        label: "首页",
        link: "/",
      },
      {
        label: "超六预测",
        link: "/w",
      },
      {
        label: "顺币兑换",
        link: "rewards",
      },
      {
        label: "赛事直播",
        link: "/e",
      },
      {
        label: "体育新闻",
        link: "/s",
      },
      {
        label: "我的战绩史",
        link: "/player-center",
      },
    ],
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
      if (context.rootGetters["auth/isAuth"]) {
        axios.defaults.headers.common["Authorization"] =
          context.rootGetters["auth/bearer"];

        axios
          .get(`${context.rootState.auth.backendUrl}/api/announcements`)
          .then((response) => {
            console.log(response);
            context.commit("setAnnouncement", {
              payload: response.data.data.announcements,
            });
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
