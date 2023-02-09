import React from "react";
// @ts-ignore
import VideoPlayer from "react-video-js-player";

const Player = () => {
  return <>Video Js Player Bug Full</>;
  return (
    <VideoPlayer
      width="100%"
      height="100%"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      controls
    />
  );
};

export default Player;
