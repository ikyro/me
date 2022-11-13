import { ReactNode } from 'react'
import { pixelFont } from './fonts'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={pixelFont.variable}
    >
      <head />
      <body className='flex min-h-screen flex-col items-center justify-center bg-black font-pixel-font text-white'>
        {children}
      </body>
    </html>
  )
}
