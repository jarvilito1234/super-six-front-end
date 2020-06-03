import axios from "axios";
export default {
  namespaced: true,
  state: {
    backendUrl: "http://api.diablo88.org",
    token: localStorage.getItem("token") || "",
  },

  getters: {
    isAuth: (state) => !!state.token,
    bearer: (state) => `Bearer ${state.token}`,
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
          window.location = `${store.state.auth.backendUrl}/login?redirect_url=http://localhost:8080`;
        });
    },
  },
};

// http://35.221.216.24/login?redirect_url=http://localhost:8080
