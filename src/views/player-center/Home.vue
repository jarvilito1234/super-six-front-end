<template>
  <fragment>
    <AppHeader />
    <div class="d-flex">
      <Drawer />
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
};
</script>

<style></style>
