import Link from 'next/link'

const pages = [
  {
    path: '/portfolio',
    label: '- Portfolio',
  },
  {
    path: '/random',
    label: '- Random',
  },
]

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl'>Hi {':)'}</h1>
      {pages.map(({ path, label }) => (
        <Link href={path} key={path}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export default Home
