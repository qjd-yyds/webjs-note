import Link from 'next/link';
import s from './history.module.css';
const History = ({ submitSearch, hotword = [], history = [], deleteHistory }) => {
  const RenderHotItem = (item) => {
    // type = 2 课程详情页
    // type = 1词汇
    const text = item.title.slice(0, 6);
    if (item.type === 2) {
      return (
        <Link key={`hot-item-${item.id}`} href="/course/detail/[id]" as={`/course/detail/${item.id}`}>
          <a className={s.item}>{text}</a>
        </Link>
      );
    }
    return (
      <span onClick={() => submitSearch(text)} key={`hot-item-${item.id}`} className={s.item}>
        {text}
      </span>
    );
  };
  return (
    <>
      {/* 热门搜索 */}
      {hotword && hotword.length ? (
        <section className={s.container}>
          <div className={s.hotHead}>热门搜索</div>
          <div className={s.content}>{hotword.slice(0, 6).map(RenderHotItem)}</div>
        </section>
      ) : null}
      {/* 搜索历史 */}
      <section className={s.container}>
        <div className={`${s.historyHead} border-b-1px`}>
          搜索历史
          <button className={s.del} onClick={deleteHistory}>
            <img className={s.clean} src="/img/clean.png"></img>
          </button>
        </div>
        <div className={s.content}>
          {history && history.length
            ? history.map((item, idx) => (
                <div
                  className={`${s.list} border-b-1px`}
                  key={`history-item-${idx}`}
                  onClick={() => submitSearch(item)}
                >
                  {item}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default History;
