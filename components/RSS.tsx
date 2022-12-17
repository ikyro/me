import { AiOutlineTwitter } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import { KoFi } from 'components/KoFi'

export const RSS = () => {
  return (
    <>
      <a href='https://github.com/ikyro' title='github'>
        - <GoMarkGithub className='mr-1 inline-block h-4 w-4' />
        ikyro
      </a>
      <a href='https://twitter.com/IkyIkyroch' title='twitter'>
        -{' '}
        <AiOutlineTwitter className='mr-1 inline-block h-[1.125rem] w-[1.125rem]' />
        IkyIkyroch
      </a>
      <a href='https://ko-fi.com/ikyro' title='ko-fi'>
        -{' '}
        <KoFi className='mr-1 inline-block h-[1.125rem] w-[1.125rem] fill-current text-white' />
        ikyro
      </a>
    </>
  )
}
