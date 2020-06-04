<template>
  <v-bottom-sheet v-model="isMenuOpen" scrollable>
    <template v-slot:activator="{ on }">
      <v-btn icon color="primary" v-on="on"><v-icon>$expand</v-icon></v-btn>
    </template>

    <v-card color="#28374E" class="content">
      <v-card-title
        ><v-spacer></v-spacer>
        <v-btn icon @click="isMenuOpen = false"><v-icon>$close</v-icon> </v-btn>
      </v-card-title>
      <v-card-text>
        <v-list color="#28374E">
          <div class="mt-4">
            <v-list-item
              link
              v-for="(menu, index) in menus"
              :key="index"
              @click="isMenuOpen = false"
              :to="menu.link"
            >
              <v-list-item-content align="center">
                <v-list-item-title
                  v-text="menu.label"
                  class="my-3 body-1 primary--text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },

  computed: {
    menus() {
      return this.$store.state.general.menus;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 85vh;
  background-color: #28374e;
  border-radius: 30px 40px 0px 0px !important;
}
</style>
