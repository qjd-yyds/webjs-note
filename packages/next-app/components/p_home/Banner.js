import Link from 'next/link';
import Slider from 'react-slick';
import s from './banner.module.css';
const Banner = ({ data = [] }) => {
  console.log(data, 'Banner');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className={s.warp}>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link href="course/detail/[id]" as={`course/detail/${item.courseId}`}>
              <img className={s.image} src={item.img} key={item.courseId} alt={item.title} />
            </Link>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
