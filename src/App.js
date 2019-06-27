import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import HomepageLayout from './views/home';
import Dashboard from './views/dashboard';
import login from './views/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomepageLayout}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/login' component={login}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
