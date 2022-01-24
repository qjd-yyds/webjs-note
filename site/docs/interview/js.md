---
title: about1
sidebar: 'auto'
---

# javascript

## 数据类型

### js 中什么是基础数据类型什么是引用数据类型

- **基础数据类型** Number String Boolean Null Symbol bigInt
- **引用数据类型** Object 类型 细分的话 Object Array Date Function Regexp

### 他们是怎么存储的

基本数据类型存在**栈内存**里，引用数据类型存在**堆内存**中，栈中保存着数据引用的地址，这个引用地址指向对应的数据，以便更好查找堆内存的数据

---

顺便一提，栈内存是自动分配内存，堆内存是动态分配内存的，不会自动释放，所以使用对象，如果不需要了需要手动置为 null 来释放内存

## 类型转换

### 为什么 0.1 + 0.2 > 0.3

在 js 中浮点数 使用 64 位固定长度来存储，其中**1 位表示符号位，11 位表示指数位，52 位尾数位** 只有 52 位表示尾数位

js 运算会先转成二进制运算 再转换成 10 进制
**[10 进制转成 2 进制方法](https://jingyan.baidu.com/article/425e69e6e93ca9be15fc1626.html)**

0.1 二进制转换 ==> 0.000110011001100（1100 循环）

0.2 二进制转换 ==> 0.001100110011001(0011 循环)

0.1 + 0.2 ==>转换成二进制 0.0100110011001100110011001100110011001100110011001100111 ==> 转换成十进制 0.300000004

对于比较大小可以提供一个浮点精度误差范围 Number.EPSILON ?= Math.pow(2,-52)

### 为什么 0.2 + 0.3 = 0.5

因为 0.2 + 0.3 转成二进制后尾数位大于 52 位，js 只取 52 位所以加起来二进制为 0.1000000000000000000000000000000000000000000000000000

0.2 和 0.3 转换成二进制 尾数位刚好 52 位 相加肯定大于 52 位，恰好前 52 位为 0 所以截取后为 0.1000000000000000000000000000000000000000000000000000
也就是 0 + 1 \* 2^-1 = 0.5

### 既然 0.1 不是 0.1 了，console.log(0.1) 还是 0.1

因为 console.log(0.1) 会进行二进制转换，再转成十进制，然后转成字符串，最后打印出来一个近似值

## 判断数据类型有几种方法

- **typeof** 缺点 typeof null 为 object 无法区分 null 还是 object

  - typeof undefind // undefined
  - typeof '10' // string
  - typeof 10 // number
  - typeof false // boolean
  - typeof Symbol() // symbol
  - typeof Function // function
  - typeof null // object
  - typeof [] // object
  - typeof {} // object

- **instanceof** 缺点只能判断对象是否存在目标对象的原型链上面

```js
function Foo() {}
const f1 = new Foo();
const d = new Number(1);
console.log(f1 instanceof Foo); // true
console.log(d instanceof Number); // true
console.log(123 instanceof Number); // false 不能判断字面量基本数据类型
```

- **constructor**

```ts
const d = new Number(1);
const e = 1;
function fn() {
  console.log('kanke');
}
const date = new Date();
const arr = [1, 2, 3];
const reg = /[nbc]at/gi;

console.log(d.constructor); // f Number() {[native code]}
console.log(d.constructor.name); // Number
console.log(e.constructor.name); // Uncaught SyntaxError: Invalid or unexpected token
console.log(fn.constructor.name); // Function
console.log(date.constructor.name); // Date
console.log(arr.constructor.name); // Array
console.log(reg.constructor.name); // RegExp
console.log(null.constructor); // 基本类型判断不了，不是构造函数 TypeError: Cannot read properties of null (reading 'constructor')
```

- **Object.prototype.toString.call()**

```js
const foo = function () {};
const date = new Date();
const arr = [123, 123, 123];
const reg = /test/;
const obj = {};
Object.prototype.toString.call(null); // '[object Null]'
Object.prototype.toString.call(undefind); // '[object Undefind]'
Object.prototype.toString.call(123); // '[object Number]'
Object.prototype.toString.call('123'); // '[object String]'
Object.prototype.toString.call(true); // '[object Boolean]'
Object.prototype.toString.call(foo); // '[object Funtion]'
Object.prototype.toString.call(date); // '[object Date]'
Object.prototype.toString.call(date); // '[object Date]'
Object.prototype.toString.call(arr); // '[object Array]'
Object.prototype.toString.call(arr); // '[object Array]'
Object.prototype.toString.call(reg); // '[object RegExp]'
Object.prototype.toString.call(obj); // '[object Object]'
```

## 手写一个 instanceof

```js
// 原理查找原型上数据
function myInstanceof(L, R) {
  let RP = R.prototype;
  let LP = L.__proto__;
  while (true) {
    if (LP === null) {
      return false;
    }
    if (LP === RP) {
      return true;
    }
    LP = LP.__proto__;
  }
}
console.log(myInstance({}, Object)); // true
```

## 为什么 typeof null 为 object

在 javascript 中不同的对象都是二进制存储的，如果二进制前三位是 000 那么 js 就判断他是 object 类型，null 的二进制全是 0，所以判断为 object
这个 bug 是 js 诞生时产生的 bug

- 000 对象
- 010 双精度类型
- 100 字符串类型
- 110 布尔类型

## == 和===的区别

=== 是严格相等，比较值和类型

== 是非严格相等，比较规则

- Null == Undefind true
- String == Number 先把 string 转成 number 再比较大小
- Boolean == Number 先吧 Boolean 转成 number 再比较
- Object == String,Number,Symbol =>Object 转换成原始类型

## 手写 call apply bind

- call 的实现

```js
Function.prototype.call = function (context) {
  // 首先判断他是不是一个函数
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  // 存储当前的this指向,如果当前没传入默认指向window
  context = context || window;
  // 存储当前的函数
  context.fn = this;
  // 截取传入的参数，保存
  const args = Array.from(arguments).slice(1);
  // 执行这个方法
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

- apply 的实现

```js
Function.prototype.apply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  context = context || window;
  context.fn = this;
  let result;
  // 传入的是一个数组所以判断是否穿参
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
```

- 实现 bind

```js
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('必须是一个function');
  }
  const _this = this; // 需要被bind调用的函数
  const args = Array.from(arguments).slice(1);
  // bind需要返回一个函数
  return function fn() {
    // 首先判断这个fn是不是new实例化的，新创建的实例需要吧prototype添加到_this.proptotype
    if (this instanceof fn) {
      // 当前是new的
      return new _this(...args, ...arguments);
    } else {
      return _this.apply(context, args.concat(...arguments));
    }
  };
};
```

## 字面量创建对象和 new 创建的对象有什么区别

字面量创建的对象更加方便，不需要像 new 创建的对象一个个创建 key，方便阅读，
不需要作用域解析，速度更加快

## 实现一个 new

```js
function myNew(fn, ...args) {
  // 创建一个新对象
  let obj = {};
  // 改变对象的原型指向
  obj.__proto__ = fn.prototype;

  let result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}
