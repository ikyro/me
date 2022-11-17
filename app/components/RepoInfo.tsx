import { Repositorie } from 'apollo/fetcher'
import { Image3D } from 'app/components/Image3D'

export const RepoInfo = ({ repo }: { repo: Repositorie[0]['data'] }) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })

  return (
    <>
      <Image3D
        src={`/${repo.name}.png`}
        alt={repo.name}
        width={450}
        height={250}
        className='my-3.5 h-auto w-auto cursor-pointer rounded'
        priority
      />

      <div className='grid grid-cols-2 place-items-center text-sm'>
        <p>Created: {dateFormat.format(new Date(repo.createdAt))}</p>
        <p>Updated: {dateFormat.format(new Date(repo.updatedAt))}</p>
      </div>
    </>
  )
}
