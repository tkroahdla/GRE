{
  /**import axios from 'axios';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import {} from 'graphql';

const friendList = gql`
  query {
    people {
      friends {
        name
        _id
      }
    }
  }
`;

const App = () => {
  const { data } = useQuery(friendList);
  console.log(data);
  const callApi = async () => {
    axios.get('/api').then((res) => {
      console.log(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div className="App"></div>;
};

export default App;
 */
}
