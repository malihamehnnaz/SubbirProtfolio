import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import FluidCursor from '@/components/fluid-cursor';
import React from 'react';
import { ThemeProviderWrapper } from '@/components/theme-provider-wrapper'; // Changed import

export const metadata: Metadata = {
  title: 'Subbir Portfolio',
  description: 'Portfolio of MD SUBBIR BIN HARUN.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='15' fill='%236D28D9'/><text x='50' y='55' font-size='60' fill='white' text-anchor='middle' font-family='Arial, sans-serif' font-weight='bold'>SB</text></svg>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
      </head>
  <body className={cn('font-body antialiased bg-background text-foreground')}>
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
          storageKey='theme'
        >
          <FluidCursor />
          <div className="absolute inset-0 top-0 z-0 h-full w-full bg-white bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(192,132,252,0.2),rgba(255,255,255,0))] dark:bg-black dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          {children}
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}