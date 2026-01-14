import { ReactNode } from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ryan Mack | Senior Software Engineer & Web Accessibility Expert',
  description: 'Portfolio of Ryan Mack, web accessibility expert and senior software engineer.',
  keywords: ['web accessibility', 'WCAG', 'senior software engineer', 'accessibility consultant', 'portfolio'],
  authors: [{ name: 'Ryan Mack' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Ryan Mack | Senior Software Engineer & Web Accessibility Expert',
    description: 'Portfolio of Ryan Mack, web accessibility expert and senior software engineer.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ryan Mack Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Mack | Senior Software Engineer & Web Accessibility Expert',
    description: 'Portfolio of Ryan Mack, web accessibility expert and senior software engineer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const pref = localStorage.getItem("theme");
              
              if (null === pref) {
                document.documentElement.classList.add("theme-system");
              } else {
                document.documentElement.classList.remove("theme-system");
              }
              
              if (
                pref === "dark" ||
                (!pref && window.matchMedia("(prefers-color-scheme: dark)").matches)
              ) {
                document.documentElement.classList.add("dark");
                document.head
                  .querySelector("meta[name=theme-color]")
                  ?.setAttribute("content", "#1c1c1c");
              } else {
                document.documentElement.classList.remove("dark");
                document.head
                  .querySelector("meta[name=theme-color]")
                  ?.setAttribute("content", "#fcfcfc");
              }
            })();
          `}
        </Script>
      </head>
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-65D61VFK6Q"/>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-65D61VFK6Q');
         `}
        </Script>
        {children}
      </body>
    </html>
  );
}