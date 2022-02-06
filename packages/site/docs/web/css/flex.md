# 弹性布局

现代 web 开发要求，自动计算，自适应

## 概念

- 容器：实现布局效果的父元素
- 项目：实现布局效果的子元素
- 主轴：子元素排列的方向的一条线
- 交叉轴：和主轴垂直的一条线

## 属性

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