```

## 什么是作用域

变量和函数可执行的范围称为作用域
作用域是一套规则，确定了在何处和如何查找这些变量，如果查找的目的是赋值，那么会进行 LHS 查询，如果是获取值会进行 RHS 查找，赋值操作符会进行 LHS 查找，=操作符或者函数调用时传入的值会触发关联作用域的赋值操作。

js 引擎在代码执行前对其编译，在这个阶段 var a = 2 会被分解成两个独立步骤

- var a 在其作用域声明变量，会在最开始的阶段，代码执行前进行
- a = 2 会进行 LHS 的查询变量 a，并对其进行赋值

LHS 查询和 RHS 查询会在当前作用域执行,如果有需要会像上一层作用域继续查找目标标识符，这样每次向上执行最后抵达全局作用域（顶层），无论有没有找到都会停止

不成功的 RHS 引用会报 ReferenceError 异常，不成功的 LHS 引用会隐式创建一个全局变量，把当前 LHS 的目标引用作为标识符。严格模式下抛出 ReferenceError

## 执行栈 执行上下文

先进后出，当进入一个执行环境就会创建他的执行上下文，然后压栈，当执行完成后会销毁他的上下文，进行弹栈，栈底永远是全局环境的上下文，栈顶是当前正在执行的环境上下文，浏览器关闭的时候全局执行上下文才会弹栈

## 什么是闭包，闭包有什么作用，闭包的应用

- 什么是

闭包是基于词法作用域书写代码代码时，必然会产生的自然结果，当函数记住并访问所在的词法作用域就形成的闭包，即使函数在当前词法作用域之外执行，也可以访问定义时候的词法作用域

- 作用

保护;避免命名冲突;保存;解决循环绑定引发的索引问题;变量不会销毁;可以使用函数内
部的变量，使变量不会被垃圾回收机制回收

- 应用
  - 在定时器、事件监听器
  - Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中
  - 只要使用了回调函数，实际上就是在使用闭包！

## 什么是原型，原型链

首先是一个[[prototype]]，每一个对象在创建的时候都会被赋予一个非空的值，当然也不是绝对的，还是有被赋予空的。

对于默认的[[get]]来说，如果没有查找到当前的属性，会在[[prototype]]上查找，直到找不到为止返回 undefined

所有的构造函数的隐式原型指向 Function 的原型

Object 的隐式原型指向 null

所有的实例**proto** 指向当前构造函数的 prototype，因为 prototype 都是对象，也指向 Object 的 prototype

## js 里的继承

- 原型继承

通过 Object.create 创建一个 prototype 指向继承的对象，缺点共享双方数据，并且无法进行参数传递

```js
//
const person = {
  friend
};
const p1 = Object.create(person);
```

- 寄生式继承

```js
function Father(name) {
  this.name = name;
  this.hobby = ['唱', '跳', 'rap'];
}
Father.prototype.getName = function () {
  return this.name;
};
function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}
Son.prototype = new Father(); // 通过new创建一个新的对象来模拟
// 修改构造指向
Son.prototype.constructor = Son;
const s = new Son('测试', 20);
```

- 寄生组合式继承

```js
function Father(name) {
  this.name = name;
  this.hobby = ['唱', '跳', 'rap'];
}
Father.prototype.getName = function () {
  return this.name;
};
function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}
Son.prototype = Object.create(Father.prototype); // 通过委托行为改变他的prototype
Son.prototype.constructor = Son; // 构造函数变更成自己
```

- extends

其实是寄生式继承的一个语法糖

```js
class Son extends Father {
  // son.prototype.__proto__ = Father.prototype
  constructor(y) {
    super(2000); // ==>Father.call(this,2000)
    this.y = y;
  }
}
```

## 内存泄漏和垃圾回收机制

### 什么是

没有用到的数据没有被及时释放出来，导致该内存无法被使用，就是内存泄漏

### 为什么会导致泄漏

当我们无法通过 js 访问对象，但是垃圾回收机制确认为改数据正在被引用，垃圾回收不会释放该对象，导致该内存无法被释放，积少成多，最终导致程序崩溃

### 垃圾回收的策略

- 标记清除法

  回收机制通过获取根标记他们，然后访问并标记所有来自他的引用，然后访问这些对象并且标记他们的引用，如此反复，如果发现没有被引用的就删除，进入执行环境的不删除

- 引用计数法

当指明一个变量并且给这个变量赋值一个引用类型的值的时候，该值的计数+1。这个值再次赋值给别的值的时候，再次+1，当该值被别的值取代的时候，-1。当技术为 0 的时候，就无法访问这个值，垃圾回收机制回收这个对象

## 手写深浅拷贝

- 浅拷贝

```js
var obj1 = {
  a: {
    a1: { a2: 1 },
    a10: { a11: 123, a111: { a1111: 123123 } }
  },
  b: 123,
  c: '123'
};

