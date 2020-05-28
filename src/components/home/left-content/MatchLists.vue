<template>
  <v-container
    :style="container"
    class="matches-linear-gradient d-flex align-center"
  >
    <!-- <v-row>
      <v-col cols="12" align="center" class="body-1 secondary--text"
        >猜全场</v-col
      >
    </v-row> -->
    <v-row>
      <v-col cols="5">
        <div class="d-flex align-center justify-center">
          <div class="score primary--text font-weight-thin">
            2
          </div>
          <div class="primary--text team-name hidden-sm-and-down">
            （主）巴塞罗那
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div class="mr-n4">
            <img
              height="50"
              width="50"
              src="../../../assets/img/fc_barcelona.png"
              alt=""
            />
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="mx-0">
        <div
          class="center-text d-flex align-center justify-space-between flex-column mt-n4"
        >
          <div class="body-1 secondary--text text-center ">猜全场</div>
          <div class="body-1 secondary--text text-center">vs</div>
          <div class="body-1 secondary--text text-center "><u>分析专家</u></div>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="d-flex align-center justify-end">
          <div class="ml-n5">
            <img src="../../../assets/img/real_madrid.png" alt="" />
          </div>
          <div class="primary--text team-name mx-4 hidden-sm-and-down">
            曼联（客）
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div class="score primary--text font-weight-thin">
            0
          </div>
        </div>
      </v-col>
      <!-- <v-col cols="12">
        <v-row justify="space-around" align="center">
          <div class="score primary--text font-weight-thin">
            2
          </div>
          <div class="primary--text team-name">
            （主）巴塞罗那
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div>
            <img src="../../../assets/img/fc_barcelona.png" alt="" />
          </div>
          <div>
            <span class="primary--text">vs</span>
          </div>
          <div>
            <img src="../../../assets/img/real_madrid.png" alt="" />
          </div>
          <div class="primary--text team-name">
            曼联（客）
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div class="score primary--text font-weight-thin">
            0
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" class="body-1 secondary--text "
            >分析专家</v-col
          >
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    container() {
      this.$vuetify.breakpoint.smAndDown ? "container-mobile" : "container-web";
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
  height: 186px;
}

.center-text {
  height: 140%;
}

.team-name {
  text-align: center;
}
</style>
