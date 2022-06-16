import React from "react";
import { StyledActorCard } from "../styled";

const ActorCard = ({

  id,
  name,
  country,
  birthday,
  deathday,
  gender,
  image,

}) => {
  return (
    <StyledActorCard>
      <div>
        <img className="img-wrapper" src={image} alt="person" />
      </div>
      <h2>{name}</h2>
      {gender ? <p>{`(${gender})`}</p> : null}
      <div>
        <p>{country ? `Comes from ${country}` : `Country not known`}</p>
        {birthday ? <p>{`Born on ${birthday}`}</p> : null}
        <p>{deathday ? `Died on ${deathday}` : `Alive`}</p>
      </div>
    </StyledActorCard>
  );
};

export default ActorCard;
