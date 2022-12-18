import { Props } from 'pages/me'
import { ReactNode } from 'react'
import { A } from './A'
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
    <main className='flex w-full flex-col items-center gap-5 font-spaceGrotesk md:grid md:flex-none md:grid-cols-2 md:items-stretch md:gap-0'>
      {children}
      <div className='relative pb-10 text-center'>
        <h2 className='text-base font-bold leading-tight tracking-tight md:text-xl'>
          {selected?.name}
        </h2>
        <A href={selected?.url} className='group relative text-xs'>
          {selected?.url}
          <span className='absolute -bottom-[0.031rem] left-0 h-0.5 w-0 bg-black transition-[width] group-hover:w-full group-active:w-full' />
        </A>
        <p className='my-4'>{selected?.description}</p>

        <p className='text-sm'>topics:</p>
        <ul className='flex flex-wrap items-center justify-center gap-2.5'>
          {selected?.repositoryTopics.map((topic, i) => (
            <Topic key={i}>{topic}</Topic>
          ))}
        </ul>
        <span className='absolute bottom-0 left-0 text-xs md:left-2.5'>
          Created: {dateFormat.format(new Date(selected?.createdAt as string))}
        </span>
        <span className='absolute bottom-0 right-0 text-xs md:right-2.5'>
          Updated: {dateFormat.format(new Date(selected?.updatedAt as string))}
        </span>
      </div>
    </main>
  )
}
