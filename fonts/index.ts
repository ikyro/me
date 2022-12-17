import localFont from '@next/font/local'

export const pixelFont = localFont({
  src: './04b03b.ttf',
  variable: '--pixel-font',
})

export const courierPrimeFont = localFont({
  src: [
    {
      path: './courierPrime.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './courierPrimeBold.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--courier-prime-font',
})
