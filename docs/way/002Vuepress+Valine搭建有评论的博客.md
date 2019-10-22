# 002 Vuepress + Valine 搭建有评论的博客

## 1，项目搭建

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::


### 1.1，初始化项目
``` js
npm init -y

npm install -D vuepress // 或者 yarn add -D vuepress
```

项目根目录下，新建一个 `docs` 文件夹，和 `docs/README.md`，

这个 markdown 会作为项目的主页，用的是 [YAML front matter 语法](https://jekyllrb.com/docs/front-matter/)，没太搞懂。

下面的配置显示的和 [Vuepress官方文档](https://vuepress.vuejs.org/zh/)首页差不多。

> heroImage 使用的是静态资源文件的路径，后面会讲到。
```
---
home: true
heroImage: /logo.gif
heroText: VuePress
tagline: Vue 驱动的静态网站生成器
actionText: 快速上手 →
actionLink: /front/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue 驱动
  details: 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

### 1.2，添加脚本
``` js
// package.json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
}

// 本地运行
npm run docs:dev

// 编译
npm run docs:build
```

## 2，VuePress 基础配置

### 2.1，`/docs/.vuepress/config.js`

是项目的整体配置文件。[官方配置参考](https://vuepress.vuejs.org/zh/config/)

下面是我的一些配置：
``` js
module.exports = {
  // 会作为该项目的根路径，比如这个项目 https://crane0.github.io/blog/
  base: "/blog/",
  title: "VuePress",
  // 这个会添加到head标签中
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ],
  // 使用 markdown 时会自动添加行号
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 顶部导航栏的配置
    nav: [
      { text: '前端', link: '/front/' },
      { text: '方法', link: '/way/' },
      { text: 'GitHub', link: 'https://github.com/crane0/blog' }
    ],
    // 侧边栏的配置
    sidebar: {
      '/front/': [
        'guide',
      ],
      '/way/': [
        '002vuepress+评论的搭建',
      ],

      // fallback，虽然没搞明白为什么，貌似会影响性能
      '/': [
        '',
      ]
    },
    // 会在文章的底部添加更新的时间（以GitHub提交时间为准）
    lastUpdated: '上次更新：',
  },
  
}
```
对应的项目目录，
> 文件夹中的 README.md 可以替换为 index.md
```
.
├─ .vuepress
├─ README.md
├─ front/
│  ├─ README.md
│  ├─ guide.md
└─ way/
   ├─ README.md
   └─ 002vuepress+评论的搭建.md
```

### 2.2，`/docs/.vuepress/public`

静态资源文件的目录，上面说到的 `heroImage` 就是引用的这里。

### 2.3，`/docs/.vuepress/dist`

编译后的文件存放目录。

---

以上，运行 `npm run dev`，就可以在本地看到运行结果了。

## 3，部署

1. 部署的是 dist 文件夹。
2. 要部署到远程仓库的 gh-pages 分支。

因为每次 `npm run build` 之后，dist 文件夹都是新的，所以每次都需要在 dist 文件夹下重新初始化 git，并重新连接远程仓库。

::: warning 注意
下面的方式，都要确保已经将 ssh key 添加到了 GitHub 账户。因为使用的 ssh 的方式的 push 代码
:::

### 3.1，最原始的办法

在项目根目录下，执行以下代码即可。

``` js
npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

// 仓库名和 `/docs/.vuepress/config.js` 中的 base 字段保持一致。
git push -f git@github.com:<用户名>/<仓库名>.git master:gh-pages 
```

### 3.2，使用 `gh-pages`

先安装依赖：
``` js
npm install -D gh-pages
```
package.json 中添加脚本：

``` js
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "deploy:gh": "gh-pages -d /docs/.vuepress/dist",
  "deploy": "npm run build && npm run deploy:gh"
},
```

之后部署时，只要在根目录下执行 `npm run deploy` 即可。


## 4，一些坑

### 4.1，侧边栏的标题显示，就是对应的 Markdown 中的一级标题。

如果没有一级标题，就会以路径命名。

### 4.2，修改文件后，实时重载不一定会生效。

如果修改了文件，页面显示和预期不符，重新 `npm run dev` 试试。

## 5，添加评论

在 [Valine 官网](https://valine.js.org/) 注册，获取 `appId` 和 `appKey`

网上有不同的教程，甚至官网也有教程，但都有 bug，不是功能就是显示的问题。

下面的这种方式虽说不能显示阅读数，但其他都没有问题。

### 5.1，安装依赖
``` js
npm install leancloud-storag valine -S
```

### 5.2，添加代码

在 `docs/.vuepress/enhanceApp.js` 中添加以下代码即可，注意填写自己的 `appId` 和 `appKey`。

``` js
function renderValine(router) {
  // 重新渲染 评论区
  router.afterEach((to, from) => {
    // 页面内，跳转锚点时
    if (to.path == from.path) {
      return
    }
    let $page = document.querySelector('.page')
    let vcomments = document.getElementById('vcomments')
    if (!vcomments) {
      vcomments = document.createElement('div')
      vcomments.id = 'vcomments'
      vcomments.style.margin = '0 auto'
      vcomments.style.maxWidth = '740px'
      vcomments.style.padding = '2rem 2.5rem'

    }
    if ($page && !vcomments) {
      console.log('vcomments', $page)
      $page.appendChild(vcomments)
      // createVisite()
    } else {
      // 获取不到vuepress的page加载完成时的钩子，只能采用笨方法
      setTimeout(() => {
        $page = document.querySelector('.page')
        $page.appendChild(vcomments)
        // createVisite()
        valine()
      }, 500)
    }
    valine()
  })
}

function valine() {
  const Valine = require('valine')
  const leancloudStorage = require('leancloud-storage')
  // require window 
  if (typeof window !== 'undefined') {
    window.AV = leancloudStorage
  }
  // 初始化valine
  new Valine({
    el: '#vcomments',
    appId: 'xxxx-xxx',// your appId
    appKey: 'xxxx', // your appKey
    notify: false, // 邮件提醒 
    verify: false, // 验证码
    avatar: 'mm',
    placeholder: '说点什么吧',
    path: window.location.pathname // 虽然默认就是这个，但是不加会导致不重新加载评论
  });
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 生成静态页时在node中执行，没有document对象
    document && renderValine(router)
  } catch (e) {
    console.error(e.message)
  }
}
```

### 5.3，管理评论


登录 [Leancloud](https://leancloud.cn/dashboard/applist.html#/apps)，选择你创建的应用>存储>选择Class Comment，即可删除评论。