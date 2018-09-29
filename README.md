#关于Vue的一些学习感想(第一次作业)

因为自己之前也没有接触过其它开发框架，所以好处和坏处仅基于Vue本身。

---

##首先是优点

###两个关键词

粗略阅读过一些学习资料后，我对Vue的感觉可以总结为两个词，**简单易学**和**响应式**。

###Vue学起来的确比较简单

Vue的简单体现在几个方面：

* API比较少
* 语法十分灵活
* 它的教程网站在百度最显眼的位置，而且制作很精美

在Vue中，每一个Vue应用都是通过用 `vue()`函数创建一个新的**Vue实例**开始的，这样专注于一使VueAPI的规模不会太大。

语法的灵活表现得十分明显。在使用`v-bind:class`来动态切换多个class时可以使用三种不同的形式。

 直接传入多个属性：

    <div class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>

和如下data：

    data: {
        isActive: true,
        hasError: false
    }

绑定度数据对象不必内联在模板里：

    <div v-bind:class="classObject"></div>

    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }

在这里也可以绑定一个返回对象的计算属性：

    <div v-bind:class="classObject"></div>

    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }

最后一个对我来说的确是它容易学习的原因之一。

###Vue是响应式的

我学习Vue的内容大致有：

* 模板语法
    * 插值
    * 指令
* 计算属性和侦听器
    * 计算属性
    * 侦听器
* Class与Style绑定
    * 绑定HTML Class
    * 绑定内联样式

正如Vue教程网站中说的那样
>Mustache 标签将会被替代为对应数据对象上 `msg` 属性的值。无论何时，绑定的数据对象上 `msg` 属性发生了改变，插值处的内容都会更新。（插值）<br>
>指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。(指令)<br>
>Vue 知道 `vm.reversedMessage` 依赖于 `vm.message`，因此当 `vm.message` 发生改变时，所有依赖 `vm.reversedMessage` 的绑定也会更新。（计算属性）<br>
>Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。（侦听器）<br>
>`<div v-bind:class="{ active: isActive }"></div>`  上面的语法表示 `active` 这个 `class` 存在与否将取决于数据属性 `isActive` 的 *truthiness*。
Vue完全是响应式的。

---

##然后是缺点（来源于百度）

1. 生态环境相比于React差
2. IDE支持不足
3. 缺乏高阶教程与文档
4. 语法灵活，但很容易造成代码风格不统一所带来的维护困难

#写在最后

初学者水平有限，可能很多地方有错，请见谅。  以上大部分内容来自[这里](https://cn.vuejs.org/v2/guide/index.html)

