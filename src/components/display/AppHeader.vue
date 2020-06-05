<template>
  <fragment>
    <v-system-bar
      v-if="$route.name === 'Home'"
      app
      class="background"
      height="50"
      color="secondary--text"
    >
      <v-container class="custom-max-width">
        <v-row class="d-flex align-center">
          <div
            class="d-inline-block text-truncate"
            v-if="dataLoaded"
            style="max-width: 600px;"
          >
            <v-icon class="mr-2">$soundUp</v-icon>
            {{ announcement.announcement }}
          </div>

          <v-spacer></v-spacer>
          <div
            v-if="!$vuetify.breakpoint.smAndDown"
            class="d-flex align-center"
          >
            <v-btn
              v-if="!this.$store.getters['auth/isAuth']"
              rounded
              outlined
              small
              @click="login"
              color="secondary"
              class="mr-4"
              >登入</v-btn
            >
            <v-btn
              rounded
              outlined
              small
              color="#FFBF00"
              class="mr-6"
              v-if="!this.$store.getters['auth/isAuth']"
              >立即注册</v-btn
            >
            <v-btn
              rounded
              outlined
              small
              link
              @click="logOutLink"
              color="secondary"
              class="mr-2"
              v-else
              >Logout</v-btn
            >
            <div style="position: relative;">
              <v-icon class="mr-4" @click="qrLink = !qrLink">$phoneLink</v-icon>
              <!-- qr dialog -->
              <div
                class="round-corner my-0 qr-popup primary--text"
                :class="{ 'qr-popup-open': qrLink }"
              >
                <v-container class="mt-0 font-weight-bold">
                  <v-row cols="6">
                    <v-col
                      cols="6"
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div>IOS</div>
                      <div class="subtitle">1.6.3</div>
                      <img
                        class=""
                        src="@/assets/img/qr/qr.png"
                        height="100"
                        width="100"
                      />
                      <div>扫码下载</div>
                    </v-col>
                    <v-col
                      cols="6"
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div>IOS</div>
                      <div class="subtitle">1.6.3</div>
                      <img
                        class="my-1"
                        src="@/assets/img/qr/qr.png"
                        height="100"
                        width="100"
                      />
                      <div>扫码下载</div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
            <div class="chat-link">
              <v-icon @click="chat = !chat">$chat</v-icon>

              <!-- chat link -->
              <div
                class="round-corner my-0 chat-popup primary--text"
                :class="{ 'chat-popup-open': chat }"
              >
                <v-card dark flat class="transparent mt-1 ml-4">
                  <v-card-subtitle> 客服热线</v-card-subtitle>
                  <v-card-text class="d-flex align-center mt-n4 body-1"
                    ><v-icon class="mr-2">$chat</v-icon>008445</v-card-text
                  >
                </v-card>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-system-bar>

    <v-app-bar
      :height="$vuetify.breakpoint.mdAndDown ? '44' : '80'"
      :app="$route.name !== 'Login' ? true : false"
      :absolute="$route.name === 'Login' ? true : false"
      color="transparent"
      flat
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
              exact
              v-for="(menu, index) in menus"
              :key="index"
              :value="menu.label"
              :to="menu.link"
            >
              <span
                class="primary--text subtitle-1"
                :class="{ 'accent--text': menuActive === menu.label }"
                >{{ menu.label }}</span
              >
            </v-btn>
          </v-btn-toggle>
          <div class="hidden-md-and-up">
            <v-btn
              v-if="!this.$store.getters['auth/isAuth']"
              rounded
              outlined
              medium
              color="secondary"
              class="mr-4"
              >登入</v-btn
            >

            <v-btn
              v-if="!this.$store.getters['auth/isAuth']"
              rounded
              outlined
              medium
              color="#FFBF00"
              class="mr-4"
              >立即注册</v-btn
            >
            <v-btn
              v-else
              rounded
              outlined
              medium
              color="secondary"
              class="mr-4"
              @click="logOutLink"
              >Logout</v-btn
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
      qrLink: false,
      chat: false,

      menuActive: "首页",
    };
  },

  methods: {
    logOutLink() {
      this.$store.commit("auth/logOut");
    },

    login() {
      window.location = `${process.env.VUE_APP_API_ROOT_URL}/login?redirect_url=${process.env.VUE_APP_ROOT_URL}`;
    },
  },
  computed: {
    dataLoaded() {
      return this.$store.state.general.dataLoaded;
    },

    menus() {
      return this.$store.state.general.menus;
    },

    announcement() {
      return this.$store.getters["general/lastAnnouncement"];
    },
  },

  watch: {
    qrLink() {
      this.qrLink ? (this.chat = false) : "";
    },

    chat() {
      this.chat ? (this.qrLink = false) : "";
    },
  },

  created() {
    this.$store.dispatch("general/getAnnouncement");
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

.qr-popup {
  width: 290px;
  height: 220px;
  transition: 0.5s;
  position: absolute;
  border: 1px solid #aabbd0;
  top: -300px;
  right: 0;
  background-color: rgba(144, 144, 144, 0.3);
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(30px) !important;
}

.qr-popup-open {
  top: 50px;
  transition: 0.4s;
  transition-timing-function: ease-in-out;
}
.chat-link {
  position: relative;
  .chat-popup {
    width: 163px;
    height: 90px;
    transition: 0.5s;
    position: absolute;
    border: 1px solid #aabbd0;
    top: -230px;
    right: -40px;
    background-color: rgba(116, 112, 112, 0.4);
    backdrop-filter: blur(30px) !important;
    -webkit-backdrop-filter: blur(30px) !important;
  }

  .chat-popup-open {
    top: 80px;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }
}
</style>
