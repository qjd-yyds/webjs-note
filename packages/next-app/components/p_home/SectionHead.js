import s from './sectionHeader.module.css';
const SectionHeader = ({ title = '', subTitle = '' }) => {
  return (
    <header className={s.header}>
      <div className={s.title}>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
      </div>
      <a>查看更多</a>
    </header>
  );
};

export default SectionHeader;
