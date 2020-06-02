<template>
  <div
    class="custom-max-width"
    :class="{ 'ml-4 mt-6': !isMobile, 'mt-n12': isMobile }"
    id="index"
  >
    <v-card dark color="transparent" flat>
      <v-toolbar dark color="transparent" flat>
        <v-toolbar-title v-if="!isMobile">
          个人中心
        </v-toolbar-title>
        <div
          class="ml-4 d-flex justify-center align-center"
          :class="{ 'ml-n2': isMobile }"
        >
          <v-chip outlined dark color="#AABBD0">竞猜记录</v-chip>
          <v-btn text rounded class="ml-2" :class="{ 'mx-n2': isMobile }"
            >兑换记录</v-btn
          >
          <v-btn text rounded class="ml-2" :class="{ 'mx-n2': isMobile }"
            >修改资料</v-btn
          >
          <v-btn text rounded class="ml-2" :class="{ 'mx-n2': isMobile }"
            >修改密码</v-btn
          >
          <v-btn text rounded class="ml-2" :class="{ 'mx-n2': isMobile }"
            >安全认证</v-btn
          >
        </div>
      </v-toolbar>
      <v-card flat class="pt-2 mx-4 transparent">
        <v-data-table
          mobile-breakpoint="0"
          :headers="headers"
          :items="datas"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-12 matches-linear-gradient"
          @page-count="pageCount = $event"
          :class="{ 'round-corner table-border table-padding': !isMobile }"
        >
          <template v-if="!isMobile" v-slot:header.submitTime="{ header }">
            <div class="d-flex align-center justify-center">
              {{ header.text }}
              <v-icon class="arrow-up">mdi-chevron-up</v-icon>
              <v-icon>mdi-chevron-down</v-icon>
            </div>
          </template>

          <template v-if="!isMobile" v-slot:header.quizPeriod="{ header }">
            <div class="d-flex align-center">
              {{ header.text }}
              <v-icon class="arrow-up">mdi-chevron-up</v-icon>
              <v-icon>mdi-chevron-down</v-icon>
            </div>
          </template>

          <template v-if="!isMobile" v-slot:header.quizResult="{ header }">
            <div class="d-flex align-center">
              {{ header.text }}
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#707070"></v-badge>
              </div>
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#33FF85"></v-badge>
              </div>
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#FF3534"></v-badge>
              </div>
            </div>
          </template>

          <template v-if="!isMobile" v-slot:header.earnRewards="{ header }">
            <div class="d-flex align-center">
              {{ header.text }}
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#707070"></v-badge>
              </div>
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#33FF85"></v-badge>
              </div>
              <div class="mx-3">
                <v-badge dot offset-y="0" color="#FF3534"></v-badge>
              </div>
            </div>
          </template>
        </v-data-table>
        <div
          class="d-flex pt-4 align-center"
          :class="{ 'justify-center': isMobile }"
        >
          <v-btn @click="page = 1" icon x-small>
            <v-icon>$firstPage</v-icon>
          </v-btn>
          <div>
            <v-pagination
              dark
              v-model="page"
              text
              :length="pageCount"
            ></v-pagination>
          </div>

          <v-btn icon x-small>
            <v-icon @click="page = pageCount">$lastPage</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 12,
      headers: [
        {
          text: "提交时间",
          align: "center",
          sortable: true,
          value: "submitTime",
        },
        {
          text: "竞猜期",

          value: "quizPeriod",
        },
        {
          text: "竞猜结果",

          value: "quizResult",
        },
        {
          text: "竞猜期",

          value: "earnRewards",
        },
      ],

      datas: [
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
        {
          submitTime: "8/23/2020 5:23:23 PM",
          quizPeriod: "竞猜第184期8月6日",
          quizResult: "猜对 3 场",
          earnRewards: "150个顺",
        },
      ],
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
// #index >>> .v-pagination {
//   justify-content: start !important;
// }

::v-deep .paginate {
  justify-content: start !important;
}

::v-deep .v-pagination button {
  background: none !important;
  box-shadow: none;
}

::v-deep .primary {
  color: #31fef9 !important;
}

::v-deep .v-data-table-header__icon {
  display: none;
}

::v-deep .arrow-up {
  font-weight: 100 !important;
}

::v-deep .table-padding th {
  padding: 20px;
}

::v-deep .v-data-table-header {
  background-color: #000618;
  border-radius: inherit !important;
}

::v-deep .table-border th:first-child {
  border-radius: 30px 0 0 0px;
}

::v-deep .table-border th:last-child {
  border-radius: 0 30px 0 0;
}

::v-deep tr:hover {
  background-color: rgb(170, 187, 208, 0.5) !important;
  opacity: 0.5;
}

@media screen {
}
</style>
