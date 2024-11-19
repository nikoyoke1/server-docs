import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "NikoYoke-Server",
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-pingfang-sc@1.0.5/index.min.css" }],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
