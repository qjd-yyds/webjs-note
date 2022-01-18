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
4. 通过renderToString 渲染后的app字符串传入 renderToStaticMarkup静态生成的ducument中
5. 使用hydrate 优化

```js
ReactDomServer.renderToString; // 动态渲染部分root的子元素
ReactDomServer.renderToStaticMarkup; // 静态渲染doucment组件，基础html
```
