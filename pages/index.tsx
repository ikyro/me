import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href='/portfolio'>{'- Portfolio'}</Link>
      <Link href='/random'>{'- random'}</Link>
    </div>
  )
}

export default Home
