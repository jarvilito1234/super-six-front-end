<template>
  <v-card
    flat
    :height="isMobile ? '' : '650px'"
    :color="isMobile ? 'transparent' : 'darkCardBg'"
    class="mt-6 round-corner border-for-dark"
  >
    <v-card-title class="title primary--text"
      ><v-icon left>$soccer</v-icon>体育头条实时动态 <v-spacer></v-spacer
      ><v-icon right>$arrowRight</v-icon></v-card-title
    >
    <div class="ml-6 mr-1 my-4 right-content" v-if="!isMobile">
      <HeadlinesList
        v-for="(event, index) in events"
        :key="index"
        :event="event"
      />
    </div>

    <v-slide-group v-else>
      <v-slide-item v-for="(event, index) in events" :key="index">
        <HeadlinesList :event="event" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import HeadlinesList from "./HeadlinesList";
export default {
  components: { HeadlinesList },
  data() {
    return {
      events: [
        {
          content: "21亿美金！乔丹吸金史上第一，C罗梅西也逊色",
          imgUrl: require("@/assets/img/headline/headline1.png"),
        },
        {
          content: "21亿美金！乔丹吸金史上第一，C罗梅西也逊色",
          imgUrl: require("@/assets/img/headline/headline1.png"),
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    headerButton() {
      return this.isMobile ? "header-button-mobile" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-button-mobile {
  width: 80%;
  margin-top: -25px;
}

.right-content {
  max-height: 540px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
