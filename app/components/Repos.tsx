'use client'
import { useState } from 'react'
import { Repositorie } from 'apollo/fetcher'
import { motion } from 'framer-motion'
import { RepoInfo } from 'app/components/RepoInfo'

export const Repos = ({ repos }: { repos: Repositorie }) => {
  const [active, setActive] = useState(repos[0].data)

  return (
    <div className='mt-4 rounded bg-white p-3.5 text-black'>
      <ul className='grid grid-cols-2'>
        {repos.map(({ data }) => (
          <li
            key={data.name}
            className='cursor-pointer'
            onClick={() => setActive(data)}
          >
            <h2 className='text-center'>{data.name}</h2>
            {data.name === active.name && (
              <motion.div
                className='h-px w-full bg-black'
                layoutId='underline'
              />
            )}
          </li>
        ))}
      </ul>
      <RepoInfo repo={active} />
    </div>
  )
}
