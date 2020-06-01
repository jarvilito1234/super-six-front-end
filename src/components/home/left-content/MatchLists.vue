<template>
  <v-container :class="container" class="matches-linear-gradient">
    <!-- <v-row>
      <v-col cols="12" align="center" class="body-1 secondary--text"
        >猜全场</v-col
      >
    </v-row> -->
    <v-row>
      <v-col cols="5">
        <div class="d-flex align-center justify-space-around mt-12">
          <div class="primary--text">
            <div class="score  font-weight-thin">
              2
            </div>

            <div v-show="isMobile" class="body-1 mt-4" align="center">
              <v-icon>$tv</v-icon>
            </div>
          </div>

          <div class="primary--text team-name hidden-sm-and-down">
            （主）巴塞罗那
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div class="mr-n4 d-flex align-center">
            <div class="primary--text">
              <img
                class="team-img mb-3"
                src="../../../assets/img/fc_barcelona.png"
                alt=""
              />
              <div v-show="isMobile" class="text-no-wrap ml-n2" align="center">
                (主) 巴塞罗那
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="mx-0">
        <div
          class="center-text d-flex align-center justify-space-between flex-column"
        >
          <div class="body-1 secondary--text text-center text-no-wrap">
            猜全场
          </div>
          <div class="body-1 secondary--text text-center">vs</div>
          <div v-show="!isMobile" class="body-1 secondary--text text-center ">
            <u>分析专家</u>
          </div>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="d-flex align-center justify-space-around mt-12">
          <div class=" primary--text">
            <img
              class="team-img mb-3"
              :class="{ 'ml-6': isMobile }"
              src="../../../assets/img/real_madrid.png"
              alt=""
            />
            <div v-show="isMobile" class="text-no-wrap" align="center">
              (主) 巴塞罗那
            </div>
          </div>
          <div class="primary--text team-name mx-0 hidden-sm-and-down">
            皇家马德里（客）
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div class="primary--text">
            <div class="score  font-weight-thin">
              0
            </div>
            <div v-show="isMobile" class="body-1 mt-4" align="center">
              <v-icon>$tv</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-show="isMobile"
        cols="12"
        align="center"
        class="body-1 secondary--text"
        ><u>分析专家</u></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  
  computed: {
    container() {
      return this.$vuetify.breakpoint.smAndDown
        ? "container-mobile"
        : "container-web";
    },

    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 30px;
  border: 1px solid #28374e;
}

.container-web {
  height: 242px;
}

.container-mobile {
  height: 186pt;
}

.center-text {
  height: 100%;
}

.team-name {
  text-align: center;
}

//mobile

@media only screen and (max-width: 955px) {
  .score {
    height: 50pt;
    width: 50pt;
  }
  .team-img {
    height: 66px;
    width: 66px;
  }
  .center-text {
    height: 60%;
  }
}
</style>
