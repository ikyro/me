import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid min-h-screen content-center items-start justify-items-center bg-black font-pixel text-white'>
        <Link href='/me'>{'- Portfolio'}</Link>
        <Link href='/404'>{'- blog'}</Link>
      </div>
    </>
  )
}

export default Home
