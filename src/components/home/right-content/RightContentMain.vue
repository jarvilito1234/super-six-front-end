<template>
  <v-card color="transparent" flat>
    <v-btn
      block
      large
      class="dark-gradient-bg button-list border-for-dark"
      rounded
      ><span class="button-text-left secondary--text"
        ><v-icon class="mr-2">$assignment</v-icon>活动条款规则 </span
      ><v-icon right class="icon-right">$arrowRight</v-icon></v-btn
    >
    <v-card
      height="650"
      color="darkCardBg"
      class="mt-6 round-corner border-for-dark"
    >
      <v-card-title class="title primary--text"
        ><v-icon left>$trophy</v-icon>本月竞猜大主 <v-spacer></v-spacer
        ><span class="prize-amount-icon mr-2" /><span class="body-2 mr-2"
          >获奖金额</span
        >
        <span class="coin-asset-icon mr-2" /><span class="body-2"
          >顺币资产</span
        ></v-card-title
      >
      <div class="ml-6 mr-1 my-4 right-content">
        <RightContentList
          v-for="(event, index) in events"
          :key="index"
          :event="event.event"
        />
      </div>
    </v-card>
  </v-card>
</template>

<script>
import RightContentList from "./RightContentList";
export default {
  components: { RightContentList },
  data() {
    return {
      events: [
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
        {
          userName: "Skdkd11",
          content: "竞猜第184期9月4日（欧冠16强赛）",
          points: {
            prize: "88,888元",
            coin: "841顺币",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.button-list {
  color: #aabbd0;
}

.button-text-left {
  position: absolute;
  left: 0;
  font-size: 20px;
}

.icon-right {
  position: absolute;
  right: 0;
}

.right-content {
  max-height: 540px;
  overflow-y: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 4px;
}
/* ::-webkit-scrollbar-track {
  background: #f1f1f1;
} */

::-webkit-scrollbar-thumb {
  background: #28374e;
}
</style>
