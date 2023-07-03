import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';

const poppins = Poppins({subsets:['latin'], weight:['400']})


export const metadata = {  
  title: 'Ataraxia || Custom Web Design & Marketing Agency',
  description: 'We are custom web design & digital marketing agency.',
  keywords: ['web design','web development','digital marketing','branding']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
