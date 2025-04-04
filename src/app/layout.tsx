import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Ryan Mack | Accessibility Consultant',
  description: 'Portfolio of Ryan Mack, web accessibility expert and developer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}