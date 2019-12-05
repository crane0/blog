(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_04，-git-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04，-git-文件"}},[s._v("#")]),s._v(" 04，.git 文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-1.png",alt:"git04-1"}})]),s._v(" "),a("h2",{attrs:{id:"_1，head-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1，head-文件"}},[s._v("#")]),s._v(" 1，HEAD 文件")]),s._v(" "),a("p",[s._v("保存的是当前分支的引用，如果修改这个文件，和使用 "),a("code",[s._v("git checkout [branch_name]")]),s._v(" 切换分支是一样的效果。")]),s._v(" "),a("p",[s._v("其实这个引用也是一个 commit 类型。")]),s._v(" "),a("p",[s._v("无论是否处于分离头指针状态，HEAD 始终会指向一个 commit。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-2.png",alt:"git04-2"}})]),s._v(" "),a("h2",{attrs:{id:"_2，config-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2，config-文件"}},[s._v("#")]),s._v(" 2，config 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-3.png",alt:"git04-3"}})]),s._v(" "),a("p",[s._v("注意，如果使用了 "),a("code",[s._v("git config --local user.name xxx")]),s._v("，\n则会保存在这个文件中。")]),s._v(" "),a("p",[s._v("同样的，修改这个文件和使用命令配置，是一样的效果。")]),s._v(" "),a("h2",{attrs:{id:"_3，refs-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3，refs-文件"}},[s._v("#")]),s._v(" 3，refs 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-4.png",alt:"git04-4"}})]),s._v(" "),a("p",[s._v("其中就包含了 heads 和 tags")]),s._v(" "),a("p",[s._v("heads，用于区分分支，")]),s._v(" "),a("p",[s._v("tags，有人会叫它里程碑，比如项目开发到一个大的版本，可以为这次的 commit 打一个 tags，用作标记。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-5.png",alt:"git04-5"}})]),s._v(" "),a("h2",{attrs:{id:"_4，objects-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4，objects-文件"}},[s._v("#")]),s._v(" 4，objects 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-6.png",alt:"git04-6"}})]),s._v(" "),a("p",[s._v("objects 文件夹中的子文件，都是以哈希的前2位命名，结合子文件中的文件名，就是一个文件。")]),s._v(" "),a("p",[s._v("随意找的这个文件，可以看到是之前添加的 index.html 文件")]),s._v(" "),a("h2",{attrs:{id:"_5，其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5，其他"}},[s._v("#")]),s._v(" 5，其他")]),s._v(" "),a("p",[s._v("1，显示版本库对象的类型")]),s._v(" "),a("blockquote",[a("p",[s._v("目前已知有 commit，tree，blob，也就是 git 的 3个核心类型。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -t 08dfb06f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2，显示版本库对象的大小")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -s 08dfb06f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3，显示版本库对象的内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p 08dfb06f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit04-7.png",alt:"git04-7"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);