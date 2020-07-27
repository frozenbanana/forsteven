const Card = ({ title, body, coverImg, color }) => {
  if (!coverImg) {
    coverImg = "http://placehold.it/420";
  }

  if (!title) {
    return "IT IS NOT WORKING!";
  }

  return (
    <div>
      <div className="background-tint card-container shadowed">
        <h2 className="title"> {title} </h2>
        <p>{body}</p>
      </div>
      <style jsx>{`
        .card-container {
          background-image: url(${coverImg});
          flex-flow: row wrap:
          justify-content: center;
          align-items: center;
          max-width: 30rem;
          margin: 1rem;
          margin-bottom: 2rem;
          width: 30rem;
          height: 40rem;
          border: 0.2rem solid black;
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
