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
                <Card {...p} color={[80, 230, 80, 0.4]} key={p.title}/>
              </a>
            </Link> );
          })}
        </div>
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

// This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/blog/posts/${post.id}`);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export default Blog;
