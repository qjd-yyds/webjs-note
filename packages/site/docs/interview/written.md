# 笔试题

## 闭包

### add（1，2，3）

实现一个函数

- alert(add(1)(2)(3)) 输出 6
- alert(add(2)(3)(4)) 输出 8

::: details 查看代码

```js
function add(num) {
  let sum = num;
  function fn(num) {
    sum += num;
    return fn;
  }
  fn.toString = function () {
    return sum;
  };
  return fn;
}
alert(add(1)(2)(3));
```

:::

### 4\*4

动态生成一个 4\*4 表格，每次点击一个格子，增加次数，每个格子不干扰，次数用弹框展示

::: tip 注意
这里使用函数自执行，防止全局变量污染
:::
::: details 查看代码

```js
(function init() {
  var container = document.createElement('div'); // 创建一个容器
  var arr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      // 创建cell 每一个cell添加一个方法，通过闭包存储下标的值
      var cell = document.createElement('div');
      cell.innerHTML = `(${i},${j})`;
      container.appendChild(cell);
      cell.onclick = (function (i, j) {
        return function () {
          arr[i][j]++;
          alert(arr[i][j]);
        };
      })(i, j);
    }
  }
  // 添加到页面
  document.body.appendChild(container);
})();
```

:::

### self_this

```js
var name = 'window';
var p = {
  name: 'pertter',
  getName: function () {
    let self = this;
    return function () {
      return self.name;
    };
  }
};
var getName = p.getName();
var _name = getName();
console.log(_name); // ?
```

::: details 查看答案
pertter
:::

### fun(n,o)

```js
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  };
}
var a = fun(0); // ?
a.fun(1); // ?
a.fun(2); // ?
a.fun(3); // ?
var b = fun(0); // ?
b.fun(1).fun(2).fun(3); // ?
var c = fun(0).fun(1); // ?
c.fun(2); // ?
c.fun(3); // ?
```

::: details 答案

```js
var a = fun(0); // undefind
a.fun(1); // 0
a.fun(2); // 0
a.fun(3); // 0
var b = fun(0); // undefind
b.fun(1) // 0
  .fun(2) // 1
  .fun(3); // 2
var c = fun(0).fun(1); // undefind 0
c.fun(2); // 1
c.fun(3); // 1
```

:::

### btns

页面上存在五个按钮，点哪个按钮，弹出这是第几个按钮
::: details 查看代码
<CodeGroup>
<CodeGroupItem title="es5">

```js
const btns = document.getElementsByTagName('button');
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = (function (i) {
    return function () {
      alert(i);
    };
  })(i);
}
```

  </CodeGroupItem>

  <CodeGroupItem title="es6" active>

```js
const btns = document.getElementsByTagName('button');
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    alert(i);
  };
}
```

  </CodeGroupItem>
</CodeGroup>

:::

### let timeout

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 50);
}
```

:::: details 答案
::: tip
如果 var 改成 let 输出 0，1，2，3，4
:::
输出 5 个 5
::::

### bind

使用原生 call 实现 bind
:::tip
提示：先自己手写一下，再来看答案！
:::

::: details 代码

```js
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('请使用function');
  }
  const args1 = Array.prototype.slice.call(arguments, 1);
  let fn = this; // 存储一下子调用函数
  return function foo() {
    // 类数组复制成数组
    var args2 = Array.prototype.slice.call(arguments);
    if (this instanceof foo) {
      return new fn(args1.concat(args2));
    }
    fn.apply(context, args1.concat(args2));
  };
};
```

:::

### 匿名函数自调用和 this 闭包的运用

:::tip
匿名函数调用 this 指向 window
:::

```js
var a = 2;
var obj = {
  a: 4,
  fn1: (function () {
    this.a *= 2;
    var a = 3;
    return function () {
      this.a *= 2;
      a *= 3;
      console.log(a);
    };
  })()
};
var fn1 = obj.fn1;
console.log(a);
fn1();
obj.fn1();
console.log(a);
console.log(obj.a);
```

:::: details 答案
4,9,27,8,8
::::

## 对象和 this

### 判断一个值的是不是数组的方法

- typeof 判断基础类型
- Array.isPrototypeOf(child)
- Obejct.getPrototypeOf(child)
- obj.constructor == Array
- obj instanceof Array
- Object.prototype.toString.call(obj) [object Array]
- Array.isArray(obj)

### 引用题目 1

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a);
console.log(b);
a.n = 3;
console.log(b);
```

:::: details 答案
::: tip
浏览器打印的是，因为展开后打印的是地址

1. { n: 2 }
2. { n: 1,x:{n: 3} }
3. { n: 1,x:{n: 3} }
   :::

4. { n: 2 };
5. { n: 1,x:{n: 2} }
6. { n: 1,x:{n: 3} }
   ::::

### tostring 题目 2

```js
var a = {};
var b = {
  key: 'a'
};
var c = {
  key: 'c'
};
a[b] = '123';
a[c] = '456';
console.log(a[b]); // ？
```

::::details 答案
456 对象存储的是字符串，对象 tostring 返回的是[object Object]
::::

### prototype 题目 3

```js
function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

::::details 答案
4,2,1

需要注意的是 this 创建的是指向新的对象
::::

### this 题目 4

```js
var x = 0;
var foo = {
  x: 1,
  bar: function () {
    console.log(this.x);
    var that = this;
    return function () {
      console.log(this.x);
      console.log(that.x);
    };
  }
};
foo.bar();
foo.bar()();
```

::::details 答案
foo.bar(); // 1

foo.bar()(); // 1,0,1
::::

### proto 题目 5

```js
function A() {}
function B() {
  return new A();
}
A.prototype = new A();
B.prototype = new B();
var a = new A();
var b = new B();
console.log(a.__proto__ === b.__proto__); // true
```

### new 操作符-声明提前-题目 6

```js
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

:::: details 答案
2,4,1,1,2,3,3
::::
