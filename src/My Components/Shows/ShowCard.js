import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ key, id, name, image, summary }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, " ")}...`
    : "No Description";

  return (
    <div>
      <div>
        <img src={image} width = '200px' alt="show" />
      </div>
      <h2>{name}</h2>
      <p>{summaryText}</p>

      <div className="card-body">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
