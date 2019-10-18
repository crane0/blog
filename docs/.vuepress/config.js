module.exports = {
  base: "/blog/",
  title: "前端成长之路",
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ],
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '前端', link: '/guide/guide.md' },
      { text: '数据库', link: '/test/test.md' },
      { text: 'GitHub', link: 'https://github.com/crane0' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'guide',
        'guide2',
      ],

      '/test/': [
        '',
        'test',
        'test2'
      ],

      // fallback
      '/': [
        '',
      ]
    },
    lastUpdated: '上次更新：',
  },
  markdown: {
    lineNumbers: true
  },
}