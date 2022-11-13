import Image from 'next/image'
import { Repositorie } from '../apollo/fetcher'
import { AnimatePresence, motion } from 'framer-motion'

export const RepoInfo = ({ repo }: { repo: Repositorie[0]['data'] }) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })

  return (
    <>
      <Image
        src={`/${repo.name}.png`}
        alt={repo.name}
        width={450}
        height={250}
        className='my-3.5 cursor-pointer'
        onClick={() => window.open(repo.url, '_blank')}
        priority
      />
      <AnimatePresence mode='wait'>
        <motion.div
          key={repo.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='grid grid-cols-2 place-items-center text-sm'
        >
          <p>Created: {dateFormat.format(new Date(repo.createdAt))}</p>
          <p>Updated: {dateFormat.format(new Date(repo.updatedAt))}</p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
