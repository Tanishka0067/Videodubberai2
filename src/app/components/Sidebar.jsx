// src/app/components/Sidebar.jsx
"use client";

import { Box, NavLink, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#f4f4f5',
        padding: '20px',
      }}
    >
      <Stack spacing="md">
        <NavLink label="Audio Cutter" onClick={() => router.push('/audio-cutter')} />
        {/* Add more links here if needed */}
        <NavLink label="Other Feature" onClick={() => router.push('/other-feature')} />
      </Stack>
    </Box>
  );
};

export default Sidebar;
