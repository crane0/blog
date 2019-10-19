# 001 阿里OSS+picGO的使用

开始决定搭建自己的博客后，第2件事就是 Markdown 图床的问题，

原本打算用七牛云，因为公司有个项目用的是这个，注册一通流程后，发现实名认证需要3天审核。。。

于是打算再试试 [阿里OSS](https://www.aliyun.com/product/oss/)，果然阿里系的支付宝直接就可以认证，通过后就可以使用了。

## 1，阿里云 OSS 的配置使用

### 1.1，基础使用流程

1. 注册后，在[主页](https://www.aliyun.com/product/oss/)可以选择购买套餐，因为只存图，下面的应该够了。

![阿里云OSS套餐](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/阿里云OSS套餐.png)


2. 主页菜单中进入控制台，左上角面包屑导航，选择对象存储 OSS，进入页面后左侧点击创建Bucket：

![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/创建Bucket.png)

Bucket 页面，需要注意，
- 因为购买的地域是中国大陆通用，而在下面的区域选择列表中，并没有这一项，还会提示你没有流量包，这是bug，不影响提交。
- 读写权限中，选择为公共读。因为图片要再页面中显示的。
![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/Bucket页面.png)

3. 在控制台的对象存储 OSS页面，左侧就会有刚刚新建的 Bucket。进入后，就可以在文件管理菜单中新建目录，或是直接上传图片了。

### 1.2, 设置 picGO 的前置工作

在基础流程的第2步，创建 Bucket 的旁边，是 Access Key 的入口，

![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/AccessKey.png)

进入后[创建用户](https://help.aliyun.com/document_detail/28637.html?spm=a2c4g.11186623.2.16.5abf14433qoO3R)时注意：
- 创建用户后，就会生成 AccessKey ID 和 AccessKeySecret 用于配置 picGO。要妥善保存，因为之后在控制台的页面是找不见的。
- 设置访问方式为： **编程访问**。

添加完用户后，还要为其设置下面2个权限！

![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/oss权限.png)


## 2，picGO 的配置使用

[下载地址](https://github.com/Molunerfinn/PicGo/releases)

### 2.1,，图床配置：

![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/picgo.png)

- 存储区域是指：在进入OSS管理控制台，并进入目标存储空间后，地址栏中 bucket 后面的就是。
```
https://oss.console.aliyun.com/bucket/oss-cn-beijing/xxx
```
- 存储路径是指：在进入OSS管理控制台，并进入目标存储空间后，文件管理菜单中的某个目录（目录前不要带 / ）。如果不指定，就是文件管理菜单的根目录。

### 2.2，使用

方法很简单，在上传区中上传后，在相册中就可以直接复制链接使用！

另外，如果上传时出错，就要排查上面的配置中，是否有错误。

---

### [Star](https://github.com/crane0/blog)，您的支持是我更新的动力~

