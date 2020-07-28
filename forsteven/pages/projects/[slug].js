import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import fetch from 'isomorphic-fetch';

const Project = ({project}) => {
  return (
    <Layout>
        <div className="frame-container shadowed-static">
            <h1>{project.title}</h1>
            <p>{project.body}</p>
        </div>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_URL}/posts?slug=${slug}`);
  const project = await res.json();
  return { props: { project: project[0] } }
}
  
export default Project
