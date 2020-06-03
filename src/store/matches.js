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
    predictions: [],
  },
  getters: {
    matches: (state) => state.matches,
    event: (state) => state.event,
    // bearer: (state, getters, rootState) => `Bearer ${rootState.auth.token}`,
    getSelectedMatch: (state) => (id) => {
      return state.predictions.filter((match) => match.id === id);
    },

    predictions: (state) => {
      let predictionCopy = state.predictions;
      let newPrediction = predictionCopy.map((prediction) => {
        // delete prediction.id;
        return prediction;
      });

      return newPrediction;
    },
  },
  mutations: {
    setDatas(state, payload) {
      // console.log(payload.);
      console.log(payload.matchData);
      state.event = payload.event;
      state.matches = payload.matchData;
      state.predictions = payload.predictions;
    },

    updatePrediction(state, payload) {
      const updatedmatches = state.predictions.map((match) => {
        if (match.id === payload.id)
          return {
            ...match,
            [payload.objectName]: payload.value,
          };
        return match;
      });

      state.predictions = updatedmatches;
    },
  },
  actions: {
    async getAllMatches(context) {
      if (context.rootGetters["auth/isAuth"]) {
        axios.defaults.headers.common["Authorization"] =
          context.rootGetters["auth/bearer"];

        await axios
          .get(`${context.rootState.auth.backendUrl}/api/matches`)
          .then(async (response) => {
            const datas = response.data.data;

            let predictions = await datas.matches.map((data) => {
              let matchKey1 = `match[${data.id}][score_1]`;
              let matchKey2 = `match[${data.id}][score_2]`;
              return { id: data.id, [matchKey1]: "", [matchKey2]: "" };
            });
            context.commit("setDatas", {
              predictions,
              event: datas.event,
              matchData: datas.matches,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("You are not log in please log in");
      }
    },

    async submitPrediction(context) {
      let predictions = context.state.predictions;
      const data = await predictions.map((prediction) => {
        let id = prediction.id;
        let match1 = `match[${id}][score_1]`;
        let match2 = `match[${id}][score_2]`;
        // delete prediction.id;
        console.log(prediction);
        return { ...prediction[match1], ...prediction[match2] };
      });

      debugger;

      const headers = {
        Authorization: context.rootGetters["auth/bearer"],
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
      axios.post(`${process.env.VUE_APP_API_ROOT_URL}/api/predictions`);
    },
  },
};
