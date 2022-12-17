import type { AppProps } from 'next/app'
import { courierPrimeFont, pixelFont } from 'fonts'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${pixelFont.variable} ${courierPrimeFont.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
