import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import fetch from 'isomorphic-fetch';
import Markdown from 'react-markdown';

const Project = ({project}) => {
  if ( !project ) {
    return <Layout> <h1>Project not found. </h1></Layout>
  }

  const coverImg = project.coverImg ? <img className="cover-image" src={`${process.env.API_URL}${project.coverImg.url}`}/> : '';
  return (
    <Layout>
        <div className="focus-container shadowed-static">
            {coverImg}
            <h1>{project.title}</h1>
            <Markdown source={project.body} />
            <div className="source-wrapper"><a className="shadowed-light">See Source</a></div>
        </div>

  <style jsx>{`
    .source-wrapper {
      margin: 1rem auto;
      text-align: center;
    }

    a {
      background-color: lightgreen;
      padding: 1rem;
    }
  `}</style>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_URL}/projects?slug=${slug}`);
  const project = await res.json();
  return { props: { project: project[0] } }
}
  
export default Project
