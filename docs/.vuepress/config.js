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
      { 
        text: '前端', 
        link: '/front/',
        items: [
          { text: 'Vue', link: '/front/vue/' },
          { text: 'React', link: '/front/react/' },
        ]
      },
      { text: '数据库', link: '/database/' },
      { text: 'GIT', link: '/git/index.md' },
      { text: '方法', link: '/way/' },
      { text: '随笔', link: '/essay/index.md' },
      { text: 'GitHub', link: 'https://github.com/crane0/blog' }
    ],
    sidebar: {
      '/front/vue/': [
        '001组件属性修改',
        '002$emit',
        '003slot',
        '004合法非空校验',
      ],
      '/front/react/': [
        '001$emit',
      ],

      '/database/': [
        'mysql',
      ],

      '/git/': [
        '01git基础',
        '02查看log',
        '03重命名和删除文件',
        '04.git文件',
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