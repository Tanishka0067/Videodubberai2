// src/app/layout.js
"use client";

import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
         
            {children}
       
        </MantineProvider>
      </body>
    </html>
  );
}
