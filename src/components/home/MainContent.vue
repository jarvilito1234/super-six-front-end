<template>
  <v-row>
    <v-col cols="12" md="8" class="left-width">
      <LeftContentMain />
    </v-col>
    <v-col cols="12" md="4">
      <RightContentMain />
    </v-col>
  </v-row>
</template>

<script>
import RightContentMain from "./right-content/RightContentMain";
import LeftContentMain from "./left-content/LeftContentMain";
export default {
  components: { RightContentMain, LeftContentMain },
};
</script>

<style lang="scss" scoped>
.left-width {
  width: 788px;
}
</style>
