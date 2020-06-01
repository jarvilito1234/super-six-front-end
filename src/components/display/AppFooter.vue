<template>
  <v-footer v-if="$route.name !== 'Login'" padless>
    <SpeedDial v-if="!isMobile" />
    <v-btn
      v-else
      x-large
      absolute
      text
      fab
      class="back-to-top-btn"
      right
      @click="toTop"
      color="secondary"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <v-card
      flat
      tile
      width="100%"
      :height="!isMobile ? '200px' : ''"
      class="text-center primary--text d-flex align-center"
      color="#000618"
    >
      <v-container class="custom-max-width">
        <v-row>
          <v-col cols="12" md="4">
            <div
              class="primary--text d-flex justify-space-between"
              :class="textPosition"
            >
              <div class="title secondary--text">友情链接</div>
              <div class="headline"><u>顺体育</u></div>
              <div class="headline"><u>顺直播</u></div>
            </div>
          </v-col>
          <v-col cols="12" md="6" :offset="!isMobile ? '2' : ''">
            <div
              :align="!isMobile ? 'end' : ''"
              class="subtitle secondary--text"
            >
              版权所有 ©2020 Super6 保留所有权
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- <div>版权所有 ©2020 Super6 保留所有权</div> -->
    </v-card>
  </v-footer>
</template>

<script>
import SpeedDial from "./SpeedDial";
export default {
  computed: {
    getYOffset() {
      return window.pageYOffset;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    textPosition() {
      if (this.isMobile) {
        return ["flex-column"];
      }

      return [];
    },
  },

  components: { SpeedDial },

  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style scoped>
.back-to-top-btn {
  bottom: 3px;
  right: 1px;
}
</style>
