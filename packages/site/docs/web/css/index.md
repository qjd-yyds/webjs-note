# BFC（block formatting context）

页面上只有块级元素才可以参与的一个块级上下文，IFC 则是行内上下文

- 独立渲染区域
- 外面不能影响内部
- 内部也不能影响外部

## 特点

- 上下 margin 会合并
- 左右不会合并
- 计算父级 BFC 高度时，内部的浮动元素高度必须计算在内

## 形成的条件

- float 的值不是 none
- position 的值不是 static 或者 relative
- display 的值是 inline-block，table-cell，flex，table-caption 或者 inline-flex
- overflow 的值不是 visible

## 解决 margin 合并，使用 BFC 解决

- 外层包一个新的元素 让他变成 BFC 如 overflow：hidden。缺点：内部自由子元素超出父元素也能显示，就冲突了
- 使用伪元素。优点：不隐藏内容，不添加高度，不影响高度

```css
父元素:before {
  content: '';
  display: 'table';
}
```

## 解决垂直方向 margin 溢出

子元素设置 margin-top，超出父元素的范围，会变成父元素的 margin-top

如何解决

- 设置父元素 overflow：hidden
- 父元素添加透明上边框，边框可以阻止 margin 溢出。缺点：会影响宽高
- 使用 padding-top 代替 margin-top，padding 也可以阻止 margin 溢出，但是在默认的盒子中，会影响高度
- 第一个子元素之前添加空的 table，table 天生形成 BFC
- 使用伪元素代替空的 table

## 左定宽，右边自适应

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
