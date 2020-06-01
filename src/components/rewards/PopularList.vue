<template>
  <fragment>
    <v-card
      class="round-corner dark-gradient-bg2 border-for-dark mr-4 mb-3"
      color="primary--text"
      :width="isMobile ? '390px' : ''"
      height="144px"
    >
      <v-container>
        <v-row class="mt-n3">
          <v-col cols="5">
            <v-img
              class="round-corner"
              height="120px"
              :src="reward.imageUrl"
            ></v-img>
          </v-col>
          <v-col cols="7" class="d-flex flex-column justify-center">
            <div>腾讯Q币20元</div>
            <div>
              <span class="accent--text">{{ reward.points }}</span
              >顺币
            </div>
            <div>兑换人数：842</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  props: ["reward"],
  components: { Fragment },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style></style>
