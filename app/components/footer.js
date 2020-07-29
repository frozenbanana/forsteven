const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <ul className="shadowed-light">
          <li>
            <a href="https://github.com/frozenbanana">
              <img src="/static/github.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/henry-bergstr%C3%B6m-08080415b/">
              <img src="/static/linkedin.png" />
            </a>
          </li>
        </ul>
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
            position: relative;
          }

          footer img {
            margin-left: 0.5rem;
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
            padding: 2rem 3rem;
            margin: 1rem;
          }

          .contact-container li {
            display: inline-block;
            margin: 1rem;
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
