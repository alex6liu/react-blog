import React, { Component } from 'react';
import { Switch, Route, BrowserRouter  } from 'react-router-dom';
import Index from './pages/index/index';
import Posts from './pages/posts/posts';
import Write from './pages/write/write';
import Edit from './pages/edit/edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
