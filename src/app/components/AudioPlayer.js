// src/components/AudioPlayer.js
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Button, Slider, Group } from '@mantine/core';

export default function AudioPlayer({ audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    if (audioFile) {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        wavesurferRef.current = WaveSurfer.create({
          container: "#waveform",
          waveColor: "#a29bfe",
          progressColor: "#6c5ce7",
          height: 100,
        });
        wavesurferRef.current.load(e.target.result);
        wavesurferRef.current.setVolume(volume);
      };
      reader.readAsDataURL(audioFile);
    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioFile, volume]);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div>
      <div id="waveform" style={{ marginBottom: "20px", backgroundColor: "#dfe6e9", height: "100px" }}></div>

      <Group position="center">
        <Button onClick={togglePlay} color="blue">
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Group>

      <Group position="center" style={{ width: "60%", margin: "0 auto" }}>
        <Slider value={volume} onChange={setVolume} min={0} max={1} step={0.01} />
      </Group>
    </div>
  );
}
