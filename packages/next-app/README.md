# next-app

## 两种形式预渲染

- 静态生成
  - getStaticProps：当前页面组件中导出一个 getStaticProps 的 async 函数 next 会在构建时预渲染这个页面组件并把执行结果作为 props 传递给 props，只在 serve 端使用，客户端不执行,不仅生成 html 还生成 json

```ts
type Context = {
  parmas: object; // 包含动态页面的路由参数[id].js 获取{id:1} 和getStaticPath配合使用
  preview: bolean; // 是否处于预览模式
  previewData: object; // 预览数据
};
// 构建时预渲染 ，博客作者查看草稿内容，读者呈现原本的blog，next提供的预览模式，绕过静态生成
export async function getStaticProps(context: Context) {
  return {
    props: {}
  };
}
```

    - getStaticPaths 告诉next需要渲染哪个动态路由

```js
// 构建时预渲染 ，博客作者查看草稿内容，读者呈现原本的blog，next提供的预览模式，绕过静态生成
// pages/posts/[id].js
export async function getStaticPaths(context: Context) {
  return {
    paths: [
      {
        parmas: {
          id: 1
        }
      },
      {
        parmas: {
          id: 2
        }
      }
    ], // 预渲染的页面
    fallback: true
  };
}
```

- 服务端渲染

```js
getServerSideProps 服务端渲染
// 用户每个请求 使用getServerSideProps返回的值ssr页面

```

## 根组件，document 组件在哪里

next 内置了根组件，通过\_app.js 来自定义 app🌈

- 在\_app.js 可以编写页面布局 layout
- 页面切换到时候可以保持数据,保持共享状态
- 使用 componentDidCatch 来进行错误捕获
- 可以放入全局 css
  document 组件需要使用\_document.js
