import { fetchGithubRepos } from '../apollo/fetcher'
import { RepositoriesContainer } from './RepositoriesContainer'

const repositories = ['next-crud', 'pokepokedex']

export const Repositories = async () => {
  const repos = await fetchGithubRepos(repositories)

  return <RepositoriesContainer repos={repos} />
}
