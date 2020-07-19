import Link from "next/link";
import Layout from "../components/layout";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        {posts.map((p) => (
          <div>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log("we got posts", posts);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
