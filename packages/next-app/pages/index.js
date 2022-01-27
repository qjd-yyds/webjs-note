import Head from 'next/head';
import HomeHead from 'components/p_home/HomeHead';
import Talk from 'components/p_home/Talk';
import Recomment from 'components/p_home/Recommend';
import { getHome } from 'core/api';
export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>有道精品课</title>
      </Head>
      <main>
        <HomeHead {...home}></HomeHead>
        <Talk></Talk>
        <Recomment></Recomment>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getHome();
  return {
    props: {
      home: data
    }
  };
}
