<template>
  <v-card
    class="round-corner dark-gradient-bg2 border-for-dark mr-4 mb-3"
    color="primary--text"
    :width="isMobile ? '390px' : ''"
  >
    <v-card-text>
      <div class="d-flex align-center">
        <div class="primary--text subtitle-1">
          {{ event.content }}
        </div>
        <v-spacer></v-spacer>
        <v-avatar size="80px" class="ml-3 avatar-headline">
          <img alt="Avatar" :src="event.imgUrl" />
        </v-avatar>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["event"],
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-headline {
  border-radius: 30px !important;
}
</style>
