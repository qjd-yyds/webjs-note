import Link from 'next/link'; // 支持任何支持onclick的标签
import CustomLink from 'components/CustomLink';
export default function Study() {
  return (
    <div>
      <h1>Link</h1>
      <ul>
        <li>
          <Link href="/book">
            <a>静态页面</a>
          </Link>
        </li>
        <li>
          <Link href="/book/one/[id]" as="/book/one/123">
            <a>嵌套路由内到动态路由</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/book', query: { year: '2000' } }}>
            <a>url对象跳转</a>
          </Link>
        </li>
        <li>
          <Link href="/book" replace>
            <a>替换跳转</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/book/one/[id]" as="/book/one/custom">
            <CustomLink></CustomLink>
          </Link>
        </li>
      </ul>
    </div>
  );
}
