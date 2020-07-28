import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="nav-container">
        <ul>
          <li className="shadowed-light">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="shadowed-light">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="shadowed-light">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact-container">
        <ul>
          <li>
            <a href="https://github.com/ShinteiMai">
              <img src="/static/github.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/steven-hansel-902516148/">
              <img src="/static/linkedin.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright-container">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Powered by Dev Town Explosion. All rights reserved.
        </a>
      </div>
      <style jsx>
        {`
          footer {
            width: 100%;
            height: 2rem;
            border-top: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 3rem 0;
          }

          footer img {
            margin-left: 0.5rem;
          }

          ul {
            padding: 0;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo-container h1 {
            font-family: "Dancing Script", sans-serif;
            font-weight: 400;
            line-height: 1.8;
          }

          .nav-container {
            display: flex;
            justify-content: center;
          }

          .nav-container ul {
            display: flex;
            list-style: none;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 40rem;
          }

          .copyright-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ##f1f0fe;
            width: 100%;
            margin: 2rem;
            padding: 0rem 0rem 4rem 0rem;
            font-size: 1.2rem;
          }

          .contact-container {
            width: 100%;
            display: flex;
            margin: 2rem auto;
            padding: 1rem;
            align-items: center;
            justify-content: center;
          }

          .contact-container ul {
            list-style: none;
            margin: 0 auto;
            padding-left: 0;
          }

          .contact-container li {
            display: inline-block;
          }

          .contact-container li:not(:last-child) {
            margin-right: 5rem;
          }

          .contact-container a:link,
          .contact-container a:visited {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            box-shadow: 0 1.5rem 3rem rgba(#000, 0.5);
            // margin-right: 5rem;
            transition: all 0.4s;
          }

          .contact-container a:hover {
            transform: translateY(-3px);
          }

          .contact-container img {
            height: 100%;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
