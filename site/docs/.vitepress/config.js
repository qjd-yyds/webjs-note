async function getConfig() {
  const config = {
    head: [
      [
        'meta',
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ],
      ['meta', { name: 'keywords', content: '看客的个人博客' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      // 引入 Gitalk
      ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
      ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }]
    ],
    title: 'bystander的文档',
    description: '我的技术文档',
    lang: 'en-US',
    base: '/blog/', // 部署的子路径,
    themeConfig: {
      algolia: {
        apiKey: '',
        indexName: '',
        searchParameters: {
          faeFilters: ['tags:guide,api']
        }
      },
      nav: [
        { text: '首页', link: '/' },
        { text: '面试题', link: '/interview/js' },
        { text: '电子书', link: '/contact/' }
      ]
    }
  };
  return config;
}
module.exports = getConfig();
