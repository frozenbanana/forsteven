import Markdown from "react-markdown";

const Article = ({ title, body, coverImg }) => {
  const image = coverImg ? (
    <img
      src={`https://strapi.henrybergstrom.info/${coverImg.url}`}
      alt={`${title}`}
      style={{
          maxWidth: '70%'
      }}
    />
  ) : (
    ""
  );

  return (
    <div>
      <div className="article">
        <div className="article__image">{image}</div>
        <div className="article__content">
            <p className="article__date">Wednesday, 29th July 2020</p>
            <h1 className="article__title">{title}</h1>
            <div className="article__body">
            <Markdown source={body} />
            </div>
        </div>

      </div>
      <style jsx>{`
        .article {
          display: flex;
          flex-direction: column;
        }

        .article__image {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 5rem;
        }

        .article__content {
            padding: 0 6rem;
            padding-bottom: 3rem;
        }

        .article__date {
          font-size: 1.4rem;
          margin-left: 0.5rem;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .article__title {
            margin: 0;
        }

        .article__body {
            margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Article;
