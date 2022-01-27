import { useRouter } from 'next/router';

const CourseDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main>
      <h3>课程详情{id}</h3>
    </main>
  );
};

export default CourseDetail;
