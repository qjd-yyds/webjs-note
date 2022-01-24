import Slider from 'react-slick';
const Banner = ({ data = [] }) => {
  console.log(data, 'Banner');
  return (
    <section>
      <Slider></Slider>
    </section>
  );
};

export default Banner;
