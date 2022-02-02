# 富文本相关 api

### contenteditable

- 所有 html 共有的属性
- 表示元素是否可以被用户编辑
  - true 或者空字符串表示可以编辑
  - false 表示元素不可以被编辑
  - 如果没有这个属性，从父元素继承

### selection

用户选择的文本范围或者插入符号的当前位置

- 文本选区由用户拖拽鼠标经过文字产生，可能横跨多个元素
- 光标由用户点击产生，表示当前插入的位置

```js
window.getSelection();
```

#### 选区

- 锚点 用户开始选择的地方，鼠标按下开始拖拽的地方 和方向有关
  - anchorNode 返回锚点所在的节点
  - anchorOffset 返回当前选区所在节点的第一个和选区的第一个字符偏移
- 焦点 用户结束选择的地方，鼠标松开结束拖拽的地方 和方向有关
  - focusNode 返回焦点所在的节点
  - focusOffset 返回当前选区所在节点的第一个和选区的第一个字符偏移
- 起点 指向选区在文档流中的起始点 和方向无关
- 终点 指向选区在文档流中的终止点 和方向无关

#### 状态

- collapsed 光标锚点焦点在同一个位置
- expand 文本选区锚点和焦点在不同位置
- selection.isCollapsed 当前是否是光标
- selection.collapse(parentNode,offset) 当前的选区收起到一个点，如果当前点可编辑，那么变成光标
- selection.extend(node,offset) 移动焦点到指定点
- selection.collapseToStart() 取消当前选区，光标移动到起始点
- selection.collapseToEnd() 取消当前选区，光标移动到终点
### execCommand
操作可编辑内容区域影响slection
## 事件驱动思想和数据驱动思想
### 事件驱动
+ 外部发出的可以被软件识别的处理动作
+ 通常是异步的如dom事件 ui事件 焦点事件 文本事件 键盘事件 剪贴板事件 拖拽事件
+ 事件捕获 事件冒泡 事件代理
+ 用户交互用事件修改页面： 设计dom监听dom事件==>调用后修改dom jq操作
### 数据驱动
+ MVC 
    - view 界面
    - controller 逻辑
    - model 数据
+ MVVM
view层和model层不发生联系，通过viewmodel发生关系 viewmodel<==>model
    - view
    - viewmodel
    - model