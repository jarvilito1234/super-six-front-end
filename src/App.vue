<template>
  <v-app>
    <AppHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/display/AppHeader";

export default {
  name: "App",

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
