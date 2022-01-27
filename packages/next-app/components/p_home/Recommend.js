import CourseCard from 'components/Common/CourseCard';
import LoadMore from 'components/Common/LoadMore';
import { getRecommend } from 'core/api';
import { useEffect, useState } from 'react';
import SectionHeader from './SectionHead';
const OFFSET = 10;
const Recomment = () => {
  const [recommend, setRecommend] = useState({
    list: [], // 列表
    pageStart: 0, // 页码
    hasMore: true
  });
  // 请求列表数据
  const fetchRecommend = async () => {
    try {
      const list = await getRecommend({
        start: recommend.pageStart,
        offset: OFFSET
      });
      setRecommend({
        list: recommend.list.concat(list),
        pageStart: recommend.pageStart + 1,
        hasMore: list.length === OFFSET
      });
    } catch (error) {
      console.error('getRecommend error');
    }
  };
  useEffect(() => {
    fetchRecommend();
  }, []);
  return (
    <section>
      <SectionHeader title="课程精选" subTitle="Course Selection" />
      {recommend.list.map((item) => (
        <CourseCard key={item.id} data={item}></CourseCard>
      ))}
      <LoadMore onReachBottom={fetchRecommend} hasMore={recommend.hasMore}></LoadMore>
    </section>
  );
};

export default Recomment;
