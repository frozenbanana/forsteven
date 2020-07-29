import Markdown from 'react-markdown';

const Card = ({ title, body, coverImg, fontColor, color, tags, link }) => {
  if (!coverImg) {
    coverImg = {url:"http://placehold.it/420"};
  }
  console.log(`${process.env.API_URL}${coverImg.url}`);
  if (!title) {
    return "IT IS NOT WORKING!";
  }

  return (
    <div>
      <div className="background-tint card-container shadowed">
        <h2 className="title"> {title} </h2>
        <Markdown source={body.slice(0,300)} disallowedTypes={['image']} />
        { tags ? <ul>{tags.split(', ').map(tag => <li key={tag}>{tag}</li>)}</ul> : ""}
      </div>
      <style jsx>{`
        .card-container {
          background-image: url(${process.env.API_URL}${coverImg.url});
          flex-flow: row wrap:
          justify-content: center;
          align-items: center;
          max-width: 30rem;
          margin: 1rem;
          margin-bottom: 2rem;
          width: 30rem;
          height: 40rem;
          border: 0.2rem solid black;
          color: rgba(${fontColor[0]}, ${fontColor[1]},  ${fontColor[2]}, ${fontColor[3]});
        }
        
        .source-wrapper {
          text-align: center;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          align-items: center;
        }

        li {
          border: 0.2rem solid white;
          margin: 0rem 1rem 1rem 0rem;
          padding: 0.25rem;
        }
      

        .card-container:hover {
          cursor: pointer;
          opacity: .8;
        }

        .background-tint {
          background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]} );
          background-blend-mode: multiply;
        }
      `}</style>
    </div>
  );
};

export default Card;
