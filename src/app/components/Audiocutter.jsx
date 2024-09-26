// src/components/AudioCutter.js

import React, { useState } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { FileButton, Text, Container, Button, Group, Title, Divider } from '@mantine/core';
import AudioPlayer from './AudioPlayer';
import Sidebar from './Sidebar';

const Audiocutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="p-2 fixed top-0 text-5xl">
        <Button
          variant="outline"
          color="dark"
          size="xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BiMenuAltLeft />
        </Button>
        {isSidebarOpen && <Sidebar />}
      </div>

      <Container style={{ marginTop: '100px', textAlign: 'center' }}>
        <div className="flex flex-row justify-center gap-12 text-lg font-semibold">
          <div>HOW IT WORKS</div>
          <div>DONATE</div>
        </div>

        <Title order={1} align="center" mb="md" className="text-4xl font-bold text-center p-4">Audio Cutter</Title>
        <Text align="center" size="lg" assName="text-center text-lg p-3 mb-2">
          Free editor to trim and cut any audio file online
        </Text>

        <Divider my="lg" />

        <FileButton onChange={setAudioFile} accept="audio/*">
          {(props) => (
            <Button {...props} variant="outline" color="indigo" size="md" mt="lg" className="border-indigo-700 border-2 p-3 rounded-full">
              Browse my files
            </Button>
          )}
        </FileButton>

        {audioFile && (
          <Text align="center" mt="sm" size="sm">
            {audioFile.name}
          </Text>
        )}

        {audioFile && <AudioPlayer audioFile={audioFile} />}
      </Container>
    </>
  );
};

export default Audiocutter;
