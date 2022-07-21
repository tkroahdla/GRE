import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/' }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
  cache: new InMemoryCache(),
});

(async function () {
  const { loading, error, data } = await client.query({
    query: gql`
      query {
        continents {
          code
          name
        }
      }
    `,
  });

  console.log('loading:', loading);
  console.log('error:', error);
  console.log('data:', data);
})();

(function () {
  client
    .query({
      query: gql`
        query {
          people {
            friends {
              name
              _id
            }
          }
        }
      `,
    })
    .then(({ loading, error, data }) => {
      console.log('loading:', loading);
      console.log('error:', error);
      console.log('data:', data);
    });
})();
