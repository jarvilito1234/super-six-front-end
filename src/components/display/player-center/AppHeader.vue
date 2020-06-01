<template>
  <v-app-bar app color="primaryBg" flat dark>
    <v-toolbar-title>
      <v-img width="60" height="80" contain src="@/assets/img/Logo.png"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-flex mr-2">
      <!-- <v-text-field rounded flat outlined append-icon="mdi-magnify">
      </v-text-field> -->
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
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
