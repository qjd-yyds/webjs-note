# 移动端适配

## 设备物理像素

屏幕宽/分辨率，其中每一份就是 1pt

## css 像素

### px

- pc 机大屏显示器 1px 约等于 0.76 物理像素
- iphone6 手机为例，物理像素 750 分辨率 375 ==> 375 / 750 = 0.5px 1px = 2pt

### rem

- 网页根元素的字体默认是 1rem

### em

- 父元素字体大小为 em

### rpx

- 小程序专用
- iphone6 物理像素 750 分成 750 份每一份就是 1rpx ==>1rpx = 0.5px = 1pt

### vm vh

按照视口，即可视区大小

### %

- 通常相对父元素计算
- 子元素 margin，padding 相对直接父元素的 margin 和 padding
- 定位元素相对直接定位父元素
### 最小字体为12px如何解决
transform：scale 
transform-origin:left top
