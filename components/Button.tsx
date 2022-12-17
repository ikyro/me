import { Props } from 'pages/me'

export const Button = ({ repo }: { repo: Props['repos'][0] }) => {
  return (
    <button
      className={`bg-black px-4 py-2 font-bold leading-tight tracking-tight text-white`}
      disabled={!repo}
    >
      {repo?.name}
    </button>
  )
}
