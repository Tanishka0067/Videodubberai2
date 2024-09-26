import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ audioFile }) => {
  const waveRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    if (!audioFile) return; // Make sure there's an audio file

    if (wavesurferRef.current) {
      wavesurferRef.current.load(URL.createObjectURL(audioFile));
    }
  }, [audioFile]);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveRef.current,
      waveColor: 'green',
      progressColor: 'green',
      height: 128,
      responsive: true,
      hideScrollbar: true,
      backgroundColor: '#000000', // Helps to visualize the waveform
    });

    wavesurferRef.current.on('ready', () => {
      console.log('WaveSurfer is ready');
    });

    wavesurferRef.current.on('error', (error) => {
      console.error('WaveSurfer error: ', error);
    });

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <div>
      <div ref={waveRef} className="w-full h-32 mb-4 bg-gray-900" />
      <button onClick={handlePlayPause} className="mt-4 border-indigo-700 border-2 p-2 rounded-2xl text-white bg-indigo-600">
        Play/Pause
      </button>
    </div>
  );
};

export default AudioPlayer;
