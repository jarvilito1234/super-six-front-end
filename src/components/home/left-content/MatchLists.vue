<template>
  <v-container :class="container" class="matches-linear-gradient">
    <v-row>
      <v-col class="text-center secondary--text">猜全场</v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <div
          class="d-flex justify-space-around"
          :class="{ 'align-center': !isMobile }"
        >
          <div class="primary--text font-weight-thin">
            <v-text-field
              :height="isMobile ? '66' : '100'"
              dark
              maxlength="2"
              v-model="score1"
              @keypress="isNumber($event)"
              type="text"
              class="score-input"
              placeholder="0"
              outlined
              rounded
            ></v-text-field>

            <div v-show="isMobile" class="body-1 mt-n2" align="center">
              <v-icon>$tv</v-icon>
            </div>
          </div>

          <div class="primary--text team-name hidden-sm-and-down">
            {{ match.team1.chinese_name || match.team1.name }}
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>

          <div class="mr-n10 d-flex flex-column">
            <div class="primary--text text-center">
              <img
                class="team-img mb-4"
                :src="match.team1.image"
                alt=""
                :width="isMobile ? '50pt' : '100px'"
                :height="isMobile ? '50pt' : '100px'"
              />
              <div v-show="isMobile" class=" ml-0" align="center">
                {{ match.team1.chinese_name || match.team1.name }}
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="">
        <div
          class="center-text d-flex align-center justify-center flex-column "
        >
          <div class="body-1 secondary--text text-center">vs</div>
        </div>
      </v-col>
      <v-col cols="5">
        <div
          class="d-flex  justify-space-around"
          :class="{ 'align-center': !isMobile }"
        >
          <div class="d-flex flex-column">
            <div class="primary--text text-center ml-n10">
              <!-- :class="{ 'ml-0': isMobile, 'ml-n12': !isMobile }" -->
              <img
                class="team-img mb-4"
                :width="isMobile ? '50pt' : '100px'"
                :height="isMobile ? '50pt' : '100px'"
                :src="match.team2.image"
                alt=""
              />
              <div v-show="isMobile" class="">
                {{ match.team2.chinese_name || match.team2.name }}
              </div>
            </div>
          </div>
          <div class="primary--text team-name mx-0 hidden-sm-and-down">
            {{ match.team2.chinese_name || match.team2.name }}
            <v-divider></v-divider>
            <v-icon>$tv</v-icon>
          </div>
          <div>
            <div class="primary--text font-weight-thin">
              <v-text-field
                :height="isMobile ? '66' : '100'"
                dark
                v-model="score2"
                @keypress="isNumber($event)"
                class="score-input"
                placeholder="0"
                outlined
                rounded
              ></v-text-field>
            </div>
            <div v-show="isMobile" class="body-1 mt-n2" align="center">
              <v-icon>$tv</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="12" align="center" class="body-1 secondary--text"
        ><u>分析专家</u></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["match"],
  data() {
    return {
      form: {
        pointsOne: "",
        pointsTwo: "",
      },
      match1ObjectName: `match[${this.match.id}][score_1]`,
      match2ObjectName: `match[${this.match.id}][score_2]`,
    };
  },

  computed: {
    container() {
      return this.$vuetify.breakpoint.smAndDown
        ? "container-mobile"
        : "container-web";
    },

    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    score1: {
      get() {
        return this.$store.getters["matches/getSelectedMatch"](this.match.id)[
          this.match1ObjectName
        ];
      },

      set(value) {
        this.$store.commit("matches/updatePrediction", {
          objectName: this.match1ObjectName,
          value,
          id: this.match.id,
        });
      },
    },
    score2: {
      get() {
        return this.$store.getters["matches/getSelectedMatch"](this.match.id)[
          this.match2ObjectName
        ];
      },
      set(value) {
        this.$store.commit("matches/updatePrediction", {
          objectName: this.match2ObjectName,
          value,
          id: this.match.id,
        });
      },
    },
  },
  methods: {
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .score-input {
  width: 100px;
  padding: -10px !important;
  font-size: 38px;
  input {
    text-align: center !important;
  }
}
::v-deep input[type="number"] {
  -moz-appearance: textfield;
}
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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

@media (max-width: 955px) {
  .score-input {
    min-width: 80px;
    width: 80px;
    font-size: 30px;
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
