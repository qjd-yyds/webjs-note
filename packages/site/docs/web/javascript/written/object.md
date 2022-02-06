# 对象和 this

## 判断一个值的是不是数组的方法

- typeof 判断基础类型
- Array.isPrototypeOf(child)
- Obejct.getPrototypeOf(child)
- obj.constructor == Array
- obj instanceof Array
- Object.prototype.toString.call(obj) [object Array]
- Array.isArray(obj)

## 引用题目 1

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

## tostring 题目 2

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

## prototype 题目 3

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

## this 题目 4

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

## proto 题目 5

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

## new 操作符-声明提前-题目 6

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
