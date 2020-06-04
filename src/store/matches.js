import axios from "axios";
import qs from "qs";
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

    isPredicted: (state) =>
      state.matches.some(
        (match) =>
          match.prediction_score_1 != "" || match.prediction_score_2 != ""
      ),

    predictions: (state) => {
      let predictionCopy = Object.assign(state.predictions);
      let newPrediction = predictionCopy.map((prediction) => {
        return prediction;
      });

      return predictionCopy;
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
      let predictions = [...context.getters.predictions];
      let removeidPredictions = predictions.map((prediction) => {
        delete prediction.id;
        return prediction;
      });

      // const data = await removeidPredictions.reduce(
      //   (acc, val) => [
      //     ...acc,
      //     ...Object.entries(val).map(([k, v]) => ({ [k]: v })),
      //   ],
      //   []
      // );

      let newData = {};

      const data = await removeidPredictions.map((prediction) => {
        let pred = prediction;
        Object.entries(prediction).map((key, value) => {
          // let pString = JSON.stringify(p);
          newData[key] = value;
        });
      });
      // const data = {
      //   "match[7][score_1]": "2",
      //   "match[7][score_2]": "2",
      //   "match[8][score_1]": "2",
      //   "match[8][score_2]": "2",
      //   "match[9][score_1]": "2",
      //   "match[9][score_2]": "2",
      //   "match[10][score_1]": "2",
      //   "match[10][score_2]": "2",
      //   "match[11][score_1]": "2",
      //   "match[11][score_2]": "2",
      //   "match[12][score_1]": "2",
      //   "match[12][score_2]": "2",
      // };

      const headers = {
        Authorization: context.rootGetters["auth/bearer"],
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      };
      axios.post(
        `${process.env.VUE_APP_API_ROOT_URL}/api/predictions`,
        qs.stringify(newData),
        headers
      );
    },
  },
};
