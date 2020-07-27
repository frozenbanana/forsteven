import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import fetch from 'isomorphic-fetch';

const Post = ({post}) => {
  console.log(post);
  return (
    <Layout>
        <div className="content-container shadowed-static">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post} }
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

  
export default Post
