import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/50" width="35rem" height="35rem" />
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
          justify-content: space-between;
          align-items: center;
        }

        img {
          margin: auto 1rem;
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
        ul li {
          margin-right: 5rem;
        }
        ul li a {
          color: #000;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
