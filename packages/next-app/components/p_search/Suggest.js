import { memo } from 'react';
import s from './suggest.module.css';
const Suggest = ({ data = [], submitSearch }) => {
  if (!data.length) return null;
  return (
    <ul className={s.container}>
      {data.map((item) => {
        return (
          <li className={`${s.suggestItem} border-b-1px`} key={item} onClick={() => submitSearch(item)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Suggest);
