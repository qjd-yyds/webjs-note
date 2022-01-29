import CourseCard from 'components/Common/CourseCard';
import LoadMore from 'components/Common/LoadMore';
import { getSearchResult } from 'core/api';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import s from './result.module.css';
const OFFSET = 10;
const Result = ({ data = {}, kw = '' }) => {
  const [result, setResult] = useState({
    list: data,
    pageState: 1, // 页码
    hasMore: true // 是否更多
  });
  const fetchResult = useCallback(async () => {
    try {
      const list = await getSearchResult(kw, result.pageState);
      setResult({
        list: result.list.concat(list),
        pageState: result.pageState + 1,
        hasMore: list.length === OFFSET
      });
    } catch (error) {}
  }, [result, kw]);
  if (result.list && result.list.length) {
    return (
      <section className={s.container}>
        <div className={`${s.resultTitle} border-b-1px`}>相关课程</div>
        {result.list.map((item) => {
          return <CourseCard data={item} key={item.id}></CourseCard>;
        })}
        <LoadMore hasMore={result.hasMore} onReachBottom={fetchResult} customNoMoreText="我是有底线的~~"></LoadMore>
      </section>
    );
  }
  // 没有数据
  return (
    <section>
      <img className={s.img} src="/img/errorImage.png" alt="error"></img>
      <div className={s.title}>sorry 暂时没有找到你的想要的课程</div>
      <Link href="/">
        <a className={`${s.back} border-all-1px`}>返回首页</a>
      </Link>
    </section>
  );
};

export default Result;
