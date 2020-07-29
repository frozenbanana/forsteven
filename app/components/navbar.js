import Link from "next/link";
import Logo from './logo';

const Navbar = () => {
  return (
    <div>
      <Logo />
      <ul>
        <li className="shadowed-light">
          <Link href="/about">
            <a><b>About</b></a>
          </Link>
        </li>
        <li className="shadowed-light">
          <Link href="/blog">
            <a><b>Blog</b></a>
          </Link>
        </li>
        <li className="shadowed-light">
          <Link href="/projects">
            <a><b>Projects</b></a>
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
          padding: 0;
          font-size: 1.6rem;
        }

        ul li {
          margin: auto 1rem;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
