<template>
  <fragment>
    <img
      class="campaign ml-1"
      width="100%"
      :height="$vuetify.breakpoint.name === 'xs' ? '120' : '266'"
      src="../../../assets/img/web_campaign.png"
    />
    <div class="divider my-n7" align="center">
      <v-icon
        :class="
          $vuetify.breakpoint.name === 'xs'
            ? 'icon-divider-mobile'
            : 'icon-divider'
        "
        >$arrowDown</v-icon
      >
    </div>
    <v-card class="mt-4 betting-list round-corner border-for-dark">
      <TimeMatch />
      <v-divider class="border-for-dark-divider"></v-divider>
      <MatchLists />
    </v-card>
    <v-container
      :style="isMobile ? 'max-width: 80%;' : 'max-width: 60%;'"
      class="primary--text text-center"
    >
      <v-btn
        block
        rounded
        x-large
        class="gradient-button primary--text mt-4 headline"
        :class="{ 'submit-btn': !isMobile }"
      >
        点击提交
      </v-btn>
    </v-container>
    <div v-show="!isMobile" class="mt-4 text-no-wrap text-center primary--text">
      * 一旦提交将不可更改 * 赛果以全场分数为准 * 中奖后3天未领取则视为放弃
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import TimeMatch from "./TimeMatch";
import MatchLists from "./MatchLists";
export default {
  components: { Fragment, TimeMatch, MatchLists },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped lang="scss">
.campaign {
  margin-left: -10px;
}
.divider {
  //   width: 100%;
  position: inherit;

  .icon-divider {
    z-index: 1;
    height: 50pt;
    width: 50pt;
  }

  .icon-divider-mobile {
    z-index: 1;
    height: 23pt;
    width: 23pt;
    margin-top: 13px;
  }
}

.submit-btn {
  height: 80px !important;
}
</style>
