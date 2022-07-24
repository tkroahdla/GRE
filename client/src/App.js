import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { test } from './ApolloClient';
import Main from './routes/Main';

const App = () => {
  test();
  return (
    <Router path="/">
      <Main></Main>
    </Router>
  );
};

export default App;
