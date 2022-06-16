import React from "react";
import { Link } from "react-router-dom";
import { StyledShowCard } from "../styled";

const ShowCard = ({ key, id, name, image, summary }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, " ")}...`
    : "No Description";

  return (
    <StyledShowCard>
      <div>
        <img className="img-wrapper" src={image} alt="show" />
      </div>
      <h2>{name}</h2>
      <p>{summaryText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
