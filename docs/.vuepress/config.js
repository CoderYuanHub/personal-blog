import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  host: "localhost",
  port: "8080",
  // 站点配置
  lang: "zh-CN",
  title: "马里奥",
  description: "这是我的第一个 VuePress 站点",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  base: "/",
  theme: defaultTheme({
    logo: "/images/logo.png",
    navbar: [
      { text: "主页", link: "/" },
      // { text: '关于', link: '/about/' },
      { text: "GitHub", link: "https://github.com/CoderYuanHub" },
    ],
    sidebar: [
      {
        text: "开始吧",
        link: "/",
      },
      {
        text: "Vue新篇章",
        collapsible: true,
        children: ["/vue/vmodel.md"],
      },
      {
        text: "工具方法",
        collapsible: true,
        children: ["/tools/export-to-world.md", "/tools/the-patch.md"],
      },
      // {
      //   text: "自定义组件界面",
      //   link: "/main/main.html",
      // },
      {
        text: "博主正在努力中～",
        link: "/guide/",
      },
    ],
    notFound: [
      "没有找到你想要的页面",
      "你可以尝试搜索",
      "或者返回首页",
      "或者返回上一页",
      "你调皮了哦",
    ],
    backToHome: "我要回首页了～",
  }),
  // repo: 'vuejs/vuepress',
});
