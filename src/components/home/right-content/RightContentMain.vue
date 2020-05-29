<template>
  <v-card color="transparent" flat>
    <v-container :class="headerButton">
      <v-btn
        large
        :x-large="isMobile ? true : false"
        block
        class="dark-gradient-bg border-for-dark"
        rounded
        ><span
          class="secondary--text"
          :class="{ 'button-text-left': !isMobile }"
          ><v-icon class="mr-2">$assignment</v-icon>活动条款规则 </span
        ><v-icon v-show="!isMobile" right class="icon-right"
          >$arrowRight</v-icon
        ></v-btn
      >
    </v-container>
    <Players />
    <div class="mx-4"></div>
    <TopPlayers />
  </v-card>
</template>

<script>
import Players from "./Players";
import TopPlayers from "./TopPlayers";
export default {
  components: { Players, TopPlayers },
  data() {
    return {};
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    headerButton() {
      return this.isMobile ? "header-button-mobile" : "";
    },
  },
};
</script>

<style scoped>
.button-text-left {
  position: absolute;
  left: 0;
  font-size: 20px;
}

.header-button-mobile {
  width: 80%;
  margin-top: -25px;
}

.icon-right {
  position: absolute;
  right: 0;
}
</style>
