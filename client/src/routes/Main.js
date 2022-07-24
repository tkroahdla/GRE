import { useEffect, useState } from 'react';
import { client } from '../ApolloClient';
import gql from 'graphql-tag';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  const getFreinds = async () => {
    await client
      .query({
        query: gql`
          query {
            people {
              name
              _id
            }
          }
        `,
      })
      .then(({ data }) => {
        console.log('asdf');
        console.log(data.people[0]);
        setFriends(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFreinds();
  });

  return (
    <div>
      {loading ? (
        <span>loading.....</span>
      ) : (
        <span>{friends.people[0].name}</span>
      )}
    </div>
  );
};

export default Main;
