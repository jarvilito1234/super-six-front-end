<template>
  <v-card color="transparent" flat>
    <v-container :class="headerButton">
      <v-btn
        large
        :x-large="isMobile ? true : false"
        block
        class="dark-gradient-bg border-for-dark"
        rounded
        @click="termDialog = true"
        ><span
          class="secondary--text"
          :class="{ 'button-text-left': !isMobile }"
          ><v-icon class="mr-2">$assignment</v-icon>活动条款规则 </span
        ><v-icon v-show="!isMobile" right class="icon-right"
          >$arrowRight</v-icon
        ></v-btn
      >
      <v-dialog width="600px" v-model="termDialog" scrollable>
        <Dialog
          @closeDialog="termDialog = false"
          :type="'Terms'"
          :title="'顺超六竞猜活动'"
        />
      </v-dialog>
    </v-container>
    <Players />
    <div class="mx-4"></div>
    <TopPlayers />
    <div class="mx-4"></div>
    <!-- <Headlines /> -->
  </v-card>
</template>

<script>
import Players from "./Players";
import TopPlayers from "./TopPlayers";
import Headlines from "./Headlines";
import Dialog from "../../dialogs/Dialog";
export default {
  components: { Players, TopPlayers, Headlines, Dialog },
  data() {
    return {
      termDialog: false,
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    headerButton() {
      return this.isMobile ? "header-button-mobile" : "px-0";
    },
  },

  created() {
    this.$store.dispatch("leaderboards/getLeaderBoards");
  },
};
</script>

<style scoped>
.icon-right {
  position: absolute;
  right: 0;
}
</style>
