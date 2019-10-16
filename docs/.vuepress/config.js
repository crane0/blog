module.exports = {
  "base": "/vuepress-project/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/guide.md' },
      { text: 'Test', link: '/test/test.md' },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: [
    //   {
    //     title: 'Group 1',   // 必要的
    //     path: '/guide/',      // 可选的, 应该是一个绝对路径
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Test',
    //     // path: '/test/',
    //     collapsable: false,
    //     children: [ 
    //       {
    //         title: 'test',
    //         path: '/test/test.md',
    //       },
    //       {
    //         title: 'test2',
    //         path: '/test/test2.md',
    //       },
    //     ]
    //   },
    //   {
    //     title: '数据库',
    //     collapsable: false,
    //     children: [ 
    //       {
    //         title: 'mysql',
    //         path: '/database/mysql.md',
    //         collapsable: false, // 可选的, 默认值是 true,
    //       },
    //     ]
    //   }
    // ]
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
    }
  },
  markdown: {
    lineNumbers: true
  }
}