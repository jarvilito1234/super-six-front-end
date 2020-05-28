<template>
  <v-bottom-sheet v-model="isMenuOpen">
    <template v-slot:activator="{ on }">
      <v-btn icon color="primary" v-on="on"><v-icon>$expand</v-icon></v-btn>
    </template>
    <div class="content pa-12" color="#28374E">
      <div align="right">
        <v-button icon @click="isMenuOpen = false"
          ><v-icon>$close</v-icon>
        </v-button>
      </div>
      <div>
        <v-list color="#28374E">
          <div class="mt-12">
            <v-list-item link v-for="(menu, index) in menus" :key="index">
              <v-list-item-content align="center">
                <v-list-item-title
                  v-text="menu.label"
                  class="my-7 headline font-weight-bold primary--text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: ["menus"],
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 85vh;
  background-color: #28374e;
  border-radius: 30px 40px 0px 0px;
}
</style>
