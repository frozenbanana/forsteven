
import Link from "next/link";

const ProjectCard = ({title, body}) => {
    //   console.log(coverImg);
    if (!title) {
        return "IT IS NOT WORKING!";
    }
  return (
    <div>
      <div className="card-container">
        <h6 className="title"> title: {title} </h6>
        <p> body: {body}</p>
      </div>
      <style jsx>{`
        .card-container {
          background-color: red;
          flex-flow: column wrap:
          justify-content: space-between;
          align-items: center;
          max-width: 30rem;
          margin: auto 1rem;
          border: 0.2rem solid black;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
