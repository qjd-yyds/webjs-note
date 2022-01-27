import Banner from './Banner';
import Nav from './Nav';
import SearchBar from './SearchBar';

export default function HomeHead({ banner, fixedEntries }) {
  return (
    <>
      <SearchBar></SearchBar>
      <Banner data={banner}></Banner>
      <Nav data={fixedEntries}></Nav>
    </>
  );
}
