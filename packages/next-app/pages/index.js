import Head from 'next/head';
import HomeHead from 'components/p_home/HomeHead';
import Talk from 'components/p_home/Talk';
import Recomment from 'components/p_home/Recommend';
export default function Home() {
  return (
    <>
      <Head>
        <title>有道精品课</title>
      </Head>
      <main>
        <h3>有道精品课首页</h3>
        <HomeHead></HomeHead>
        <Talk></Talk>
        <Recomment></Recomment>
      </main>
    </>
  );
}
