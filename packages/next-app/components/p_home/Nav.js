import Link from 'next/link';
import Slider from 'react-slick';
import s from './nav.module.css';
// 获取需要循环的列表
function sliceArr(arr, num) {
  let index = 0;
  let list = [];
  while (index < arr.length) {
    list.push(arr.slice(index, num + index));
    index += num;
  }
  return list;
}
const Nav = ({ data }) => {
  let list = sliceArr(data, 8);
  // 配置
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'home-nav'
  };
  return (
    <section className={s.warp}>
      <Slider {...settings}>
        {list.map((item, index) => {
          return (
            <div className={s.nav} key={index}>
              {item.map((item) => (
                <Link key={item.id} href="course/detail/[id]" as={`course/detail/${item.id}`}>
                  <div className={s.nav_item}>
                    <img src={item.img} alt={item.title}></img>
                    <span className={s.text}>{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Nav;
