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
            <div class="font-weight-thin main-text">{{ days }}</div>
            <div class="body-1 mt-n2" align="center">天</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ hours }}</div>
            <div class="body-1 mt-n2" align="center">时</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ minutes }}</div>
            <div class="body-1 mt-n2" align="center">分</div>
          </div>
          <div class="primary--text">
            <div class="font-weight-thin main-text">{{ seconds }}</div>
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

import { mapState } from "vuex";
export default {
  data() {
    return {
      countDownReady: false,
      days: "",
      hours: "",
      seconds: "",
      minutes: "",
      counting: "",
    };
  },
  computed: {
    ...mapState({
      event: (state) => state.matches.event,
    }),
  },

  watch: {
    async event() {
      await this.getDayDiff();
      await this.getHourDiff();
      await this.getMinDiff();
      await this.getSecDiff();
      if (this.countDownReady) {
        this.startCountDown();
      }
    },
  },

  methods: {
    startCountDown() {
      console.log(this.days, this.hours, this.minutes, this.seconds);
      // this.getSecDiff--;
      this.counting = setInterval(() => {
        this.countDown();
      }, 1000);
    },

    countDown() {
      if (
        this.days !== 0 ||
        this.hours !== 0 ||
        this.minutes !== 0 ||
        this.seconds !== 0
      ) {
        if (this.seconds) {
          this.seconds--;
        } else {
          if (this.minutes !== 1) {
            this.minutes--;
            this.seconds = 60;
          } else {
            if (this.hours !== 1) {
              this.minutes = 59;
              this.seconds = 60;
              this.hours--;
            } else {
              if (this.days) {
                this.days--;
                this.hours = 23;
                this.minutes = 60;
                this.seconds = 60;
              }
            }
          }
        }
      } else {
        clearInterval(this.counting);
      }
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
      let subMin = this.days ? getTotalMin - getTotalHours * 60 : "";
      this.minutes = subMin < 0 ? 0 : subMin;
    },

    getDayDiff() {
      this.days = this.event.hasOwnProperty("end_date")
        ? differenceInDays(new Date(this.event.end_date), new Date())
        : 0;
    },

    getHourDiff() {
      let getTotalHours = differenceInHours(
        new Date(this.event.end_date),
        new Date()
      );
      let subHour = this.days ? getTotalHours - this.days * 24 : 0;

      this.hours = subHour < 0 ? 0 : subHour;
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
      let subSec = this.days ? getTotalSec - totalMin * 60 : "";

      this.seconds = subSec < 0 ? 0 : subSec;
      this.countDownReady = true;
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
