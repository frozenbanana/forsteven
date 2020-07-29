import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";

import Markdown from "react-markdown";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1 className="shadowed-static">My Blog Posts</h1>
      </div>

      <div className="frame-container-2">
        {posts.map((p) => {
          return (
            <Link href={`/blog/[slug]`} as={`/blog/${p.slug}`} key={p.id}>
              <a>
                <Card 
                  {...p}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  console.log(process.env.API_URL);
  const res = await fetch(`https://strapi.henrybergstrom.info/posts`);

  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
