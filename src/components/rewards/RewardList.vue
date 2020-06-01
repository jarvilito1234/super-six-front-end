<template>
  <v-card
    flat
    :height="isMobile ? '198pt' : '302px'"
    class="round-corner primary reward-linear-gradient"
    elevation="24"
  >
    <div align="center" :class="{ 'pt-4': !isMobile }" class="mx-2">
      <v-icon v-if="reward.isHot" class="hot-icon">$hot</v-icon>
      <v-img
        :src="reward.imageUrl"
        height="180px"
        width="230px"
        contain
      ></v-img>
    </div>

    <v-card-subtitle class="primary--text" :class="{ 'mt-n6': isMobile }"
      >腾讯Q币20元</v-card-subtitle
    >
    <v-card-text class="mt-n5">
      <div class="d-flex justify-space-between align-center primary--text">
        <div>
          <span class="accent--text" :class="pointsText">{{
            reward.points
          }}</span>
          顺币
        </div>
        <v-btn icon class="gradient-button primary--text button-size">
          <v-icon>mdi-plus</v-icon></v-btn
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["reward"],

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    pointsText() {
      if (this.isMobile) {
        return ["title", "mr-0"];
      }
      return ["headline", "mr-2"];
    },
  },
};
</script>

<style scoped>
.button-size {
  height: 60px;
  width: 60px;
}

.hot-icon {
  height: 30px;
  width: 30px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

@media only screen and (max-width: 460px) {
  .button-size {
    height: 52px;
    width: 52px;
  }
}
</style>
