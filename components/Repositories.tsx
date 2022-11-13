import { fetchGithubRepos } from '../apollo/fetcher'
import { RepositoriesContainer } from './RepositoriesContainer'

const repositories = ['next-crud', 'pokepokedex']

export const Repositories = async () => {
  const repos = await fetchGithubRepos(repositories)

  return (
    <div className='bg-white p-3.5 rounded text-black'>
      <RepositoriesContainer repos={repos} />
    </div>
  )
}
