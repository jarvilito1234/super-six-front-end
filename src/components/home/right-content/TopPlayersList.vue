<template>
  <div>
    <v-card
      flat
      class="mr-4 mb-3 card-border"
      :class="listMobile"
      color="primary--text"
      :width="isMobile ? '180pt' : ''"
    >
      <v-card-title>
        <v-container class="my-n8">
          <v-row align="center">
            <v-col cols="12" sm="12" md="6">
              <div class="title" :class="{ 'pt-3': isMobile }">
                <v-icon v-show="isMobile" left>$person</v-icon
                >{{ point.username }}
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div
                :align="isMobile ? '' : 'right'"
                class="title "
                :class="{ 'mt-n6 pb-3 ml-2': isMobile }"
              >
                <span
                  v-show="isMobile"
                  class="coin-asset-icon mr-2 text-no-wrap"
                /><span class="accent--text ml-1">{{ point.points }}</span
                >个顺币
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
      <v-divider dark v-show="!isMobile" />
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["point"],
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    listMobile() {
      if (this.isMobile) {
        return ["round-corner", "dark-gradient-bg2 border-for-dark"];
      }

      return ["transparent", "card-border"];
    },
  },
};
</script>

<style lang="scss" scoped>
.card-border {
  border-bottom: 1px solid white;
}
</style>
