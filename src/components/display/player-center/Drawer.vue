<template>
  <v-card id="nav" class="drawer-style ml-4" width="250px" height="93vh">
    <v-list rounded dark class="transparent list group-height ">
      <v-list-item-group>
        <v-list-group
          v-for="(link, index) in links"
          :key="index"
          :prepend-icon="link.icon"
          no-action
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(sublink, index) in link.subLinks"
            :key="index"
            active-class="active-list"
            exact
            :to="sublink.route"
          >
            <v-list-item-content>
              <v-list-item-title>{{ sublink.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "个人中心",
          subLinks: [
            {
              title: "兑换记录",
              route: "player-center",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
          ],
          icon: "$account",
        },
        {
          title: "个人中心",
          subLinks: [
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
          ],
          icon: "$linkaccent",
        },
        {
          title: "个人中心",
          subLinks: [
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
            {
              title: "兑换记录",
              route: "somewhere",
            },
          ],
          icon: "$information",
        },
      ],
    };
  },
};
</script>

<style scoped>
#nav >>> .v-list-group__header__append-icon {
  display: none !important;
}

#nav >>> .active-list {
  background-color: #03132e;
  margin: 0px 20px 0px 43px;
  padding-left: 30px;
}

#nav >>> .active-list::before {
  opacity: 0;
}

.group-height {
  /* height: 900px; */
  max-height: 93vh !important;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
