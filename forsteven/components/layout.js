//components/layout.js
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>For Steven Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="../style/fonts.css" rel="stylesheet" /> 
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
      <Footer />
      <style jsx global>{`
        html {
          font-size: 62.5%;
        }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Merriweather, sans-serif;
        }

        body {
          font-size: 1.6rem;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
            color: inherit;
            text-decoration: none;
          }    
      `}</style>
    </div>
  );
};
export default Layout;
