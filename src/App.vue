<template>
  <v-app>
    <AppHeader v-if="$route.name !== 'Player-center'" />
    <div class="fill-top-margin"></div>
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter v-if="$route.name !== 'Player-center'" />
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
