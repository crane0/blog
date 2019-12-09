# 02，查看 log 相关

## 1，简单查看

``` bash
git log
```

## 2，只查看 commit 的 message

``` bash
git log --oneline
```
![image](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitlog-1.png)

## 3，查看最近的几次

``` bash
// n 可以省略
git log -nx
```

## 4，树状展示

``` bash
git log --graph
```
![image](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitlog-2.png)

## 5，查看所有分支的所有 log

``` bash
git log --all
```

## 6，查看其他分支 log

``` bash
git log [other_branch_name]

// 如果加了 --all ，[other_branch_name] 就无效了。
git log --all [other_branch_name]
```

---

以上所有的命令，都可以合并执行。

注意下面的命令中，`-n2`是所有分支的取前 2个，不是每个分支各取 2个。

``` bash
git log --oneline --all -n2 --graph
```

## 7，图形化页面

``` bash
gitk
```
会打开一个图形化页面。

下图是图形化页面左下角的显示，注意到会有 Author 和 Committer。

一般情况下这 2个都是相同的，如果要将其他分支的某个commit，拿到当前分支（这个操作叫 cherrypick），则会生成一个新的 commit，

此时，Author 就是之前 commit 的人，Committer 就是自己。

![gitk](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitk.png)