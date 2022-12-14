import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar: any = {
  "/": [
    {
      text: "ไป็ป",
      items: [{ text: "Button ๆ้ฎ", link: "/components/button/" }],
    },
  ],
};

export default defineConfig({
  title: "๐จ  Smarty-UI",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
});
