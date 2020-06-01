<template>
  <v-card
    color="transparent"
    flat
    :class="{ 'd-flex flex-column-reverse': isMobile }"
  >
    <v-card
      id="popular-list"
      flat
      :height="isMobile ? '' : '857px'"
      :color="isMobile ? 'transparent' : 'darkCardBg'"
      class="mt-6 round-corner border-for-dark"
    >
      <v-card-title class="title primary--text">
        <v-icon left class="fire">$hot</v-icon>人气商品
      </v-card-title>
      <div class="ml-6 mr-1 my-4 right-content" v-if="!isMobile">
        <PopularList
          v-for="(reward, index) in getHotRewards"
          :key="index"
          :reward="reward"
        />
      </div>

      <v-slide-group v-else>
        <v-slide-item v-for="(reward, index) in getHotRewards" :key="index">
          <PopularList :reward="reward" />
        </v-slide-item>
      </v-slide-group>
    </v-card>
    <v-container :style="isMobile ? 'max-width: 80%;' : ''">
      <v-btn
        large
        :x-large="isMobile ? true : false"
        block
        class="dark-gradient-bg border-for-dark mt-6"
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

      <v-btn
        large
        :x-large="isMobile ? true : false"
        block
        class="dark-gradient-bg border-for-dark mt-6"
        rounded
        @click="termDialog = true"
        ><span
          class="secondary--text"
          :class="{ 'button-text-left': !isMobile }"
          ><v-icon class="mr-2">$link</v-icon>顺币条款规则 </span
        ><v-icon v-show="!isMobile" right class="icon-right"
          >$arrowRight</v-icon
        ></v-btn
      >
    </v-container>
  </v-card>
</template>

<script>
import { Fragment } from "vue-fragment";
import PopularList from "./PopularList";
export default {
  components: { PopularList, Fragment },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    getHotRewards() {
      return this.$store.getters["reward/getHotRewards"];
    },
  },
};
</script>

<style scoped>
#popular-list >>> .a {
  fill: #aabbd0 !important;
}

.right-content {
  max-height: 750px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.icon-right {
  position: absolute;
  right: 0;
}
</style>
