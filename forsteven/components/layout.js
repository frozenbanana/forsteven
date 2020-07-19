//components/layout.js
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>For Steven Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
