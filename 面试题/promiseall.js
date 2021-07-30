function myAll(promiseList) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0;
    // 每个promise结果,判断是否执行完
    const processData = (key, data) => {
      arr[key] = data;
      if (++index === promiseList.length) {
        resolve(arr);
      }
    };
    for (let i = 0; i < promiseList.length; i++) {
      let result = promiseList[i];
      if (typeof result.then === 'function') {
        result.then((res) => {
          processData(i, res);
        });
      } else {
        // 不是promise
      }
    }
  });
}
