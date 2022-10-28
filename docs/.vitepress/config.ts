import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar: any = {
  "/": [
    {
      text: "介绍",
      items: [{ text: "Button 按钮", link: "/components/button/" }],
    },
  ],
};

export default defineConfig({
  title: "🔨  Smarty-UI",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
});
