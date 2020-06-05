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
    <v-card-title class="mt-n4">
      <v-btn block large rounded class="dark-gradient-bg primary--text title">
        <span class="button-text-left">昵称</span>
        <span class="button-text-right">获得顺币</span>
      </v-btn>
    </v-card-title>
    <div class="mx-4 mb-4 right-content" v-if="!isMobile">
      <TopPlayersList
        v-for="(point, index) in points"
        :key="index"
        :point="point"
      />
    </div>

    <v-slide-group v-else>
      <v-slide-item v-for="(point, index) in points" :key="index">
        <TopPlayersList :point="point" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import TopPlayersList from "./TopPlayersList";
export default {
  components: { TopPlayersList },
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    points() {
      return this.$store.state.realtimePoints.points;
    },
  },

  created() {
    this.$store.dispatch("realtimePoints/getRealtimePoints");
  },
};
</script>

<style lang="scss" scoped>
.button-text-left {
  position: absolute;
  left: 10px;
}
.button-text-right {
  position: absolute;
  right: 30px;
}
.right-content {
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
