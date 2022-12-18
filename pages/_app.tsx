import type { AppProps } from 'next/app'
import { pixelFont, spaceGroteskFont } from 'fonts'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${pixelFont.variable} ${spaceGroteskFont.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
