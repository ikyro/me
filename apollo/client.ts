import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({
    // thanks github copilot
    typePolicies: {
      Query: {
        fields: {
          viewer: {
            merge: false,
          },
        },
      },
    },
  }),
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
})
