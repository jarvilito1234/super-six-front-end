<template>
  <v-container class="custom-max-width fill-main">
    <div class="text-center">
      <v-img
        max-width="100%"
        src="../assets/img/super6_web_rewards_banner.png"
      ></v-img>
    </div>

    <v-row>
      <v-col cols="12" md="8">
        <RewardMainContent />
      </v-col>
      <v-col cols="12" md="4">
        <Popular />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Popular from "@/components/rewards/Popular";
import RewardMainContent from "@/components/rewards/RewardMainContent";
export default {
  components: { RewardMainContent, Popular },
  created() {
    this.$store.dispatch("rewards/getRewards");
  },
};
</script>

<style scoped></style>
