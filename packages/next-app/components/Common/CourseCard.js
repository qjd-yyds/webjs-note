import { memo } from 'react';
// purcomonents 监听props变化 提升性能
const CourseCard = ({ data = {} }) => {
  const { courseTitle = '' } = data;
  return (
    <div>
      <p>{courseTitle}</p>
    </div>
  );
};

export default memo(CourseCard);
