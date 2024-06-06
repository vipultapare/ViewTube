import React, { useEffect } from "react";
import { youtubeAPI } from "../Utils/constant";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeAPI);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Video Container</h1>
    </div>
  );
};

export default VideoContainer;
