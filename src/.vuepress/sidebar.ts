import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "🤖Bot",
      icon: "",
      prefix: "bot/",
      link: "bot/",
      children: "structure",
    },
    {
      text: "🖥️serve",
      icon: "",
      prefix: "server/",
      link: "server/",
      children: "structure",
    }
  ],
});
