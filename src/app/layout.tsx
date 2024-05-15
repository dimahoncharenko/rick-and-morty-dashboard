import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Lato } from "next/font/google";
import { Suspense } from 'react';

import '@mantine/core/styles.css';

import theme from '@/shared/config/theme';
import "./globals.css";
import { StoreProvider } from "@/shared/config/StoreProvider";

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body className={`${lato.variable} antialiased`}>
        <StoreProvider>
          <MantineProvider theme={theme}>
            <Suspense fallback={<p>Loading...</p>}>
              {children}
            </Suspense>
            </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
