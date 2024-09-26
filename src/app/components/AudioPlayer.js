// src/components/AudioPlayer.js
import { useEffect, useRef } from 'react';

const AudioPlayer = ({ audioFile }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioFile) {
      const audioURL = URL.createObjectURL(audioFile);
      audioRef.current.src = audioURL;
    }
  }, [audioFile]);

  return (
    <div className="mt-10">
      <audio controls ref={audioRef}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
