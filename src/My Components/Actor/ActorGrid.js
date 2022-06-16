import React from 'react'
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from "../../Misc/404-not-found.png";
import { FlexGrid } from '../styled';

const ActorGrid = ( {data} ) => {
    return (
        <FlexGrid>
          {data.map((item) => {
            return (
              <ActorCard
                key = {item.person.id}
                id = {item.person.id}    
                name = {item.person.name}
                country = {item.person.country ? item.person.country.name : null}
                birthday = {item.person.birthday}
                deathday = {item.person.deathday}
                gender = {item.person.gender}
                image={item.person.image ? item.person.image.medium : IMAGE_NOT_FOUND}
                summary={item.person.summary}
              />
            );
          })}
        </FlexGrid>
      );
}

export default ActorGrid;
