import { type QueryOptions } from '@apollo/client'
import { GET_REPOSITORI } from 'apollo/querys'

export const GITHUB_REPOSITORIES_NAMES = [
  'next-crud',
  'pokepokedex',
  'ctrl-v',
] as const

export const GITHUB_REPOSITORIES: QueryOptions[] =
  GITHUB_REPOSITORIES_NAMES.map((repo) => ({
    query: GET_REPOSITORI,
    variables: {
      repoName: repo,
    },
  }))
