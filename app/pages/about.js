import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="about-container">
        <img className="hero-item hero-image shadowed-static" src="/static/profile.JPG" />
        <div className="content-a hero-item shadowed-static">
            <h1 className="hero-item__title">I am a great computer man.</h1>
            <p className="hero-item__subtitle">
                But I am also just a person.
            </p>
        </div>
        <div className="hero-item shadowed-static">
          <p>
            Have any projects in mind? Say hello at
          </p>
          <h3>
            <strong>steven@email.com</strong>
          </h3>
        </div>
      </div>


      <style jsx>{`
        .content-a {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .hero-image {   
            width: 25rem;
            height: 25rem;
        }

        .hero-item {
            margin: 2rem 6rem;
            text-align: center;
            max-height: 25rem;
        }

        .hero-item__subtitle{
            font-size: 1.6rem;
            // overflow: hidden; /* Ensures the content is not revealed until the animation */
            // border-right: .15em solid black; /* The typwriter cursor */
            // white-space: nowrap; /* Keeps the content on a single line */
            // margin: 0 auto; /* Gives that scrolling effect as the typing happens */
            // letter-spacing: 1px; /* Adjust as needed */
            // animation: 
            //   typing 3.5s steps(40, end),
            //   blink-caret .75s step-end infinite;
          }

          @media only screen and (max-width: 650px) {
            .hero-item__title {
                font-size: 2.4rem;
            }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: black; }
          }


        `}</style>
    </Layout>
  );
}
