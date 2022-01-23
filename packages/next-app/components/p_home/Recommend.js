import CourseCard from 'components/Common/CourseCard';
import SectionHeader from './SectionHead';
const Recomment = () => {
  const data = [];
  return (
    <section>
      <SectionHeader />
      {data.map((item) => (
        <CourseCard key={item.id}></CourseCard>
      ))}
    </section>
  );
};

export default Recomment;
