import React from 'react';
import { Header, GlobalStyle } from './ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/:roomName" exact component={Room} />
    </Switch>
  </Router>
);

export default App;
