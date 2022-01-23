import Link from 'next/link';
import s from './searchBar.module.css';
const SearchBar = () => {
  return (
    <section className={s.swraper}>
      <Link href="/search">
        <a className={s.search}>请输入内容</a>
      </Link>
      <Link href="/user">
        <a className={s.user}> </a>
      </Link>
    </section>
  );
};

export default SearchBar;
