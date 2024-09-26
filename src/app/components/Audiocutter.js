// src/components/AudioCutter.js
"use client";

import { useState } from 'react';
import { Container, Button, Group, Title, FileButton, Text } from '@mantine/core';
import AudioPlayer from './AudioPlayer';

export default function AudioCutter() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <Container>
      <Title order={2} align="center" style={{ marginBottom: "20px" }}>
        Audio Cutter Tool
      </Title>

      <Group position="center" style={{ marginBottom: "30px" }}>
        <FileButton onChange={setAudioFile} accept="audio/*">
          {(props) => (
            <Button {...props} variant="outline" color="blue" size="md">
              Select Audio File
            </Button>
          )}
        </FileButton>
      </Group>

      {audioFile && (
        <Text align="center" color="dimmed" style={{ marginBottom: "20px" }}>
          {audioFile.name}
        </Text>
      )}

      {audioFile && <AudioPlayer audioFile={audioFile} />}
    </Container>
  );
}
