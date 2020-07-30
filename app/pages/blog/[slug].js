import Layout from "../../components/layout";
import Markdown from "react-markdown";
import {API_URL} from "../../config";

const Post = ({ post }) => {
  if (!post) {
    return (
      <Layout>
        <h1>Post not found. </h1>
      </Layout>
    );
  }

  const coverImg = post.coverImg ? (
    <img
      className="cover-image"
      src={`${API_URL}${post.coverImg.url}`}
    />
  ) : (
    ""
  );

  return (
    <Layout>
      <div className="focus-container shadowed-static">
        {coverImg}
        <h1>{post.title}</h1>
        <Markdown
          source={post.body}
        />
      </div>
    </Layout>
  );
};


export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/posts?slug=${params.slug}`);
  const posts = await res.json();
  console.log('Trying to get props from ' + `${API_URL}/posts?slug=${params.slug}`);
  console.log('res:', posts);
  return {
    props: {
      post: posts[0] || {}
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
    return { 
    paths: paths,
    fallback: true,
  }
} 

export default Post;
