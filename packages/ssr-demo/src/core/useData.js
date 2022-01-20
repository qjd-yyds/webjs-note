import { useState, useEffect } from 'react';

const useData = (staticContext, initial, getData) => {
  const getInitialData = () => {
    if (staticContext) {
      console.log('server render==>');
      return staticContext;
    }
    if (window.__APP_DATA__) {
      console.log('client first render');
      return window.__APP_DATA__;
    }
    return initial;
  };
  const [data, setData] = useState(getInitialData());

  useEffect(() => {
    console.dir(window.__APP_DATA__, '==>执行useEffect');
    if (staticContext) return;
    if (window.__APP_DATA__) {
      window.__APP_DATA__ = undefined;
      return;
    }
    if (typeof getData === 'function') {
      console.log('spa render');
      getData()
        .then((res) => setData(res))
        .catch();
    }
  }, []);

  return [data, setData];
};

export default useData;
