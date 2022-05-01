module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '马里奥',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/personal-blog/images/logo.png' }]],
  base: '/personal-blog/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    // repo: 'vuejs/vuepress',
    navbar: [
      { text: '主页', link: '/' },
      // { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/CoderYuanHub' },
    ],
    sidebar: [
      {
        text: '开始吧',
        link: '/',
      },
      {
        text: 'Vue新篇章',
        link: '/vue',
        children: [
          {
            text: '自定义组件的v-model',
            link: '/vue/vmodel.html',
          }
        ]
      },
      {
        text: '博主正在努力中～',
        link: '/guide/',
      }
    ],
    notFound: [
      "没有找到你想要的页面",
      "你可以尝试搜索",
      "或者返回首页",
      "或者返回上一页",
      "你调皮了哦",
    ],
    backToHome: "我要回首页了～",
  },
}