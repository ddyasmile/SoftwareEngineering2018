# <font color=#ff7f00>初识APP</font>

目前主流的应用程序有三大类：

![picture1](https://img-blog.csdn.net/20160326162834667 "三种APP")

---

## <font color=#ff7f00>*一、什么是Native APP*</font>

&emsp;Native APP即原生应用，就是我们一般所称的客户端，是针对不同手机系统单独开发的本地应用，可以通过各个应用商店下载安装。在技术实现上一般采用针对操作系统的特定语言进行编写，如：使用Objective-c开发IOS应用，使用Java+Android开发android应用。

### 优点：

>* 运行效率高
>* 可以调用各种系统资源
>* 用户体验很好

### 缺点：

>* 开发成本高（针对不同平台需要不同的技术）
>* 维护成本高（用户手动更新，历史版本也需要维护）
>* 发布速度慢（需要通过AppStore审核）

&emsp;基于系统使得原生应用能够轻松、高效地调用设备资源，但也使开发者需要学习多种不同平台的相关技术。

![picture2](https://anoda.mobi/wp-content/uploads/2018/06/wsi-imageoptim-Native-2.png "平台差异")

## <font color=#ff7f00>*二、什么是Web APP*</font>

&emsp;Web App又叫Web应用，简单的说就是一个触屏版的网站。Web应用完全用HTML、JavaScript和CSS等Web技术开发，不需要下载安装，通过移动设备的浏览器来访问。

### 优点：

>* 开发成本低
>* 更新方便
>* 跨平台性

### 缺点：

>* 较差的和较慢的性能体验
>* 无法获取系统级别的通知，提醒，动效等等

&emsp;虽然Web应用开发比较简单而且容易实现跨平台，但是依附于浏览器不仅使其效率变差而且对设备资源的调用有诸多限制。

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;![picture3](https://www.messagemuse.com/images/web-app-development.png "web技术栈")

## <font color=#ff7f00>*三、什么是Hybrid APP*</font>

&emsp;Hybrid App又叫混合应用，是一种介于Native App、Web App之间的App，它虽然看上去是一个Native App，但只是一个UI WebView，里面访问的是一个Web App。Hybrid App实质是伪造一个浏览器的apk/ipa原生程序，并运行了一个Web APP。像原生应用一样，它需要通过应用商店下载安装；也像Web应用一样，它可以使用HTML、Javascript、CSS开发，简单易学。

### 优点：

>* 综合了开发效率和运行效率
>* 支持跨平台

### 缺点：

>* 运行速度不如原生应用
>* 仍然是刚兴起的一门技术，尚未成熟。

&emsp;Hybrid App兼具了Native App的所有优势，也兼具了Web App使用HTML5跨平台开发低成本的优势。Hybrid App这个领域虽然还处于比较初期的阶段，但是已经有很多优秀的公司和技术团队在致力于跨平台开发移动应用中间件技术的研究，给了开发者众多选择。开发者可以根据实际的项目需求来选择中间件。

![picture4](https://www.uxteam.com/wp-content/uploads/2017/04/Hybrid-Apps-Feature2.jpg "混合应用")

## <font color=#ff7f00>*四、Web App、Hybrid App、Native App比较*</font>

| 条件\应用程序 | Web App | Hybrid App | Native App |
| :---: | :---: | :---: | :---: |
| 开发成本 | 低 | 中 | 高 |
| 维护更新 | 简单 | 简单 | 复杂 |
| 体验 | 差 | 优 | 优 |
| Store或market认可 | 不认可 | 认可 | 认可 |
| 安装 | 不需要 | 需要 | 需要 |
| 跨平台 | 优 | 优 | 差 |
| 开发语言 | 网页语言HTML5+JS | 网页或原生语言 | 原生语言ObjectC、java、net等 |
| 跨平台性 | 高 | 高 | 低 |
| 设备能力 | 低 | 高 | 高 |
| 向后兼容 | 好 | 好 | 差 |



&emsp;通过上面的表格可以看出，三种开发应用的方法都是各有优劣，并没有哪一种开发方法可以适用于所有的情况，不过可以看出来，混合应用因为兼具另外二者的优势，正在被越来越多的公司和开发者所认同，或许会成为未来新世界的王。

---

**参考：**

* [Hybird App（一）----第一次接触](https://blog.csdn.net/zlts000/article/details/50987265#%E4%B8%80-%E4%BB%80%E4%B9%88%E6%98%AFnative-app)
* [Native App、Web App 还是Hybrid App？](https://www.biaodianfu.com/native-app-or-web-app-or-hybrid-app.html)
* [Hybird APP百度百科](https://baike.baidu.com/item/hybrid%20app)