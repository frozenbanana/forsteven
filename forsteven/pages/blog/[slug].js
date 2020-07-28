import Layout from "../../components/layout";
import fetch from "isomorphic-fetch";
import Markdown from "react-markdown";
import Project from "../projects/[slug]";

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
      src={`${process.env.API_URL}${post.coverImg.url}`}
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

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_URL}/posts?slug=${slug}`);
  const post = await res.json();
  if (!post) {
    return {message: "Error retreiving data"}
  }
  console.log("hello again server", post);
  return { props: { post: post[0] } };
}

export default Post;
