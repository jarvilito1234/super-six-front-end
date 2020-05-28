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
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import TimeMatch from "./TimeMatch";
import MatchLists from "./MatchLists";
export default {
  components: { Fragment, TimeMatch, MatchLists },
};
</script>

<style scope lang="scss">
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
</style>
