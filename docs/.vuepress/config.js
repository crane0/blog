module.exports = {
  base: "/blog/",
  title: "前端成长之路",
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ],
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '前端', link: '/front/' },
      { text: '数据库', link: '/database/' },
      { text: '方法', link: '/way/' },
      { text: '随笔', link: '/essay/index.md' },
      { text: 'GitHub', link: 'https://github.com/crane0/blog' }
    ],
    sidebar: {
      '/front/': [
        'guide',
      ],

      '/database/': [
        'mysql',
      ],

      '/way/': [
        '001阿里OSS+picGO的使用',
        '002Vuepress+Valine搭建有评论的博客',
        '003函数防抖和节流',
      ],

      // fallback
      '/': [
        '',
      ]
    },
    lastUpdated: '上次更新：',
  },
  
}