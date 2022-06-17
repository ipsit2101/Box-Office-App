import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGet } from "../Misc/config";

const ShowPage = () => {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(null);

  useEffect(() => {      // this react hook fires the callback function everytime when anything inside the dependency 
  // array changes

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result) => {
      setShowInfo(result);
    });

  }, [id]);
  console.log(showInfo);

  return (
    <div>
      this is show page
    </div>
  )
};

export default ShowPage;
