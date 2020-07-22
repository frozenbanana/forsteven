import Head from "next/head";
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";

export default function Projects({ projects }) {
  console.log('This is the projects!');
  projects = projects.slice(0,5);
  console.log(projects);

  return (
    <Layout>
      <div className="container"> 
        {projects.map(p => {
            console.log('trying to map ', p);
            return <ProjectCard {...p} key={p.title} />
        })}

      <style jsx>{`
        
      `}</style>
      </div>
    </Layout>
  );
};


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const projects = await res.json();
    console.log("we got posts", projects);
    return {
      props: {
        projects,
      },
    };
  }