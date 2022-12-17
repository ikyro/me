import { gql } from '@apollo/client'

export type RepoResponse = {
  viewer: {
    repository: {
      name: string
      url: string
      description: string
      updatedAt: string
      createdAt: string
      homepageUrl: string
      repositoryTopics: {
        edges: {
          node: {
            topic: {
              name: string
            }
          }
        }[]
      }
    }
  }
}

export const GET_REPOSITORI = gql`
  query ($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        name
        url
        description
        updatedAt
        createdAt
        homepageUrl
        id
        repositoryTopics(last: 20) {
          edges {
            node {
              topic {
                name
                id
              }
            }
          }
        }
      }
    }
  }
`

export type AvatarResponse = {
  viewer: {
    avatarUrl: string
  }
}

export const GITHUB_AVATAR = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`
