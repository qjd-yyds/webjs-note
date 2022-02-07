import { defineUserConfig } from 'vuepress';
import { navbar, slidebar } from './configs';
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
    navbar: navbar,
    sidebar: slidebar
  },
  plugins: [
    [
      '@snippetors/vuepress-plugin-code-copy',
      {
        align: 'bottom',
        successText: '复制成功！'
      }
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档'
          }
        }
      }
    ]
  ]
});
