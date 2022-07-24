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

function test() {
  console.log('클라이언트 graphql 연결 테스트');
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
      {
        data ? console.log('연결 성공') : console.log('연결 실패');
      }
    });
}

export { client, test };
