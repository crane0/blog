# 01，git基础

## 1，git 初始化

会在当前目录下，新建和项目名相同的文件夹。
``` bash
git init demo_project
```

如果项目已经有了，那就在项目文件夹的根目录下执行
``` bash
git init
```

执行完成后，在项目的根目录下就会有 `.git` 隐藏文件。


## 2，git 最小配置

配置本地的 `user.name` 和 `user.email`
``` bash
git config --global user.name crane0
git config --global user.email bhad5683126@163.com
```

### 2.1，查看全局配置，

因为还有 local 和 system 配置，所以不加 `--global`，则表示查看所有配置。
``` bash
git config --global --list

// 只查看某个配置
git config --global user.name
```

### 2.2，local 和 global 同时存在，local的会生效

如果原本已经新建了 global 的 `user.name` 和 `user.email` ，在一个项目中，又新建了 local 的 `user.name` 和 `user.email`，

验证方式，`git add commit` 一个文件后，`git status` 查看状态，就可以看到是哪个用户进行的 commit 操作。


## 3，工作区和暂存区

暂存区的存在意义是，可以回退。

`git add` 是将文件从**工作目录--> 暂存区**

`git commit` 是将**暂存区文件 --> 版本历史**

`git add` 后，`git status` 查看文件就是 tracked （跟踪）状态，如果对已经 `git add` 后的文件做了修改，`git status` 查看文件就是 modified （修改）状态，

另外，可以将 add 和 commit 一起执行

> 还写成 git commit -a -m，但不能写成 git commit -m -a

``` bash
git commit -am"commit message"
```

### 3.1，git add -u 和 . 的区别

`git add .` 提交未跟踪、跟踪后已修改的文件。

`git add -u` **只提交已跟踪，并且已修改的文件**。
