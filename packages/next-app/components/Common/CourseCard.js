import Link from 'next/link';
import { memo } from 'react';
// purcomonents 监听props变化 提升性能
const CourseCard = ({ data = {} }) => {
  const { courseTitle = '', id } = data;
  return (
    <Link href="/course/detail/id" as={`/course/detail/${id}`}>
      <p>{courseTitle}</p>
    </Link>
  );
};

export default memo(CourseCard);
