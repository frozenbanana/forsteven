import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";

export default function Projects({ projects }) {
  // const router = useRouter()
  // if (!router.isFallback && projects.length <= 0) {
  //   // return <ErrorPage statusCode={404} />
  //   return "ERROR";
  // }
  return (
    <Layout>
        <div>
          <h1 className="shadowed-static">my projects</h1>
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


export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const projects = await res.json();
  
  return {
    props: {
      projects
    },
  }
}
