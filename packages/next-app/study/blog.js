const Blog = ({ posts }) => {
  console.log('render');
  return (
    <main>
      <h1>博客列表</h1>
      <p>getStaticProps 静态生成</p>
      {posts.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </main>
  );
};
export async function getStaticProps() {
  // 服务启动的时候才能访问到
  const res = await fetch('/api/posts');
  const data = await res.json();
  return {
    props: {
      posts: data
    },
    revalidate: 3 // 超过3秒 请求数据 服务端重新
  };
}
export default Blog;
