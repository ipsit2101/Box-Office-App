import React from "react";
import IMAGE_NOT_FOUND from "../Misc/404-not-found.png";
import { CastList } from "./ShowPageStyling";

const ShowCasts = ( {cast} ) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className = "cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMAGE_NOT_FOUND}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold"> {person.name} </span> | {character.name} {voice ? "| Voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default ShowCasts;
