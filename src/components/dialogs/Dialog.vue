<template>
  <v-card class="border-dialog " elevation="12">
    <v-card-title class="headline dialog-title primary--text"
      ><span>{{ title }}</span
      ><v-btn icon x-large class="primary--text" @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn></v-card-title
    >
    <content />
    <component :is="type"></component>
  </v-card>
</template>

<script>
import Terms from "./Terms";
export default {
  props: ["type", "title"],
  components: { Terms },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style></style>
