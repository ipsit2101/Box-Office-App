import React from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../Misc/404-not-found.png";
import { FlexGrid } from "../styled";

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map((item) => {
        return (
          <ShowCard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : IMAGE_NOT_FOUND}
            summary={item.show.summary}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;