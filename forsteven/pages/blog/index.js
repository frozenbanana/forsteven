import Link from "next/link";
import Layout from "../../components/layout";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1>Posts</h1>
      </div>

        <div className="blog-container">
          {posts.map((p) => (
            <Link href={`/blog/[id]`} as={`/blog/${p.id}`} key={p.id}>
              <div className="card shadowed">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            </Link>
          ))}
        </div>

      <style jsx>{`
            .blog-container {
                width: 66.6%;
                display: flex;
                flex-flow: flow;
                justify-content: center;
                flex-wrap: wrap;
            }

            .card {
              width: 30rem;
              height: 40rem;
              margin: 1rem;
              justify-content: center;
              transition: all .4s;
            }

            .card:hover {
              cursor: pointer;
              opacity: .8;
            }

            .shadowed {
              border: 1px solid;
              padding: 2rem;
              box-shadow: 0.5rem 1rem;
          }

          `}
      </style>
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
