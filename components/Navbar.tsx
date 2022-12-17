import { ReactNode } from 'react'

export const Navbar = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <header className='flex min-h-screen flex-col items-center justify-center gap-2.5 bg-black font-courier text-white'>
      <h1 className='text-xl font-bold leading-tight tracking-tight'>
        {title}
      </h1>
      <nav className='flex flex-col items-start justify-center gap-2 text-sm'>
        {children}
      </nav>
    </header>
  )
}
