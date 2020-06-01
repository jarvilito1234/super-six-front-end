<template>
  <div>
    <v-btn
      x-large
      fixed
      text
      fab
      bottom
      right
      v-show="fab"
      v-scroll="onScroll"
      @click="toTop"
      color="secondary"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-btn
        :class="hover ? 'we-chat-hover' : 'we-chat-not-hover'"
        class="we-chat"
        large
        fixed
        fab
        icon
        bottom
        left
        color="secondary"
        v-scroll="onScroll"
        @click="toTop"
        retain-focus-on-click
      >
        <v-icon right class="mt-1" style="width: 81px; height: 81px;"
          >$messenger</v-icon
        >
      </v-btn>
    </v-hover>
    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-btn
        :class="hover ? 'we-chat-hover' : 'we-chat-not-hover'"
        large
        fixed
        fab
        icon
        bottom
        left
        color="secondary"
        v-scroll="onScroll"
        @click="toTop"
        retain-focus-on-click
      >
        <v-icon right class="mt-1" style="width: 81px; height: 81px;"
          >$spaceShip</v-icon
        >
      </v-btn>
    </v-hover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
  },
};
</script>

<style scoped>
.we-chat {
  margin-bottom: 80px;
}
.we-chat-not-hover {
  transition: 0.3s;
  left: -40px;
}

.we-chat-hover {
  transition: 0.3s;
  left: 15px;
}
</style>
