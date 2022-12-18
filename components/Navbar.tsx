import { ReactNode } from 'react'

export const Navbar = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <header className='flex min-h-screen flex-col items-center justify-center gap-2.5 bg-black text-white'>
      <h1 className='font-spaceGrotesk text-2xl font-bold leading-tight tracking-tight'>
        {title}
      </h1>
      <nav className='grid gap-2 text-sm font-spaceGrotesk'>{children}</nav>
    </header>
  )
}
