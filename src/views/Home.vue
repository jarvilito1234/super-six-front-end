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
          <MainContent />
        </div>
      </v-container>
    </div>
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
  mounted: function() {
    console.log(this.$vuetify.breakpoint);
  },
  components: { MainContent },
};
</script>

<style lang="scss" scoped>
@mixin heroPosition {
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.home {
  margin-top: -80px;
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
  margin-top: 250px;
  .banner-text-mobile {
    max-width: 60vw;
  }
}

@media only screen and (max-width: 800px) {
  .banner-text {
    margin-top: 107px;
  }

  .hero {
    background-image: url("../assets/img/super6_mobile_home_mainbanner_bg.jpg");
    height: 375px;
  }

  .button-size {
    margin: 15px 0px 60px 0px;
    width: 80px;
    height: 35px !important;
    font-size: 15px;
  }

  .home {
    margin-top: -44px;
  }
}
</style>
