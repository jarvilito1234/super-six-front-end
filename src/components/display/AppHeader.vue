<template>
  <fragment>
    <v-system-bar app class="background" height="50" color="secondary--text">
      <v-container class="custom-max-width">
        <v-row class="d-flex align-center">
          <div class="d-inline-block text-truncate" style="max-width: 600px;">
            <v-icon class="mr-2">$soundUp</v-icon>
            恭喜Lekso狂抱88,888元预测大奖！+888顺币奖励！（活动期 #0021542）
          </div>

          <v-spacer></v-spacer>
          <div class="hidden-sm-and-down">
            <v-btn rounded outlined small color="secondary" class="mr-2"
              >登入</v-btn
            >
            <v-btn rounded outlined small color="secondary" class="mr-6"
              >立即注册</v-btn
            >

            <v-icon class="mr-4">$phoneLink</v-icon>
            <v-icon>$chat</v-icon>
          </div>
        </v-row>
      </v-container>
    </v-system-bar>

    <v-app-bar
      :height="$vuetify.breakpoint.mdAndDown ? '44' : '80'"
      app
      color="transparent"
      elevate-on-scroll
    >
      <v-container class="custom-max-width">
        <v-row class="d-flex align-center">
          <img
            :height="$vuetify.breakpoint.mdAndDown ? '36' : '80'"
            :width="$vuetify.breakpoint.mdAndDown ? '51' : '115'"
            src="@/assets/img/Logo.png"
            alt="logo"
          />
          <v-spacer></v-spacer>

          <v-btn-toggle
            class="hidden-sm-and-down"
            v-model="menuActive"
            tile
            group
          >
            <v-btn
              v-for="(menu, index) in menus"
              :key="index"
              :value="menu.label"
            >
              <span
                class="primary--text"
                :class="{ 'accent--text': menuActive === menu.label }"
                >{{ menu.label }}</span
              >
            </v-btn>
          </v-btn-toggle>
          <div class="hidden-md-and-up">
            <v-btn rounded outlined medium color="secondary" class="mr-4"
              >登入</v-btn
            >
            <v-btn rounded outlined medium color="secondary" class="mr-4"
              >立即注册</v-btn
            >
            <ExpandMenu :menus="menus" />
          </div>
        </v-row>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import ExpandMenu from "./ExpandMenu";
export default {
  name: "app-header",
  components: { Fragment, ExpandMenu },
  data() {
    return {
      menus: [
        {
          label: "首页",
        },
        {
          label: "超六预测",
        },
        {
          label: "顺币兑换",
        },
        {
          label: "赛事直播",
        },
        {
          label: "体育新闻",
        },
        {
          label: "我的战绩史",
        },
      ],

      menuActive: "首页",
    };
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-color: #101a25 !important;
}

.app-bar {
  margin-top: 50px !important;
}
</style>
