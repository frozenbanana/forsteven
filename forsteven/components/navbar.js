import Link from "next/link";
import Logo from './logo';

const Navbar = () => {
  return (
    <div>
      <Logo />
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        div {
          display: flex;
          width: 90%;
          margin: 8px auto;
          margin-bottom: 1.6rem;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        img {
          width: 10rem;
        }

        ul {
          background: #fff;
          color: #000;
          list-style: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: 48px;
          align-items: center;
          margin: 0;
          font-size: 1.6rem;
        }

        ul li:not(:last-child) {
          margin-right: 5rem;
        }

        ul li a:link,
        ul li a:visited {
          color: #000;
          text-decoration: none;
          padding: 5px 0;
          transition: all .2s;
        }

        ul li a:link:hover,
        ul li a:visited:hover {
          font-weight: 600;
          border-bottom: 1.2px solid #000;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
