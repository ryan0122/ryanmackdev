import { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Ryan Mack | Accessibility Consultant',
  description: 'Portfolio of Ryan Mack, web accessibility expert and developer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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