// 方法1
function shallowClone1(o) {
  const obj = {};
  for (let i in o) {
    if (o.hasOwnProperty(i)) {
      obj[i] = o[i];
    }
  }
  return obj;
}
// 方法2
const shallowObj = { ...obj1 };
// 方法3
const shallowObj2 = Object.assign({}, obj1);
```

- 深拷贝

```js
// 简易版存在的问题没有进行类型校验,如数组 map set weakset weakmap
function deepClone1(o) {
  const obj = {};
  for (let i in o) {
    if (o.hasOwnProperty(i)) {
      if (typeof i === 'object') {
        obj[i] = deepClone(o[i]);
      }
      obj[i] = o[i];
    }
  }
  return obj;
}
// 进阶版LV2
function isObject(o) {
  return (
    Object.prototype.toString.call(o) === '[object Object]' || Object.prototype.toString.call(o) === '[object Array]'
  );
}
function deepClone2(o) {
  // 先判断是不是数组和对象
  if (isObject(o)) {
    let obj = Array.isArray(o) ? [] : {};
    for (let i in o) {
      if (isObject(o[i])) {
        obj[i] = deepClone2(o[i]);
      } else {
        obj[i] = o[i];
      }
    }
    return obj;
  } else {
    return o;
  }
}
// 可能碰到循环引用 如 var a = {} a.a = a ,增加一个循环监测Lv3
function deepClone(o, hash = new Map()) {
  if (!isObject(o)) return o;
  // 判断当前的数据在缓存中是否存在，存在就取缓存
  if (hash.has(o)) return hash.get(o);
  let obj = Array.isArray(o) ? [] : {};
  hash.set(o, obj);
  for (let i in o) {
    if (isObject(o)) {
      obj[i] = deepClone(o[i], hash);
    } else {
      obj[i] = o[i];
    }
  }
  return obj;
}
var a1 = { a: 1, b: 2, c: { c1: 3, c2: { c21: 4, c22: 5 } }, d: 'asd' };
var b1 = { b: { c: { d: 1 } } };
// Lv4 递归容易出现爆栈，采用深度优先算法
function deepClone(o) {
  const result = {};

  const loopList = [
    {
      parent: result,
      key: undefined,
      data: o
    }
  ];
  while (loopList.length) {
    let node = loopList.pop(); // 移除最后一项
    const { parent, key, data } = node;
    let anopar = parent;
    if (typeof key !== 'undefined') {
      anopar = parent[key] = {};
    }
    for (let i in data) {
      if (typeof data[i] === 'object') {
        loopList.push({
          parent: anopar,
          key: i,
          data: data[i]
        });
      } else {
        anopar[i] = data[i];
      }
    }
  }
  return result;
}
```

## 为什么 js 是单线程

因为 js 里存在 dom 操作，如果是多线程的话，进行 dom 操作的时候，一个线程在删除 dom 一个线程在编辑 dom，浏览器不知道听谁的，可能会导致数据混乱

## 如何实现异步编程

- 回调函数
- generator 及其阶段变化

生成器是一个函数，用来返回迭代器

调用生成器后不会立即执行，而是通过迭代器一步步控制生成器进行

迭代器调用 next 方法来请求一个个的值，返回值 一个是 value 一个数 done，如果为 true 表示生成器执行完成，后续再次执行 next 返回值是一个 undefined

没到执行到 yield 的时候，会返回一个对象，这个时候生成器处于一个非阻塞的状态，当再次执行 next 会从挂起状态到执行状态，继续上一次的状态

直到没有 yield，返回 value:undefined done true

## promise 原理 手写 promise 和 promise.all

```js
// 简易版
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    // 保存当前value resolve
    this.value = undefined;
    this.reason = undefined;
    // 成功的数组
    this.successCb = [];
    // 失败
    this.failCb = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.successCb.forEach((f) => f());
      }
    };
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.failCb = reason;
        this.failCb.forEach((f) => f());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
    if (this.state === 'pending') {
      this.successCb.push(onFulfilled(this.value));
      this.failCb.push(onRejected(this.reason));
    }
  }
}
```

## 微任务和宏任务

- 微任务

```
promise.then process.nextTick Object.observe MutationObserver
```

- 宏任务

```
script settimeout setinterval setimmediate
```
## 宏任务和微任务的执行
+ 先执行script宏任务
+ 进入script后，所有的同步任务主线程执行
+ 所有宏任务进入宏任务队列
+ 所有的微任务进入微任务队列
+ 先清空微任务队列
+ 再取一个宏任务，执行，再清空微任务队列
+ 依次循环