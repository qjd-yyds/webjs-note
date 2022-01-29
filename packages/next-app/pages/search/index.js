import { useEffect, useMemo, useState } from 'react';
import History from 'components/p_search/History';
import Result from 'components/p_search/Result';
import Suggest from 'components/p_search/Suggest';
import Head from 'next/head';
import Input from 'components/p_search/Input';
import { getHotWord, getSearchResult, getSearchSuggest } from 'core/api';
import { useRouter } from 'next/router';
import { throttle } from 'lodash';
import s from './search.module.css';
import useLSState from 'core/hooks/useLSState';
// 保存搜索的状态
const TYPES = {
  HISTORY: 'history',
  SUGGEST: 'suggest',
  RESULT: 'result'
};
const Search = ({ hotword, kw, result }) => {
  const router = useRouter();
  const [history, sethistory] = useLSState('searchHistory', []);
  // 当前的状态
  const [contType, setContType] = useState(kw ? TYPES.RESULT : TYPES.HISTORY);
  // 搜索关键词
  const [inputValue, setInputValue] = useState(kw);
  const [suggestList, setSuggestList] = useState([]); // 搜索建议
  const [loading, setLoading] = useState(false); // 加载状态
  useEffect(() => {
    setLoading(false);
  }, [result]);
  // 切换到搜索结果
  const submitSearch = (keyword = '') => {
    // 每次搜索 吧关键词存到locall中
    history.unshift(keyword);
    // 去重
    sethistory([...new Set(history.slice(0, 6))]);
    // 切换到结果
    setContType(TYPES.RESULT);
    // 加载中
    setLoading(true);
    // 替换路由参数
    router.replace({
      pathname: '/search',
      query: {
        kw: keyword
      }
    });
  };
  // 搜索建议,做一个节流,因为每一次数据变化 都会进行一个组件更新，每次fetchSuggest声明一次，内部节流内部的数据都不一样
  // 使用usememo来优化
  const fetchSuggest = useMemo(
    () =>
      throttle(async (kw = '') => {
        // 切换内容类型为搜索建议
        if (contType !== TYPES.SUGGEST) setContType(TYPES.SUGGEST);
        // 请求数据
        const res = await getSearchSuggest(kw);
        // 更新state
        setSuggestList(res);
      }, 300),
    [contType, setSuggestList, setContType] // 依赖项
  );
  // 渲染内容
  const renderContent = () => {
    if (loading) return <div className={s.loading}>加载中...</div>;
    switch (contType) {
      case TYPES.HISTORY:
        return (
          <History
            submitSearch={submitSearch}
            hotword={hotword}
            history={history}
            deleteHistory={() => sethistory([])}
          ></History>
        );
      case TYPES.RESULT:
        return <Result data={result}></Result>;
      case TYPES.SUGGEST:
        return <Suggest data={suggestList} submitSearch={submitSearch}></Suggest>;
    }
  };
  // 切换成历史状态
  const showHistory = () => setContType(TYPES.HISTORY);
  return (
    <>
      <Head>
        <title>搜索页</title>
      </Head>
      <main>
        {/* 搜索区 受控组件 值需要一个state来维护 */}
        <Input
          inputVlaue={inputValue}
          setInputValue={setInputValue}
          fetchSuggest={fetchSuggest}
          showHistory={showHistory}
          submitSearch={submitSearch}
        ></Input>
        {/* 内容区 */}
        <div className={s.content}></div>
        {renderContent()}
      </main>
    </>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const { query } = context;
  const { kw = '' } = query;
  let hotword = [];
  let result = [];
  if (kw && kw.trim()) {
    // 请求热门词汇 & 搜索结果
    const [resultRes, hotWordRes] = await Promise.allSettled([getSearchResult(kw.trim()), getHotWord()]);
    hotword = hotWordRes.value;
    result = resultRes.value;
  } else {
    // 请求词汇
    hotword = await getHotWord();
  }
  return {
    props: {
      hotword, // 热门词汇
      result, // 搜索结果
      kw // 搜索关键词
    }
  };
}
