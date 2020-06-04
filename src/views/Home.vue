<template>
  <div class="home">
    <div class="hero">
      <v-container class="custom-max-width">
        <div class="banner-text">
          <v-row class="ml-6 mr-12">
            <img
              class="banner-text-img hidden-sm-and-down"
              src="../assets/img/super6_web_home_mainbanner_text.png"
            />

            <img
              class="banner-text-mobile hidden-md-and-up "
              src="../assets/img/super6_mobile_home_mainbanner_text.png"
            />
          </v-row>
          <v-row class="ml-6">
            <v-btn
              class="gradient-button button-radius button-size primary--text"
              >立即注册</v-btn
            >
          </v-row>
        </div>
      </v-container>
    </div>
    <v-container class="custom-max-width main-content">
      <MainContent />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import MainContent from "@/components/home/MainContent";

export default {
  name: "Home",
  computed: {
    hero() {
      return this.$vuetify.breakpoint.smAndDown ? "hero-mobile" : "hero-web";
    },
  },
  async created() {
    if (this.$route.query.access && !this.$store.getters["auth/isAuth"]) {
      await this.$store.dispatch("auth/retrieveToken", {
        access: this.$route.query.access,
      });

      this.$router.replace("/");

      await this.$store.dispatch("matches/getAllMatches");
      await this.$store.dispatch("leaderboards/getLeaderBoards");
      await this.$store.dispatch("matches/getAllMatches");
      await this.$store.dispatch("realtimePoints/getRealtimePoints");
    }
  },
  components: { MainContent },

  methods: {},
};
</script>

<style lang="scss" scoped>
@mixin heroPosition {
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.button-size {
  margin: 50px 0;
  max-width: 220px;
  width: 100%;
  font-size: 22px;
  height: 60px !important;
  font-weight: bolder;
}

.hero {
  background-image: url("../assets/img/super6_web_home_mainbanner_bg.jpg");
  height: 800px;

  @include heroPosition();
}

.banner-text {
  margin-top: 230px;
  .banner-text-mobile {
    max-width: 60vw;
  }
}

.main-content {
  margin-top: -200px;
}

@media only screen and (max-width: 800px) {
  .banner-text {
    margin-top: 107px;
  }

  .hero {
    background-image: url("../assets/img/super6_mobile_home_mainbanner_bg.jpg");
    height: 375px;
  }

  .main-content {
    margin-top: -90px;
  }

  .button-size {
    margin: 15px 0px 60px 0px;
    width: 80px;
    height: 35px !important;
    font-size: 15px;
  }

  // .home {
  //   // margin-top: -44px;
  // }
}
</style>
