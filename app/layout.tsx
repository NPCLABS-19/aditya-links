import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aditya Sangal — Links',
  description:
    '19 Studio, Certified NPC, Pinterest, Are.na, and more from Aditya Sangal.',
  metadataBase: new URL('https://npclabs-19.github.io/aditya-links/'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Aditya Sangal — Links',
    description: '19 Studio / Certified NPC / Archive',
    url: 'https://npclabs-19.github.io/aditya-links/',
    siteName: 'Aditya Sangal — Links',
    images: [
      {
        url: 'https://npclabs-19.github.io/aditya-links/og.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Sangal — Links',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Sangal — Links',
    description: '19 Studio / Certified NPC / Archive',
    images: ['https://npclabs-19.github.io/aditya-links/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
