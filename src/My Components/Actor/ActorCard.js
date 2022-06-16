import React from "react";

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
    <div>
      <div>
        <img src={image} alt="person" />
      </div>
      <h2>{name}</h2>
      <div>
        <p>{country ? `Comes from ${country}` : `Country not known`}</p>
        {birthday ? <p>{`Born on ${birthday}`}</p> : null}
        <p>{deathday ? `Died on ${deathday}` : `Alive`}</p>
      </div>
    </div>
  );
};

export default ActorCard;
