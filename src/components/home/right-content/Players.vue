<template>
  <v-card
    flat
    :height="isMobile ? '' : '650px'"
    :color="isMobile ? 'transparent' : 'darkCardBg'"
    class="mt-0 round-corner border-for-dark"
  >
    <v-card-title class="title primary--text"
      ><v-icon left>$trophy</v-icon>本月竞猜大主 <v-spacer></v-spacer
      ><span class="prize-amount-icon mr-2" /><span class="body-2 mr-2"
        >获奖金额</span
      >
      <span class="coin-asset-icon mr-2" /><span class="body-2"
        >顺币资产</span
      ></v-card-title
    >
    <div class="ml-6 mr-1 mb-2 right-content" v-if="!isMobile">
      <PlayersList
        v-for="(player, index) in players"
        :key="index"
        :player="player"
      />
    </div>

    <v-slide-group v-else>
      <v-slide-item v-for="(player, index) in players" :key="index">
        <PlayersList :player="player" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import PlayersList from "./PlayersList";
export default {
  components: { PlayersList },
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

    players() {
      return this.$store.state.leaderboards.leaderboards;
    },
  },

  created() {
    // this.$store.dispatch("leaderboards/getLeaderBoards");
  },
};
</script>

<style lang="scss" scoped>
.header-button-mobile {
  width: 80%;
  margin-top: -25px;
}

.right-content {
  max-height: 560px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
