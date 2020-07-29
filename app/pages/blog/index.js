import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1 className="shadowed-static">My Blog Posts</h1>
      </div>

        <div className="frame-container">
          {posts.map((p) => {
            return (
            <Link href={`/blog/[slug]`} as={`/blog/${p.slug}`} key={p.id}>
              <a>
                <Card {...p} fontColor={[0,0,0,1]} color={[160, 229, 160, 0.8]} key={p.title}/>
              </a>
            </Link> );
          })}
        </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}


export default Blog;
