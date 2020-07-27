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
            console.log("trying to map ", p);
            return (
              <Link href={`/projects/[id]`} as={`/projects/${p.id}`} key={p.id}>
                <Card {...p} color={[80, 130, 160, 0.4]} key={p.title} />
              </Link> );
          })}
        </div>
    </Layout>
  );
}

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
