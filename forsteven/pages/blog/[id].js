import { useRouter } from 'next/router'
import Layout from '../../components/layout';

const Post = ({posts}) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
        <div>
            <h1>{posts[id].title}</h1>
            <p>{posts[id].body}</p>
        </div>
    </Layout>
  );
}


export async function getStaticPaths() {
  // fetch content (e.g. using a WordPress API helper...
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // then return all of the rendered paths here:
  if (posts && posts.length) {
    return {
      // put the id in with /blog/[id] format
      paths: posts.map(({ id }) => ({ params: { id } }))
    }
  }

  // fallback to empty path if no posts found
  return {
    paths: []
  }
}


// export const getStaticPaths = async () => {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/blog/${post.id}`);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

  
export default Post;
  }

export const getStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/blog/${post.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

  
export default Post
