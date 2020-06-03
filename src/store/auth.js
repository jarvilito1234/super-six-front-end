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

    logOut(state) {
      state.token = "";
      localStorage.removeItem("token");
      window.location = `${process.env.VUE_APP_API_ROOT_URL}/logout?redirect_url=${process.env.VUE_APP_ROOT_URL}`;
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
          window.location = `${context.state.backendUrl}/login?redirect_url=${process.env.VUE_APP_ROOT_URL}`;
        });
    },
  },
};

// http://35.221.216.24/login?redirect_url=http://localhost:8080
