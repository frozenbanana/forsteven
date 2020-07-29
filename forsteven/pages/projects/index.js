import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";

export default function Projects({ projects }) {
  projects = projects.slice(0, 5);
  return (
    <Layout>
        <div>
          <h1 className="shadowed-static">My Projects</h1>
        </div>
        <div className="frame-container">
          {projects.map((p) => {
            return (
              <Link href={`/projects/[slug]`} as={`/projects/${p.slug}`} key={p.id}>
                <a><Card {...p} fontColor={[255,255,255,1]} color={[60, 110, 130, 0.5]} key={p.title} /></a>
              </Link> );
          })}
        </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.API_URL}/projects`);
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}
