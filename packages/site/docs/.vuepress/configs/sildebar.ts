import type { SidebarConfig } from '@vuepress/theme-default';

export const slidebar: SidebarConfig = {
  '/web/css': [
    {
      text: 'css',
      children: ['/web/css/index.md', '/web/css/flex.md', '/web/css/phone.md', '/web/css/selector.md']
    },
    {
      text: '面试题相关',
      children: ['/web/css/layout.md', '/web/css/middle.md']
    }
  ],
  '/web/html': [
    {
      text: 'html',
      children: ['/web/html/index.md']
    }
  ],
  '/web/javascript/': [
    {
      text: '理论相关',
      children: ['/web/javascript/index.md', '/web/javascript/socpe.md', '/web/javascript/closure.md']
    },
    {
      text: '面试相关',
      children: [
        '/web/javascript/written/closure.md',
        '/web/javascript/written/object.md',
        '/web/javascript/written/more.md'
      ]
    }
  ]
};
