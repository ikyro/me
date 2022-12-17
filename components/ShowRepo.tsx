import { Props } from 'pages/me'
import { ReactNode } from 'react'
import { A } from './A'
import { Image3D } from './Image3D'
import { Topic } from './Topic'

export const ShowRepo = ({
  selected,
  dateFormat,
  children,
}: {
  selected: Props['repos'][0]
  dateFormat: Intl.DateTimeFormat
  children: ReactNode
}) => {
  return (
    <main className='grid max-h-[calc(515px-35px-24px)] w-full grid-cols-2 justify-items-center'>
      <A href={selected?.homepageUrl}>{children}</A>
      <div className='relative text-center'>
        <h2 className='text-xl font-bold leading-tight tracking-tight'>
          {selected?.name}
        </h2>
        <A href={selected?.url} className='group relative text-xs'>
          {selected?.url}
          <span className='absolute -bottom-[0.031rem] left-0 h-0.5 w-0 bg-black transition-[width] group-hover:w-full group-active:w-full' />
        </A>
        <p className='my-4'>{selected?.description}</p>

        <p className=''>topics:</p>
        <ul className='flex flex-wrap items-center justify-center gap-2.5'>
          {selected?.repositoryTopics.map((topic, i) => (
            <Topic key={i}>{topic}</Topic>
          ))}
        </ul>
        <span className='absolute bottom-0 left-0 text-xs'>
          Created: {dateFormat.format(new Date(selected?.createdAt as string))}
        </span>
        <span className='absolute bottom-0 right-0 text-xs'>
          Updated: {dateFormat.format(new Date(selected?.updatedAt as string))}
        </span>
      </div>
    </main>
  )
}
