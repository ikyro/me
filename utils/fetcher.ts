import { QueryOptions } from '@apollo/client'
import { client } from '../apollo/client'
import { RepoResponse } from '../apollo/querys'

export type Repositories = Awaited<ReturnType<typeof fetchGithubRepos>>

export const fetchGithub = <T>(props: QueryOptions) => {
  return client.query<T>({
    ...props,
  })
}

export const fetchGithubRepos = async <T extends RepoResponse>(
  props: QueryOptions[]
) => {
  const repos = await Promise.all(
    props.map((options) =>
      fetchGithub<T>(options)
        .then((res) => ({
          ...res.data.viewer.repository,
          repositoryTopics:
            res.data.viewer.repository.repositoryTopics.edges.map(
              ({ node }) => node.topic.name
            ),
        }))
        .catch(() => null)
    )
  )

  return {
    res: repos,
  }
}
