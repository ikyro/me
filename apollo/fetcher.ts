import { client } from './client'
import { GET_REPOSITORI, RepoResponse } from './querys'

export type Repositorie = Awaited<ReturnType<typeof fetchGithubRepos>>

export const fetchGithubRepos = async (repositories: string[]) => {
  const repos = await Promise.all(
    repositories.map((repoName) =>
      client
        .query<RepoResponse>({
          query: GET_REPOSITORI,
          variables: {
            repoName,
          },
        })
        .then((res) => ({
          ...res,
          data: {
            ...res.data.viewer.repository,
            repositoryTopics:
              res.data.viewer.repository.repositoryTopics.edges.map(
                ({ node }) => node.topic.name
              ),
          },
        }))
    )
  )

  return repos
}
