<template>
  <fragment>
    <AppHeader />
    <div class="d-flex">
      <Drawer v-if="!isMobile" />
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import AppHeader from "@/components/display/player-center/AppHeader";
import Drawer from "@/components/display/player-center/Drawer";
export default {
  components: { AppHeader, Fragment, Drawer },
  mounted() {
    console.log(this.$route.name);
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style></style>
