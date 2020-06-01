<template>
  <v-card-text style="height: 600px;">
    <div class="primary--text dialog-content">
      <span>竞猜规则</span>
      <v-divider class="my-3"></v-divider>
      每期推出6场指定赛事，会员准确预测赛果比分即可获得<span
        class="amber--text text--darken-2"
        >88,888元</span
      >人民币红包。获奖者可联系本站“客服”领钱。
      <v-divider class="my-8"></v-divider>
      如何预测
      <v-divider class="my-3"></v-divider>
      赛事栏目中输入各别塞队比分，完成6场输入比分，点击下方“提交”即可。<v-divider
        class="my-8"
      ></v-divider>
      活动条款 <v-divider class="my-3"></v-divider>
      若其中任何一场赛事被取消或发生任何突发情况而终止，则活动将视为无效或中止取消。赛事以官方最终全场比分计算。超6对此活动保有最终解释权。
    </div>
  </v-card-text>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style></style>
