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
