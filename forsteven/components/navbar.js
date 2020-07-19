import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          background: #333;
          color: #fff;
          list-style: none;
          display: flex;
          width: 100%;
          height: 48px;
          align-items: center;
        }
        ul li {
          font-size: 22px;
          margin-right: 50px;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
