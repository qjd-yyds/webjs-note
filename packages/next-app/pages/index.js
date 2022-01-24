import Head from 'next/head';
import HomeHead from 'components/p_home/HomeHead';
import Talk from 'components/p_home/Talk';
import Recomment from 'components/p_home/Recommend';
import { getHome } from 'core/api';
export default function Home({ home }) {
  const { banner } = home;
  return (
    <>
      <Head>
        <title>有道精品课</title>
      </Head>
      <main>
        <h3>有道精品课首页</h3>
        <HomeHead banner={banner}></HomeHead>
        <Talk></Talk>
        <Recomment></Recomment>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getHome();
  console.log(data);
  return {
    props: {
      home: data
    }
  };
}
