// src/app/layout.js
"use client";

import { MantineProvider, AppShell } from '@mantine/core';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            padding="md"
            navbar={<Sidebar />}  // Sidebar goes here
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
          >
            {children}  
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
