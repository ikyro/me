import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl'>Hi {':)'}</h1>
      <Link href='/portfolio'>- Portfolio</Link>
    </div>
  )
}

export default Home
