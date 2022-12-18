import localFont from '@next/font/local'
import { Space_Grotesk } from '@next/font/google'

export const pixelFont = localFont({
  src: './04b03b.ttf',
  variable: '--pixel-font',
})

export const spaceGroteskFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk-font',
})
