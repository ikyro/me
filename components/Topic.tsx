import { ReactNode } from 'react'

export const Topic = ({ children }: { children: ReactNode }) => {
  return (
    <li className='rounded-md bg-black py-2 px-4 text-sm text-white'>
      {children}
    </li>
  )
}
