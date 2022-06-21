/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../Misc/404-not-found.png";
import { FlexGrid } from "../styled";
import { useShows } from "../../Misc/CustomHooks";
import { FadeIn } from "react-slide-fade-in";

const ShowGrid = ({ data }) => {   

  const [starredShows, dispatchStarredShows] = useShows();

  return (
    <FadeIn>
      <FlexGrid>
        {data.map((item) => {
          const isShowStarred = starredShows.includes(item.show.id);   // boolean variable to check if the show is already starred

          const ClickStarred = useCallback( () => {                 // function to add/remove shows from Starred Shows
            if (isShowStarred) {
              dispatchStarredShows( {type: 'REMOVE', showId: item.show.id} );
            }
            else {
              dispatchStarredShows( {type: 'ADD', showId: item.show.id} );
            }
          }, [isShowStarred, item.show.id]);

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
    </FadeIn>
  );
};

export default ShowGrid;