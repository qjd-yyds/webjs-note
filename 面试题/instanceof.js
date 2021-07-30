function myinstance(obj, kclass) {
  let Kclass = kclass.prototype; // 获取原型
  // 原型链
  let prototype = obj.__proto__;

  while (true) {
    if (prototype === Kclass) {
      return true;
    }
    if (prototype === null) {
      return false;
    }
    prototype = prototype.__proto__;
  }
}
