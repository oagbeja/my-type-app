import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";

const RecordView = () => {
  const [visible, setVisible] = useState<boolean | undefined>();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const activateStopRecording = () => {
    setVisible(true);
    stopRecording();
  };
  const activateStartRecording = () => {
    setVisible(false);
    startRecording();
  };
  //   alert(visible);
  return (
    <div style={{ border: "1px solid" }}>
      <p>{status}</p>

      <div
        style={{ display: "flex", flexDirection: "row", border: "1px solid" }}
      >
        {visible === false && (
          <div>
            <Webcam height={300} />
          </div>
        )}
        {visible === true && (
          <div>
            <video height={300} src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      </div>
      {visible !== false && (
        <button onClick={activateStartRecording}>Start Recording</button>
      )}
      {visible === false && (
        <button onClick={activateStopRecording}>Stop Recording</button>
      )}
    </div>
  );
};

export default RecordView;
