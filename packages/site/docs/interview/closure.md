# 闭包(closure)

即重用变量，又保护变量不被污染的一种方式

只要希望给一个函数，保存一个可以反复使用的，又不会被外界污染的专属局部变量，就可以使用闭包

## 如何使用

- 外层函数包裹要保护的变量和函数
- 外层函数返回内层函数对象
- 调用外部函数，用变量接受返回的内层函数对象

```js
function monther() {
  let total = 1000;
  return function (money) {
    total -= money;
    console.log(`还剩${total}元`);
  };
}
const pay = monther();
pay(100); // 还剩900
total = 0; // 即使有人污染全局变量。也不会被污染
pay(100); // 还剩800
```

## 如何用一句话概括闭包如何形成

:::danger
闭包的缺点
外层函数以为释放了作用域对象，容易内存泄露，所以需要及时释放不用的闭包
:::
外层函数调用后，外层函数的作用域对象，被内层函数的作用域链引用着，无法释放，形成闭包对象
## 外层函数返回内部函数的方法
+ return
+ 强行赋值为全局变量
+ 函数放在对象或者数组中返回
## 小试牛刀

:::warning

- 函数内部产生的全局变量，享受函数内部的作用域
- 每次执行一次函数，都会重新创建作用域
  :::
  :::: code-group
  ::: code-group-item 第一题

```js
function fn() {
  var i = 999;
  nadd = function () {
    i++;
  };
  return function () {
    console.log(i);
  };
}
var getN = fn();
getN(); // 999
nadd();
getN(); // 1000
```

:::
::: code-group-item 第二题

```js
function fn() {
  var i = 0;
  return function () {
    i++;
    console.log(i);
  };
}
var get1 = fn();
get1(); // 1
var get2 = fn();
get2(); // 1
get1(); // 2
get2(); // 2
```

:::
::: code-group-item 第三题

```js
function fn() {
  arr = []; // 创建一个全局变量
  for (var i = 0; i < 3; i++) {
    // 复制new function
    arr[i] = function () {
      console.log(i);
    };
  }
}
fn();
arr[1]() // 3
arr[2]() // 3
arr[3]() // 3
```

:::
:::
