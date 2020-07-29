import fetch from "isomorphic-fetch";

import Markdown from "react-markdown";

import Layout from "../../components/layout";
import Article from '../../components/article';

const Post = ({ post }) => {
  if (!post) {
    return (
      <Layout>
        <h1>Post not found. </h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="focus-container shadowed-static">
        <Article 
          {...post} 
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`https://strapi.henrybergstrom.info/posts?slug=${slug}`);
  const post = await res.json();
  if (!post) {
    return {message: "Error retreiving data"}
  }
  return { props: { post: post[0] } };
}

export default Post;
