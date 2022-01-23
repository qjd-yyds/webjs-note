import Banner from './Banner';
import Nav from './Nav';
import SearchBar from './SearchBar';

export default function HomeHead() {
  return (
    <section>
      <SearchBar></SearchBar>
      <Banner></Banner>
      <Nav></Nav>
    </section>
  );
}
