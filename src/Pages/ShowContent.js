import React from 'react'
import IMAGE_NOT_FOUND from "../Misc/404-not-found.png"
import { Headline, MainDataWrapper, TagList } from './ShowPageStyling';

const ShowContent = ({image, name, rating, summary, genres}) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div className='text-side'>
        <Headline>
          <h1>{name}</h1>
          <div>
            <span className = "fa fa-star checked" style = { {color: 'orange'} }></span>
            <span> {rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Genres:{' '}
          <TagList>
            {genres.map((tag, i) => (
              <span key={i}>{tag}</span> 
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  )
}

export default ShowContent;
