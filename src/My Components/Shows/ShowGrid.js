import React from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../Misc/404-not-found.png";
import { FlexGrid } from "../styled";
import { useShows } from "../../Misc/CustomHooks";

const ShowGrid = ({ data }) => {

  const [starredShows, dispatchStarredShows] = useShows();

  return (
    <FlexGrid>
      {data.map((item) => {
        const isShowStarred = starredShows.includes(item.show.id);   // boolean variable to check if the show is already starred

        const ClickStarred = () => {                 // function to add/remove shows from Starred Shows
          if (isShowStarred) {
            dispatchStarredShows( {type: 'REMOVE', showId: item.show.id} );
          }
          else {
            dispatchStarredShows( {type: 'ADD', showId: item.show.id} );
          }
        }

        return (
          <ShowCard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : IMAGE_NOT_FOUND}
            summary={item.show.summary}
            ClickStarred = {ClickStarred}
            isShowStarred = {isShowStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;