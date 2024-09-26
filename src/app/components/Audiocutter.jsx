import React, { useState } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { FileButton, Text, Button, Group, Title, Divider } from '@mantine/core';
import AudioPlayer from './AudioPlayer';
import Sidebar from './Sidebar';

const Audiocutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="text-5xl fixed top-0">
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

      <div className="p-20 text-white flex flex-col items-center mt-20">
        <div className="flex flex-row justify-center gap-12 text-lg font-semibold mb-6">
          <div>HOW IT WORKS</div>
          <div>DONATE</div>
        </div>

        <Title order={1} className="text-4xl font-bold text-center mb-4">Audio Cutter</Title>
        <Text align="center" size="lg" className='p-4'>
          Free editor to trim and cut any audio file online
        </Text>

        <Divider my="lg" />

        <FileButton onChange={setAudioFile} accept="audio/*">
          {(props) => (
            <button {...props} className="border-indigo-700 border-2 p-3 rounded-2xl">
              Browse my files
            </button>
          )}
        </FileButton>

        {audioFile && (
          <Text align="center" mt="sm" size="sm" color="dimmed">
            {audioFile.name}
          </Text>
        )}

        {audioFile && <AudioPlayer audioFile={audioFile} />}
      </div>
    </>
  );
};

export default Audiocutter;
