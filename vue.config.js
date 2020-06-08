// const SitemapPlugin = require("sitemap-webpack-plugin").default;

// const rewards = require("./src/store/index.js")

// const rewardsRoutes = rewards.map( (reward) => {
//   return {
//     path: `/rewards/${reward.id}`,
//     lastmod: new Date().toISOString().slice(0, 10),
//     priority: "0.8",
//     changefreq: "hourly",
//   }
// })

// const paths = [
//   {
//     path: "/",
//     lastmod: new Date().toISOString().slice(0, 10),
//     priority: "0.8",
//     changefreq: "hourly",
//   },
//   {
//     path: "/rewards",
//     lastmod: new Date().toISOString().slice(0, 10),
//     priority: "0.8",
//     changefreq: "hourly",
//   },

// ];

module.exports = {
  // configureWebpack: {
  //   plugins: [
  //     new SitemapPlugin("http://diablo88.com", paths, {
  //       filename: "sitemap.xml",
  //       lastmod: true,
  //       changefreq: "hourly",
  //       priority: "0.8",
  //     }),
  //   ],
  // },
  transpileDependencies: ["vuetify"],
};
