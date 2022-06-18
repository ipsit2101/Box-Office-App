import React from "react";
import { Link } from "react-router-dom";
import { StyledShowCard } from "../styled";

const ShowCard = ({ key, id, name, image, summary, ClickStarred, isShowStarred }) => {
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
        <button type="button" onClick={ClickStarred}><span className = "fa fa-star checked" style = { {color: isShowStarred ? 'orange' : '#ddd'} }></span></button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
