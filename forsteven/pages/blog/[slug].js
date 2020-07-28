import Layout from '../../components/layout';
import fetch from 'isomorphic-fetch';

const Post = ({post}) => {
  if ( !post ) {
    return <Layout> <h1>Post not found. </h1></Layout>
  }

  console.log('this is post', post);
  // console.log(`${process.env.API_URL}${post.coverImg.url}`);
  const coverImg = post.coverImg ? <img className="cover-image" src={`${process.env.API_URL}${post.coverImg.url}`}/> : '';
  
  return (
    <Layout>
        <div className="focus-container shadowed-static">
            {coverImg}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_URL}/posts?slug=${slug}`);
  const post = await res.json();
  console.log('hello again server', post);
  return { props: { post: post[0] } }
}
  
export default Post
