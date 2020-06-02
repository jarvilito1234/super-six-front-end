<template>
  <div>
    <v-app-bar app color="primaryBg" flat dark class="py-2">
      <v-toolbar-title>
        <img
          :width="isMobile ? '51pt' : '86'"
          :height="isMobile ? '36pt' : '60'"
          src="@/assets/img/Logo.png"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!isMobile" class="d-flex mr-2 align-center">
        <div>
          <v-text-field
            clearable
            rounded
            outlined
            dense
            append-icon="mdi-magnify"
            hide-details="auto"
          ></v-text-field>
        </div>

        <v-btn icon class="mr-2">
          <v-icon>mdi-cog</v-icon>
        </v-btn>

        <v-btn icon class="mr-2">
          <v-badge color="red" dot offset-x="10" offset-y="5">
            <v-icon>mdi-bell</v-icon>
          </v-badge></v-btn
        >

        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="subtitle ml-1 mr-3">Username123</div>
        <v-btn icon>
          <v-icon>$logout</v-icon>
        </v-btn>
      </div>
      <div v-else class="d-flex mr-2 align-center">
        欢迎，<span class="accent--text subtitle">Username123</span>
        <ExpandMenu />
      </div>
    </v-app-bar>
    <v-toolbar
      v-if="isMobile"
      dark
      style="margin-top: 81px;"
      height="115pt"
      class="gradient-blue-green px-4"
    >
      <v-toolbar-title>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        Username123
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon outlined class="accent--text">
        <v-icon>$logout</v-icon>
      </v-btn>
    </v-toolbar>
    <div v-if="isMobile" color="transparent" class="mt-n6" align="center">
      <v-btn-toggle rounded dark active-class="header-button-active">
        <v-btn class="px-7">
          个人中心
        </v-btn>
        <v-btn class="px-7">
          顺币计划
        </v-btn>
        <v-btn class="px-7">
          服务中心
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
import ExpandMenu from "../ExpandMenu";
export default {
  components: { ExpandMenu },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-btn-toggle {
  button {
    background-color: black !important;
    color: white;
  }
  .v-btn::before {
    background-color: transparent !important;
  }
}

::v-deep .header-button-active {
  color: #31fef9 !important;
}
</style>
