import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';


import HomepageLayout from './components/home';
import StoreCard from './components/stores';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomepageLayout}/>
            <Route exact path='/stores' component={StoreCard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
