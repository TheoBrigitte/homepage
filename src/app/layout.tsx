import type { Metadata } from "next";
import { Cantarell } from 'next/font/google';
import { ThemeProvider } from 'next-themes'
import "./globals.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas, fab, far)

const cus = Cantarell({
  subsets: ['latin'],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Théo Brigitte",
  description: "Personnal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${cus.className} text-lg antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
