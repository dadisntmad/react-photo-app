import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FoundPhoto from './components/FoundPhoto/FoundPhoto';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:query" component={FoundPhoto} />
      </Switch>
    </div>
  );
}

export default App;
