import Link from 'next/link';
import { memo, useState } from 'react';
import s from './courseCard.module.css';
import teacher from 'public/img/teacher1.png';
import CountDown from './CountDown';
// purcomonents 监听props变化 提升性能
const CourseCard = ({ data = {} }) => {
  const [countDownFinished, setCountDownFinished] = useState(false);
  const {
    courseTitle = '',
    id = '',
    categoryName = '',
    courseTime = '',
    lessonNum = 0,
    teacherList = [],
    saleType,
    saleNum = 0,
    price = 0,
    salePrice = 0,
    saleEndTime
  } = data;
  // 渲染价格
  const renderSimplePrice = (p) => {
    return (
      <span className={s.price}>
        <span className={s.ico}>￥</span>
        {p}
      </span>
    );
  };
  // 渲染促销还是普通
  const renderPomotion = () => {
    // 促销ing 促销期间原价数量促销价格倒计时
    if (saleType === 1 && !countDownFinished) {
      return (
        <div className={s.promoCont}>
          {/* 价格 */}
          <div>
            {/* 原价 */}
            <span className={s.deleted}>
              <span className={s.ico}>￥</span>
              {price}
            </span>
            {/* 促销价格 */}
            {renderSimplePrice(salePrice)}
          </div>
          {/* 倒计时 */}
          <div className={s.desc}>
            剩<CountDown end={saleEndTime} onEnd={() => setCountDownFinished(true)}></CountDown>&nbsp;恢复原价
          </div>
        </div>
      );
    }
    // 普通原价数量
    return (
      <div className={s.promoCont}>
        {/* 价格 */}
        <div>{price === 0 ? <span className={s.price}>免费</span> : renderSimplePrice(price)}</div>
        {/* 购买数量 */}
        <div className={s.desc}>已有{saleNum}人购买</div>
      </div>
    );
  };
  return (
    <Link href="/course/detail/[id]" as={`/course/detail/${id}`}>
      <a className={`border-b-1px ${s.card}`}>
        {/* 标题 */}
        <h5>
          <span className={s.categoryTag}>{categoryName}</span>
          <span className={s.title}>{courseTitle}</span>
        </h5>
        {/* 开课时间 */}
        <div className={s.time}>
          <span>开课时间：{courseTime || '随到随学'}</span>
          <span className={s.lessonNum}>{lessonNum}课时</span>
        </div>
        {/* 课程信息 */}
        <div className={s.footer}>
          {/* 教师 */}
          <div className={s.teacherCont}>
            {teacherList && teacherList.length > 0
              ? teacherList.slice(0, 3).map((item) => {
                  return (
                    <div key={item.name} className={s.teacherBox}>
                      <div className={s.imgWrapper}>
                        {/* 教师头像圆 */}
                        <img className={s.avatar} src={item.img || teacher} alt="teacher_avatar"></img>
                        {/* 半透明边框 */}
                        <div className={s.avatarBorder}></div>
                      </div>
                      <span>{item.name}</span>
                    </div>
                  );
                })
              : null}
          </div>
          {/* 价格、数量、优惠 */}
          {renderPomotion()}
        </div>
      </a>
    </Link>
  );
};

export default memo(CourseCard);
