
import { Navbar, NavLink, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  return (
    <Navbar width={{ base: 250 }} p="xs">
      <Navbar.Section grow>
        <Stack spacing="sm">
          <NavLink
            label="Audio Cutter"
            onClick={() => router.push('/audio-cutter')}
          />
          {/* You can add more options here */}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
