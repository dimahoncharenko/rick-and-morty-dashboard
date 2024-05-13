import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick and Morty Dashboard",
  description: "Simple Rick and Morty's dashboard which uses a respective API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
