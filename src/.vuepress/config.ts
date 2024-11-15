import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/server-docs/",

  lang: "zh-CN",
  title: "NikoYoke-Server",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
