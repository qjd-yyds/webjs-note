# 深入理解 js 中的对象

:::tip
所有的对象在 js 底层都是关联数组

- 对象和关联数组都可以用 for in 循环
- 访问不存在的属性都返回 undefined
- 可以强行给不存在的属性添加值
- 访问属性都可以用.key 或者['属性']访问
- 对象和关联数组名值对的集合

:::

## 对象的特点

- 封装
- 继承
  多个子对象，需要公用一个方法。都是通过原型对象实现
- 多态

### 创建对象的方式

:::tip
this 存在函数作用域对象里的
:::

1. 字面量创建 使用{}

```js
var a = {
  test: 1
};
```

2. 使用 new Object()

```js
var obj = new Object();
obj.a = '123'; // 添加值
```

3. 使用构造函数创建

描述同一类型的所有对象的统一结构的可以执行的函数对象

如果构造函数中存在方法，重复创建 可能会浪费内存

4. 工厂函数创建
   缺点：无法通过对象的原型判断对象的类型，因为每一个创建的对象都是 object 创建的

```js
function createobj(name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.asy = function () {
    return this.name;
  };
}
var obj = createobj('qjd', 25);
```

5. 原型对象创建
6. 混合创建
7. 动态混合
   创建方法前先判断是否存在
8. 寄生构造

```js
function Son(name,age,classname) {
var p = new Father(name,age); // 寄生
p.className = classname;
return p;
}
9. class
```

## 封装

封装就是创建一个对象，集中保存一个事物的属性和功能

### new 操作符

new 做了什么

1. 创建一个空对象
2. 将新对象继承构造函数的原型对象
3. 调用构造函数，将函数作用域对象的 this 指向这个空对象
4. 返回这个对象的地址

## 继承

### 如何给原型对象添加共有属性

- 强行赋值
- 构造函数.prototype.属性名 = 属性值
- 构造函数.prototype.方法名 = function(){}

### 原型链

- 多级父对象逐级继承形成的链式对象
- 就近原则 先找子级在找父级

### 继承的方式

1. 原型链继承

```js
function Son() {
  Son.prototype = new Father();
}
let cat = new Son();
```

2. 构造函数创建

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.say = function () {
  console.log(this.name + '！');
};
function Cat(name) {
  Animal.call(this, name); // 替换this指向
}
```

3. 实例继承
4. 拷贝继承
5. 组合继承

```js
function Cat(age) {
  Animal.call(this);
  this.age = age;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```
6. 寄生组合
7. class
## 多态

一个函数在不同情况展示的不同状态

- 重载：函数参数不同，执行不同的逻辑 如不同对象调用的 tostring 返回的结果不同
- 重写：子对象创建父对象的同名对象，实现覆盖

## 内置对象

es 规定，在浏览器中的已经实现，可以直接使用的类型
:::tip
在浏览器中 global 对象被 window 代替
:::

- String,Number,Boolean,Symbol
- Array,Date,RegExp
- Error
- Function,Object
- global

## this 的几种情况

1. obj.fun() this 指向.前的对象
2. new 构造函数() this 指向 new 创建的对象
3. 构造函数.prototype.fun = function() {} this 指向 .前的这个对象
4. 普通函数，匿名函数自调，回调函数 this 默认指向 window 严格模式 undefined
5. button.onclick = function() {} 事件监听
6. 箭头函数 this 指向最近的一个作用域里的 this
7. vue 里的 this 默认指向 vue

### call

替换一次函数中的 this

1. 立即执行点前到函数
2. 自动将 this 替换成指定的对象
3. 调用的函数传入参数

### apply

替换一次函数中的 this，参数为数组

1. 立即执行点前到函数
2. 自动将 this 替换成指定的对象
3. 拆散数组，传入函数作为参数

### bind

永久替换 this ，返回一个新的函数，可以提前存储需要的参数

## 箭头函数

:::tip
底层原理是 bind，所以被 bind 绑定的 this 是永久保存的，无法被替换。所以无法用 call apply 等来绑定箭头函数的 this
:::
() => {}.bind(this)
this 指向最近的一个作用域里的 this
