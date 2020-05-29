<template>
  <v-card
    flat
    :height="isMobile ? '' : '650px'"
    :color="isMobile ? 'transparent' : 'darkCardBg'"
    class="mt-6 round-corner border-for-dark"
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
    <div class="ml-6 mr-1 my-4 right-content" v-if="!isMobile">
      <PlayersList
        v-for="(event, index) in events"
        :key="index"
        :event="event.event"
      />
    </div>

    <v-slide-group v-else>
      <v-slide-item v-for="(event, index) in events" :key="index">
        <PlayersList :event="event.event" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import PlayersList from "./PlayersList";
export default {
  components: { PlayersList },
  data() {
    return {
      events: [
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
      ],
    };
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

<style lang="scss" scoped>
.header-button-mobile {
  width: 80%;
  margin-top: -25px;
}

.right-content {
  max-height: 540px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
