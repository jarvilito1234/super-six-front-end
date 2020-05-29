<template>
  <v-app>
    <AppHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "./components/display/AppHeader";
import AppFooter from "./components/display/AppFooter";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>
