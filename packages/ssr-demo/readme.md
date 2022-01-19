# ssr-demo

## 事件不响应

- 服务端没有 dom，没有事件绑定
- 服务端返回的是字符串，字符串不能绑定事件
- 服务端没有返回 JavaScript
- 浏览器的加载只有 html，没有 js 去加载执行

## node 服务器响应客户端渲染页面

1. 入口 html，提供 root
2. 入口 js 执行，react 客户端渲染
3. app 内容渲染到 html
4. webpack 构建

## 实现 ssr 同构渲染

1. 服务端渲染替代 static/index.html
2. 服务端返回的数据这个时候还是空的
3. 服务端继续渲染 appjs 里的内容
4. 通过 renderToString 渲染后的 app 字符串传入 renderToStaticMarkup 静态生成的 ducument 中
5. 使用 hydrate 优化

```js
ReactDomServer.renderToString; // 动态渲染部分root的子元素
ReactDomServer.renderToStaticMarkup; // 静态渲染doucment组件，基础html
```

## 何时异步请求

### 客户端请求

推荐

- componentdidmount 或 useEffect

不推荐

之前版本是不分配权量一次渲染

过期警告 react17 被移除，可能多次执行。分片渲染 会重新执行 render 之前的所有生命周期函数，所以会出现多次执行

- componentwillmount 执行后立即执行 render 可能数据用不到
- componentwillReactiveProps
- componentwillUpdate

### 服务端请求
路由获取前获取数据

### 数据共享

防止首次加载后，服务端已经请求到数据，客户端重复数据请求

使用window全局变量来传递数据