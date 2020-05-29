<template>
  <v-card
    flat
    :height="isMobile ? '' : '650px'"
    :color="isMobile ? 'transparent' : 'darkCardBg'"
    class="mt-6 round-corner border-for-dark"
  >
    <v-card-title class="title primary--text"
      ><v-icon left>$link</v-icon>顺币实时榜</v-card-title
    >
    <div class="mx-4 mb-4 right-content" v-if="!isMobile">
      <v-container>
        <v-btn block rounded class="dark-gradient-bg primary--text title">
          <span class="button-text-left">昵称</span>
          <span class="button-text-right">获得顺币</span>
        </v-btn>
      </v-container>

      <TopPlayersList
        v-for="(winner, index) in winners"
        :key="index"
        :winner="winner"
      />
    </div>

    <v-slide-group v-else>
      <v-slide-item v-for="(winner, index) in winners" :key="index">
        <TopPlayersList :winner="winner" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import TopPlayersList from "./TopPlayersList";
export default {
  components: { TopPlayersList },
  data() {
    return {
      winners: [
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
        {
          userName: "aerter1979",
          points: "100个顺币",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
.button-text-left {
  position: absolute;
  left: 0;
}
.button-text-right {
  position: absolute;
  right: 34px;
}
.right-content {
  max-height: 540px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
