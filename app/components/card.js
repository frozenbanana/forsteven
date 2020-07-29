import Markdown from "react-markdown";

const Card = ({ title, body, coverImg, fontColor, color, tags, link }) => {
  if (!coverImg) {
    coverImg = { url: "http://placehold.it/420" };
  }
  if (!title) {
    return "IT IS NOT WORKING!";
  }

  return (
    <div>
      <div className="card shadowed">
        <div className="card__content">
          <p className="content__date">Wednesday, 29 July 2020</p>
          <h1 className="content__title">{title}</h1>
          <p className="content__body">
            <Markdown
              source={body.slice(0, 300)}
              disallowedTypes={["image"]}
            />
          </p>
        </div>
        <div className="card__image">
          <img
            src={`https://strapi.henrybergstrom.info/${coverImg.url}`}
          ></img>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          justify-content: center;
          width: 60%;
          margin: 5rem auto;
          padding: 3rem;
          margin-bottom: 1.5rem;
          transition: all 0.4s;
        }

        .card:hover {
          cursor: pointer;
          opacity: 0.7;
        }

        .card__content {
          flex: 0 0 70%;
        }

        .content__title {
          margin: 0;
        }

        .content__date {
          font-size: 1.3rem;
          margin-left: 0.5rem;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .content__body {
          width: 80%;
          opacity: 0.9;
        }

        .card__image {
          flex: 1;
        }

        .card__image img {
          margin-top: 2rem;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Card;
