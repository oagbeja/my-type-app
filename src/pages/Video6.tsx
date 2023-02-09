import { useState } from "react";
import ReactPlayer from "react-player";
const Video6 = () => {
  const [pp, setPp] = useState(false);

  return (
    <div style={{ maxWidth: "400px" }}>
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="100%"
        height="100%"
        controls
        pip={pp}
        onPlay={() => setPp(true)}
        onEnded={() => setPp(false)}
        onPause={() => setPp(false)}
      />
    </div>
  );
};

export default Video6;
