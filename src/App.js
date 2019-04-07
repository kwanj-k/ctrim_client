import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import HomepageLayout from './components/home';
import Dashboard from './components/dashboard';
import login from './components/login';
import Footer from './components/common/Footer';

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
          < Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
