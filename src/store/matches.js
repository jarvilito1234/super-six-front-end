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
      console.log(payload.matchData);
      state.event = payload.event;
      state.matches = payload.matches;
    },
  },
  actions: {
    async getAllMatches(context) {
      if (context.rootGetters["auth/isAuth"]) {
        axios.defaults.headers.common["Authorization"] =
          context.rootGetters["auth/bearer"];

        await axios
          .get(`${context.rootState.auth.backendUrl}/api/matches`)
          .then((response) => {
            const datas = response.data.data;

            let matchData = datas.map((data) => {
              let matchKey1 = `match[${data.id}][match1]`;
              let matchKey2 = `match[${data.id}][match2]`;
              return { ...data, [matchKey1]: "", [matchKey2]: "" };
            });
            // console.log(data);
            context.commit("setDatas", matchData);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("You are not log in please log in");
      }
    },
  },
};
