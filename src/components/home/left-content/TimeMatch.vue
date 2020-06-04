<template>
  <v-container
    fluid
    class="py-2 matches-linear-gradient container "
    style="border-radius: 28px 28px 0 0;"
  >
    <v-row>
      <v-col cols="12" class="primary--text">
        <div align="center" class="title-custom" v-if="event">
          {{ event.category.name }}
        </div>
      </v-col>
      <v-col>
        <div align="center" class="mt-n4 secondary--text">
          <v-btn small class="custom-radius mr-4" color="#33FF85">
            <span class="time-subtitle">预测中</span>
          </v-btn>
          本期活动代号 #004641220
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1">
        <v-row justify="center" class="mt-n2 mb-3 d-flex justify-space-around">
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ getDayDiff }}</div>
            <div class="body-1 mt-n2" align="center">天</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ getHourDiff }}</div>
            <div class="body-1 mt-n2" align="center">时</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ getMinDiff }}</div>
            <div class="body-1 mt-n2" align="center">分</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ getSecDiff }}</div>
            <div class="body-1 mt-n2" align="center">秒</div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import format from "date-fns/format";
import differenceInSeconds from "date-fns/differenceInSeconds";

export default {
  props: ["event"],
  data() {
    return {};
  },
  async mounted() {},

  computed: {
    // event() {
    //   return this.$store.getters['matches/event'] || "";
    // },
    getDayDiff() {
      return this.event.hasOwnProperty("end_date")
        ? differenceInDays(new Date(this.event.end_date), new Date())
        : 0;
    },

    getHourDiff() {
      let getTotalHours = differenceInHours(
        new Date(this.event.end_date),
        new Date()
      );
      let subHour = this.getDayDiff ? getTotalHours - this.getDayDiff * 24 : 0;
      return subHour < 0 ? 0 : subHour;
    },

    getMinDiff() {
      let getTotalHours = differenceInHours(
        new Date(this.event.end_date),
        new Date()
      );
      let getTotalMin = differenceInMinutes(
        new Date(this.event.end_date),
        new Date()
      );
      let subMin = this.getDayDiff ? getTotalMin - getTotalHours * 60 : "";
      return subMin < 0 ? 0 : subMin;
    },

    getSecDiff() {
      let totalMin = differenceInMinutes(
        new Date(this.event.end_date),
        new Date()
      );
      let getTotalSec = differenceInSeconds(
        new Date(this.event.end_date),
        new Date()
      );
      let subSec = this.getDayDiff ? getTotalSec - totalMin * 60 : "";
      return subSec < 0 ? 0 : subSec;
    },
  },

  methods: {
    countDayLeft() {
      if (event) {
        console.log(event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-radius {
  border-radius: 10px 0px !important;
}
.title-custom {
  font-size: 22px;
  font-weight: 600;
}
.main-text {
  font-size: 70px;
}

.contaier {
  height: 272px;
}

.time-subtitle {
  font-size: 16px !important;
  font-weight: 900 !important;
}
@media only screen and (max-width: 700px) {
  .title-custom {
    font-size: 14pt;
  }

  .main-text {
    font-size: 40pt;
  }

  .container {
    height: 174pt;
  }
}
</style>
