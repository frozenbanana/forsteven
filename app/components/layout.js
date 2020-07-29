//components/layout.js
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>For Steven Personal Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link href="../style/fonts.css" rel="stylesheet" /> 
      </Head>
      <div>
        <Navbar />
        <div className="container">{props.children}</div>
        <Footer />
      </div>
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
         width: 100%;
        }

        * {
          box-sizing: border-box;
        } 
      `}</style>
    </div>
  );
};
export default Layout;
