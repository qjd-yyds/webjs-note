# 居中实现

## 水平居中

- 如果父级为块级元素，子元素为行内元素，内容由内容撑开，text-align：center
- 子元素是块元素，父元素是块元素，子元素设置了宽度
  - 子元素设置 margin：0 auto
  - 父元素使用 padding 或者 margin 计算 （父宽-子宽）/ 2 空白区
  - 定位 left：50% margin-left：子宽一半或者 transform：translateX（-50%）
- 弹性布局

## 垂直居中

- 子元素是行内元素
  - 单行 line-height
  - 多行 父元素设定 dispaly：inline/inline-block/table-cell vertical-align：middle
- flexbox
- margin，padding 计算计算 （父宽-子宽）/ 2
- 定位 top：50% margin-top：子高一半或者 transform：translateY（-50%）

## 垂直和水平居中

- 定位
- flex