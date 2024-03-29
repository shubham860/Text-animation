import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tech from './components/Tech'
import Buy from './components/Buy'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Page}/>
          <Route path='/Techspecs' component={Tech}/>
          <Route path='/Buy' component={Buy}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
