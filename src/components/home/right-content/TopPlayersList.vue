<template>
  <div>
    <v-card
      flat
      class="mr-4 mb-3 card-border"
      :class="listMobile"
      color="primary--text"
      :width="isMobile ? '250px' : ''"
    >
      <v-card-title>
        <v-container fluid class="my-n8">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <div :align="isMobile ? 'center' : ''" class="title">
                <v-icon v-show="isMobile" left>$person</v-icon
                >{{ winner.userName }}
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div :align="isMobile ? 'center' : 'right'" class="title">
                <span
                  v-show="isMobile"
                  class="coin-asset-icon mr-2 text-no-wrap"
                />{{ winner.points }}
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
  props: ["winner"],
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
