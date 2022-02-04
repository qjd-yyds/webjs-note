# css/html

## 高度坍塌

子元素浮动，不占普通文档流，父元素失去支撑，造成高度坍塌

### 如何解决高度坍塌

- 父元素设置 overflow：hidden。强制所有内部元素的浮动和 margin
- 尾部添加一个空的元素 设置 clear：both。利用父元素必须包裹非浮动元素和 clear：both 属性。但是多了一个看不见的元素，影响后续查找
- 父元素浮动
- 父元素末尾伪元素设置 clear：both,有些浏览器的 table 有默认高度，使用 height：0

```css
父元素::after {
  content: '';
  display: 'table';
  clear: both;
  height: 0;
}
```

## BFC（block formatting context）

页面上只有块级元素才可以参与的一个块级上下文，IFC 则是行内上下文

- 独立渲染区域
- 外面不能影响内部
- 内部也不能影响外部

### 特点

- 上下 margin 会合并
- 左右不会合并
- 计算父级 BFC 高度时，内部的浮动元素高度必须计算在内

### 形成的条件

- float 的值不是 none
- position 的值不是 static 或者 relative
- display 的值是 inline-block，table-cell，flex，table-caption 或者 inline-flex
- overflow 的值不是 visible

### 解决 margin 合并，使用 BFC 解决

- 外层包一个新的元素 让他变成 BFC 如 overflow：hidden。缺点：内部自由子元素超出父元素也能显示，就冲突了
- 使用伪元素。优点：不隐藏内容，不添加高度，不影响高度

```css
父元素:before {
  content: '';
  display: 'table';
}
```

### 解决垂直方向 margin 溢出

子元素设置 margin-top，超出父元素的范围，会变成父元素的 margin-top

如何解决

- 设置父元素 overflow：hidden
- 父元素添加透明上边框，边框可以阻止 margin 溢出。缺点：会影响宽高
- 使用 padding-top 代替 margin-top，padding 也可以阻止 margin 溢出，但是在默认的盒子中，会影响高度
- 第一个子元素之前添加空的 table，table 天生形成 BFC
- 使用伪元素代替空的 table

### 左定宽，右边自适应

左侧浮动，右侧使用 overflow：hidden，通过形成 BFC，左边的浮动无法进入右边，右边的不能进入浮动元素的下方

```css
.left {
  float: left;
  width: 200px;
}
.right {
  overflow: hidden;
}
```

## 弹性布局

现代 web 开发要求，自动计算，自适应

### 概念

- 容器：实现布局效果的父元素
- 项目：实现布局效果的子元素
- 主轴：子元素排列的方向的一条线
- 交叉轴：和主轴垂直的一条线

### 属性

必须在容器上设置 display：flex
::: tip
如果需要让父元素显示为行内元素属性，和其他元素同一行，可以使用 inline-flex
:::
父元素属性<Badge text="统一设置子项目"></Badge>

- flex-direction 改变主轴方向和排列方向
  - row 默认
  - row-reverse 主轴从左到右反转变成从右到左
  - column 主轴变成从上倒下
  - column-reverse 主轴变成从上到下反转到从下到上
- flex-wrap 是否换行
  - nowrap 默认 不换行
- flex-flow 控制方向 其实就是上面两个属性的简写
  - flex-flow: flex-direction flex-wrap
- flex-content 主轴上的对其方式
  - flex-start 从主轴起点对其
  - flex-end 从主轴终点对其
  - center 主轴居中
  - space-between 两端对其
  - space-around 均匀分布
- align-items 交叉轴的对其方式
  - flex-start 从交叉轴起点对其
  - baseline 文本基线对其
  - center 交叉轴居中
  - stretch 如果项目未设置尺寸，交叉轴上占满空间

子元素属性<Badge text="自定义子项目"></Badge>

- order 值越小越靠近起点
- flex-grow 如果容器有足够空间，放大项目，值为整数
- flex-shrink 缩小
- align-self 单独设置当前项目在交叉轴上的对其方式

## 居中实现

### 水平居中

- 如果父级为块级元素，子元素为行内元素，内容由内容撑开，text-align：center
- 子元素是块元素，父元素是块元素，子元素设置了宽度
  - 子元素设置 margin：0 auto
  - 父元素使用 padding 或者 margin 计算 （父宽-子宽）/ 2 空白区
  - 定位 left：50% margin-left：子宽一半或者 transform：translateX（-50%）
- 弹性布局

### 垂直居中

- 子元素是行内元素
  - 单行 line-height
  - 多行 父元素设定 dispaly：inline/inline-block/table-cell vertical-align：middle
- flexbox
- margin，padding 计算计算 （父宽-子宽）/ 2
- 定位 top：50% margin-top：子高一半或者 transform：translateY（-50%）

### 垂直和水平居中

- 定位
- flex

## 移动端适配

### 设备物理像素

屏幕宽/分辨率，其中每一份就是 1pt

### css 像素

#### px

- pc 机大屏显示器 1px 约等于 0.76 物理像素
- iphone6 手机为例，物理像素 750 分辨率 375 ==> 375 / 750 = 0.5px 1px = 2pt

#### rem

- 网页根元素的字体默认是 1rem

#### em

- 父元素字体大小为 em

#### rpx

- 小程序专用
- iphone6 物理像素 750 分成 750 份每一份就是 1rpx ==>1rpx = 0.5px = 1pt

#### vm vh

按照视口，即可视区大小

#### %

- 通常相对父元素计算
- 子元素 margin，padding 相对直接父元素的 margin 和 padding
- 定位元素相对直接定位父元素
### 最小字体为12px如何解决
transform：scale 
transform-origin:left top
## 三栏布局方式两边固定中间自适应

- margin 负值法 左右两栏采用负 margin 中间也是浮动宽度 100%包裹
- 自身浮动法 左栏左浮动 右栏右浮动 中间栏放在最后
- 绝对定位法 左右两栏用绝对定位，固定在左右两侧，中间用 margin 撑开
- flex 左右两端固定宽 中间 flex：1

## css 的选择器

- 标签选择器(div p)
- 类选择器(class="header")--.header,
- id 选择器(id="header")--#header
- 全局选择器(\*)
- 伪类选择器(:after,:before)
- 继承选择器(div p)
- 后代选择器(A>B)
- 任意选择器(A,B)
- 子代选择器(:nth-child(n) div+div)
