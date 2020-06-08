<template>
  <div class="round-corner dark-gradient-bg2 border-for-dark mr-4 mb-3">
    <v-card
      dark
      flat
      :class="{ 'py-4': isMobile }"
      color="transparent"
      :width="isMobile ? '390px' : ''"
    >
      <v-card-title
        class="d-flex align-center"
        :class="isMobile ? 'mt-n1' : 'mt-n3'"
        ><v-icon left>$person</v-icon>{{ player.user.username }}</v-card-title
      >
      <v-card-subtitle class="ml-8">
        <div class="secondary--text">
          竞猜第184期9月4日（欧冠16强赛）
        </div>
      </v-card-subtitle>

      <v-card-text class="primary--text mb-3 pr-1 pl-2">
        <v-container fluid class="my-n8">
          <v-row no-gutters>
            <v-col col="6">
              <div class="title">
                <span class="prize-amount-icon mr-2"></span
                >{{ formatNumber(player.points) }}元
              </div>
            </v-col>
            <v-col col="6">
              <div class="title">
                <span class="coin-asset-icon mr-2 text-no-wrap" />{{
                  formatNumber(player.points_remaining)
                }}顺币
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["player"],
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },

  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
</script>

<style></style>
