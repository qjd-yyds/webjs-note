import { defineUserConfig } from 'vuepress';

import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/web-site/',
  // 站点配置
  lang: 'en-Us',
  title: 'bystander的修仙笔记',
  description: '筑基期、结丹期、元婴期、化神期、洞虚期、渡劫期',
  // 主题和它的配置
  theme: '@vuepress/default',
  themeConfig: {
    logo: '/images/logo.jpg', // 白天logo
    logoDark: '/images/logo.jpg', // 夜间logo
    darkMode: true, // 是否启动夜间模式
    toggleDarkMode: '夜间模式',
    repo: 'https://github.com/qjd-yyds/webjs-note',
    backToHome: '返回首页',
    notFound: ['你不可以这样做！', '你已经走火入魔了？'],
    navbar: [
      {
        text: 'linux入门',
        children: [
          {
            text: 'shell脚本',
            link: '/linux/shell.md'
          }
        ]
      },
      {
        text: '面试题',
        children: [
          {
            text: 'css',
            link: '/interview/css.md'
          },
          {
            text: 'js',
            link: '/interview/js.md'
          },
          {
            text: '作用域',
            link: '/interview/socpe.md'
          },
          {
            text: '闭包',
            link: '/interview/closure.md'
          },
          {
            text: '笔试题',
            link: '/interview/written.md'
          }
        ]
      }
    ]
  },
  plugins: [
    [
      '@snippetors/vuepress-plugin-code-copy',
      {
        align: 'bottom',
        successText: '复制成功！'
      }
    ]
  ]
});
