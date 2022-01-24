import Banner from './Banner';
import Nav from './Nav';
import SearchBar from './SearchBar';

export default function HomeHead({ banner }) {
  return (
    <section>
      <SearchBar></SearchBar>
      <Banner data={banner}></Banner>
      <Nav></Nav>
    </section>
  );
}
