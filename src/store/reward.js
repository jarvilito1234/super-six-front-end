export default {
  namespaced: true,
  state: {
    rewards: [
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 4,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 5,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 4,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 5,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 4,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 5,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: true,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 1000,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 4,
        isHot: false,
      },
      {
        imageUrl: require("@/assets/img/rewards/reward1.png"),
        title: "腾讯Q币20元",
        points: 5,
        isHot: false,
      },
    ],
  },

  getters: {
    getRewards(state) {
      return state.rewards;
    },

    getHotRewards(state) {
      return state.rewards.filter((reward) => reward.isHot);
    },
  },
};
