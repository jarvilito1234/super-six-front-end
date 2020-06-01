<template>
  <v-card flat class="transparent" dark id="reward">
    <v-window v-model="onboarding">
      <v-window-item v-for="(page, index) in pages" :key="index">
        <v-row>
          <v-col
            v-for="(reward, index) in currentRewardWeb"
            :key="index"
            cols="6"
            sm="4"
          >
            <RewardList :reward="reward" />
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
    <v-card-actions v-if="!isMobile" class="justify-center mt-12">
      <v-item-group v-model="onboarding">
        <v-item
          v-for="(page, index) in pages"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            active-class="current-page-class"
            color="gradient-button"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card-actions>
    <v-container
      v-else
      style="max-width: 80%;"
      class="primary--text text-center"
    >
      <v-btn
        block
        rounded
        x-large
        class="gradient-button primary--text mt-4 headline mb-n12"
      >
        点击提交
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { Fragment } from "vue-fragment";
import RewardList from "./RewardList";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { RewardList, Fragment },
  data() {
    return {
      onboarding: 0,
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    pages() {
      return this.rewards.length < 15 ? 1 : Math.ceil(this.rewards.length / 15);
    },

    rewards() {
      return this.$store.getters[`reward/getRewards`];
    },

    currentRewardWeb() {
      let firstRange = this.onboarding * 15;
      return this.rewards.slice(firstRange, firstRange + 15);
    },

    hotRewards() {
      return this.rewards.filter((reward) => reward.isHot);
    },
  },
};
</script>

<style scoped>
#reward >>> .current-page-class {
  color: #31fef9;
  background-color: #31fef9;
}
</style>
