import Layout from "../../components/layout";
import Markdown from "react-markdown";

const Project = ({ project }) => {
  if (!project) {
    return (
      <Layout>
        <h1>Project not found. </h1>
      </Layout>
    );
  }

  const coverImg = project.coverImg ? (
    <img
      className="cover-image"
      src={`${process.env.NEXT_PUBLIC_API_URL}${project.coverImg.url}`}
    />
  ) : (
    ""
  );
  return (
    <Layout>
      <div className="focus-container shadowed-static">
        {coverImg}
        <h1>{project.title}</h1>
        <Markdown
          source={project.body}
        />
        <div className="source-wrapper">
          <a className="shadowed-light">See Source</a>
        </div>
      </div>

      <style jsx>{`
        .source-wrapper {
          margin: 1rem auto;
          text-align: center;
        }
        
        img {
          max-width: 100%;
        }

        a {
          background-color: lightgreen;
          padding: 1rem;
        }
      `}</style>
    </Layout>
  );
};


export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?slug=${params.slug}`);
  const projects = await res.json();
  
  return {
    props: {
      project: projects[0] || {}
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const projects = await res.json();

  return {
    paths: projects?.map((projects) => `/projects/${projects.slug}`) || [],
    fallback: true,
  }
} 

export default Project;
