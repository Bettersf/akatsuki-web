import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akatsuki Unleashed',
  description: 'The Akatsuki Unleashed NFT Collection grants exclusive access to the Private Akatsuki FNF Group, an elite "trench group" of crypto traders. '
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      
      <body>
        <div className='w-full flex'>
          {children}
        </div>
      </body>
    </html>
  )
}
