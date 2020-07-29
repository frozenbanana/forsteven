import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";

import Markdown from 'react-markdown'

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

        {/* <div className="frame-container-2">
          {posts.map(p => {
            return (
              <Link href={`/blog/[slug]`} as={`/blog/${p.slug}`} key={p.id}>
                  <div class="card">
                    <div class="card__content">
                      <p>Wednesday, 29th July 2020</p>
                      <h1>{p.title}</h1>
                      <Markdown source={p.body.slice(0,200)} disallowedTypes={['image']} />
                    </div>
                    <div className="card__image">
                      <img src="https://www.improgrammer.net/wp-content/uploads/2016/09/Java-vs-Javascript.jpg" alt="meme" />
                    </div>
                  </div>
              </Link>
            )
          })}
        </div> */}
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
