import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogItem } from '../../../types';

type Props = { blog: BlogItem[] };

export default function Blog({ blog }: Props): JSX.Element {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://m0nch1.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
