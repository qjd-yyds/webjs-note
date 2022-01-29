import { useRouter } from 'next/router';
// posts/123
const Posts = ({ post = {} }) => {
  console.log('render post');
  const router = useRouter();
  if (router.isFallback) {
    return <div>loding</div>;
  }
  return (
    <h1>
      {post.title}
      {post.id}
    </h1>
  );
};
// export async function getStaticProps(ctx) {
//   const {
//     params: { id }
//   } = ctx;
//   const res = await fetch('http://localhost:3000/api/posts/' + id);
//   const data = await res.json();
//   return {
//     props: {
//       post: data
//     }
//   };
// }
// // 指定要渲染的页面
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const data = await res.json();
//   const paths = data.map((item) => {
//     return {
//       params: {
//         id: item.id
//       }
//     };
//   });
//   return {
//     paths,
//     fallback: true // 如果超过定义的id 报错，如果设置false 不报错 404
//   };
// }
export default Posts;
