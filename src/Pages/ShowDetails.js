import React from "react";
import { DetailsWrapper } from "./ShowPageStyling";

const ShowDetails = ({status, premiered, network}) => {
  return (
    <DetailsWrapper>
      <div>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div>
    </DetailsWrapper>
  );
};

export default ShowDetails;
