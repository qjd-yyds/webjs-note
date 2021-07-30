class MyPublish {
  constructor() {
    this.lisenerLists = new Map();
    this.instance = null;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new MyPublish();
    }
    return this.instance;
  }
  addListen(key, fn) {
    if (!this.lisenerLists.has(key)) {
      this.lisenerLists.set(key, []);
    }
    this.lisenerLists.get(key).push(fn);
  }
  removeListen(key, fn) {
    if (!this.lisenerLists.has(key)) return;
    const fns = this.lisenerLists.get(key);
    if (!fns || fns.length === 0) {
      this.lisenerLists.delete(key);
    }
    if (!fn) {
      this.lisenerLists.delete(key);
    } else {
      for (let i = fns.length -1; i >= 0; i--) {
        if (fns[i] === fn) {
          fns.splice(i, 1);
        }
      }
    }
    if (fns.length === 0) {
      this.lisenerLists.delete(key);
    }
  }
  trigger(key, ...args) {
    let fns = this.lisenerLists.get(key);
    if (!fns || fns.length === 0) return;
    fns.forEach((fn) => fn.apply(this, args));
  }
}
