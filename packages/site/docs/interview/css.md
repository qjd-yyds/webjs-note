# css/html

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
