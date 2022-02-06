import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/'
  },
  {
    text: '前端',
    children: [
      {
        text: 'css',
        link: '/web/css/index.md'
      },
      {
        text: 'html',
        link: '/web/html/index.md'
      },
      {
        text: 'javascript',
        link: '/web/javascript/index.md'
      }
    ]
  },
  {
    text: 'linux入门',
    children: [
      {
        text: 'shell脚本',
        link: '/linux/index.md'
      }
    ]
  }
];
