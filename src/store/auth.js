import axios from "axios";
export default {
  namespaced: true,
  state: {
    backendUrl: "http://35.221.216.24",
    token: localStorage.getItem("token") || "",
  },

  getters: {
    isAuth: (state) => !!state.token,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async retrieveToken(context, access) {
      await axios
        .post(`${context.state.backendUrl}/api/token`, { access })
        .then((response) => {
          console.log(response);
          const token = response.data.data.token;
          localStorage.setItem("token", token);
          context.commit("setToken", token);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
