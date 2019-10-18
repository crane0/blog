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

// function createVisite() {
//   let myspan = `<span id=${window.location.pathname} class="leancloud_visitors" data-flag-title="Your Article Title">
//     <em class="post-meta-item-text">阅读量 </em>
//     <i class="leancloud-visitors-count">1000000</i>
//     </span>`

//   let p = document.createElement('p')
//   p.innerHTML = myspan
//   document.getElementsByClassName('page-edit')[0].appendChild(p)
// }

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
    appId: 'N25Yn9NgUsOoVe3jdG32jG7d-gzGzoHsz',// your appId
    appKey: 'bomOmiKwDxvtxS67spmt58GL', // your appKey
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
