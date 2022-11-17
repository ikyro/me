import { Repos } from 'app/components/Repos'
import { fetchGithubRepos } from 'apollo/fetcher'
import { TextAnimation } from 'app/components/TextAnimation'

const repositories = ['next-crud', 'pokepokedex']

const Portfolio = async () => {
  const repos = await fetchGithubRepos(repositories)
  return (
    <div>
      <TextAnimation />
      <Repos repos={repos} />
    </div>
  )
}

export default Portfolio
