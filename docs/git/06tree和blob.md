# 06，tree和blob

> 文章中使用的 `git cat-file` 相关命令，参考[04.git文件](https://crane0.github.io/blog/git/04.git%E6%96%87%E4%BB%B6.html#_5%EF%BC%8C%E5%85%B6%E4%BB%96)

## 1，介绍

![git06-1](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit06-1.png)

首先，1个commit只会对应 1个 tree，这个 tree 可以理解为，是那个 commit 创建的快照。

这个快照中，就是一个文件目录，该目录中可能还有嵌套的目录和文件。

所以，目录中的 tree 可以理解为是 1个文件夹，blob 可以理解为是 1个文件。

在 git 的设计中，只要 2个或多个文件完全相同，那就是 1个唯一的 blob，用这个来标识文件。

上图对应的文件展示：

![git06-2](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit06-2.png)


## 2，tree的个数

![git06-3](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit06-3.png)

``` bash
git init watch_git_objects

cd watch_git_objects
mkdir doc
cd doc
echo hello > readme
cd ..

git add doc
```
会发现 `.git/objects` 下多了一个 blob 类型文件，内容就是 readme 的内容

![git06-4](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit06-4.png)

``` bash
git commit -m "add readme"
```

执行 commit 之后，会发现有 4个文件，
1. commit，6652f71，包含了1个tree（暂时命名为**treeA**）
2. tree（**treeA**），315f8050，包含了1个 tree 类型（暂时命名为**treeB**）的 doc 文件。
3. tree（**treeB**），6e17e262，包含了1个 blob 类型（暂时命名为**blobA**）的 readme 文件。

4. blob（**blobA**），ce013625，就是 readme 文件。

![git06-5](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitgit06-5.png)


## 3，git底层的大致运行流程

当添加或者修改了文件并且 add 到暂存区后，首先会根据文件内容创建不同的 blob。

当进行 commit 时，会创建一个 tree 组件把需要的 blob 组件添加进去之后，封装到一个 commit 组件中完成本次提交。

在使用 `git reset --hard [commit_hash]` 恢复到某个特定的版本时，git 会根据这个 commit 组件的 commit_hash 快速的找到 tree 组件，然后根据 tree 找到blob组件，之后对仓库进行还原。

整个过程都是以 hash 和二进制进行操作，所以 git 执行效率很高。
