import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="about-container">
        <div className="hero-item shadowed">
          <div>
            <h1 className="hero-item__title">I am a great computer man.</h1>
            <p className="hero-item__subtitle">But I am also just a person.</p>
          </div>
        </div>
        <div>
          <img className="hero-item hero-image shadowed" src="profile.JPG" />
        </div>
      </div>
      <div className="contact-container shadowed">
        <p>
          Have any projects in mind? Say hello at
          <br />
        </p>
        <p>
          <b>steven@email.com</b>
        </p>
      </div>

      <style jsx>{`
        .about-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%:
            justify-content: center;
            margin-bottom: 0;
            margin-top: 5rem;
        }

        .contact-container {
            display: flex;
            width: 100%:
            justify-content: center;
            margin: 5rem;
        }

        .hero-image {   
            width: 25rem;
            height: 25rem;
        }

        .hero-item {
            margin: auto 6rem;
        }

        .hero-item__title {
            overflow: hidden; /* Ensures the content is not revealed until the animation */
            border-right: .15em solid black; /* The typwriter cursor */
            white-space: nowrap; /* Keeps the content on a single line */
            margin: 0 auto; /* Gives that scrolling effect as the typing happens */
            letter-spacing: 1px; /* Adjust as needed */
            animation: 
              typing 3.5s steps(40, end),
              blink-caret .75s step-end infinite;
          }

          .hero-item__subtitle {
              opacity: .8;
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
