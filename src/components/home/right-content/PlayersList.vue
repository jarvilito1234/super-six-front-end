<template>
  <v-card
    class="round-corner dark-gradient-bg2 border-for-dark mr-4 mb-3"
    color="primary--text"
    :width="isMobile ? '390px' : ''"
  >
    <v-card-title><v-icon left>$person</v-icon>Skdkd11</v-card-title>
    <v-card-subtitle class="ml-8">
      <div class="secondary--text">
        竞猜第184期9月4日（欧冠16强赛）
      </div>
    </v-card-subtitle>

    <v-card-text class="primary--text mb-3">
      <v-container fluid class="my-n8">
        <v-row>
          <v-col col="6">
            <div class="title">
              <span class="prize-amount-icon mr-2"></span>128,888元
            </div>
          </v-col>
          <v-col col="6">
            <div class="title">
              <span class="coin-asset-icon mr-2 text-no-wrap" />12,017顺币
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style></style>
