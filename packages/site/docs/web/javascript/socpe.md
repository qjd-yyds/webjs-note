# 作用域 和 作用域链

::: danger 警告
js 底层只有关联数组没有堆栈
js中有规定一个变量只能存一个值，如果存一个对象，这个对象存在当前内存外面，存的是一个指向这个内存的值
:::

## 作用域 socpe

变量的可用范围

- 全局作用域 全局作用域中存在全局变量

  - 优点：可以反复使用
  - 缺点：全局污染

- 函数作用域 只有函数的{}才能形成作用域

## 作用域链 socpe chain
::: tip
 function foo() {} === new Function() 开辟一个内存 0x9091
:::

js 规定，一个函数既可以用自己的作用域变量，也可以用外层的作用域

在定义函数时，就已经定死的作用域链

## 小试牛刀

::::code-group
:::code-group-item 第一题

```js
var a = 10;
function foo() {
  var a = 100;
  a++;
  console.log(a);
}
foo(); // 101
console.log(a); // 10
```

:::
:::code-group-item 第二题

```js
var a = 10;
function foo() {
  a = 100;
  a++;
  console.log(a);
}
foo(); // 101
console.log(a); // 101
```

:::
:::code-group-item 第三题

```js
var a = 10;
function foo(a) {
  a++;
  console.log(a);
}
foo(a); // 11
console.log(a); // 10
```

:::
::::

## 作用域的本质

在 js 中作用域和作用域链本质也是对象结构,作用域链是一个对象数组

- 全局作用域在浏览器环境下 是 window
- 函数作用域：js 在函数执行的时候临时创建的一个对象，调用完了以后自动销毁
  ::: tip
  函数作用域对象也叫活动的对象(active object)，在和人吹牛皮的时候可以说 AO
  :::