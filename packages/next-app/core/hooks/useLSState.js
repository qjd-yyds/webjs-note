import { useEffect, useState } from 'react';
import ls from 'store2';

/**
 * @description: 同步更新localstorage 和state
 * @param {String} key 存的key
 * @param {*} defaultVal 存的值
 * @return {Array} [data, setter]
 */
const useLSState = (key, defaultVal = '') => {
  const [data, setData] = useState(defaultVal);
  const setter = (newData) => {
    setData(newData);
    ls.set(key, newData);
  };
  useEffect(() => {
    // ls 没有数据
    if (ls(key) === null) {
      ls.set(key, defaultVal);
    } else {
      setData(ls(key));
    }
  }, []);
  return [data, setter];
};

export default useLSState;
