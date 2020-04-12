import React from 'react';
import { Header, GlobalStyle } from './ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default App;
