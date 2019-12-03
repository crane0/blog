# 02，查看 log 相关

## 1.1，简单查看

```
git log
```

## 1.2，只查看 commit 的 message

```
git log --oneline
```
![image](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitlog-1.png)

## 1.3，查看最近的几次

```
// n 可以省略
git log -nx
```

## 1.4，树状展示

```
git log --graph
```
![image](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/gitlog-2.png)

## 1.5，查看所有分支的所有 log
```
git log --all
```

## 1.6，查看其他分支 log
```
git log 其他分支名

// 如果加了 --all ，[other_branch_name] 就无效了。
git log --all [other_branch_name]
```

---

以上所有的命令，都可以合并执行。

注意下面的命令中，`-n2`是所有分支的取前 2个，不是每个分支各取 2个。
```
git log --oneline --all -n2 --graph
```