import Link from 'next/link';
import Slider from 'react-slick';
import s from './banner.module.css';
const Banner = ({ data = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: 'slick-dots',
    className: 'home-banner'
  };
  return (
    <section className={s.warp}>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link key={item.courseId} href="course/detail/[id]" as={`course/detail/${item.courseId}`}>
              <img className={s.image} src={item.img} alt={item.title} />
            </Link>
          );
        })}
      </Slider>
      <div className={s.mask}></div>
    </section>
  );
};

export default Banner;
