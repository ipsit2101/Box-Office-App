import React from 'react'
import IMAGE_NOT_FOUND from "../Misc/404-not-found.png"

const ShowContent = ({image, name, rating, summary, genres}) => {
  return (
    <div>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <span className = "fa fa-star checked" style = { {color: 'orange'} }></span>
            <span> {rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Genres:{' '}
          <div>
            {genres.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowContent;
