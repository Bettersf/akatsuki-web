import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akatsuki Unleashed',
  description: 'Official Akatsuki Whitepaper',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
