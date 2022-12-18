import { Props } from 'pages/me'

export const Button = ({ repo }: { repo: Props['repos'][0] }) => {
  return (
    <button
      className='rounded bg-black px-4 py-2 font-spaceGrotesk text-xs leading-tight tracking-tight text-white md:text-base'
      disabled={!repo}
    >
      {repo?.name}
    </button>
  )
}
