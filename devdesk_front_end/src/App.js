import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Component imports
import Navigation from './components/Navigation'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' /> {/*Placeholder for Janna's work */}
        <Route path='/login' component={Login} />
        <Route path='/create_account' component={CreateAccount} />
      </Switch>
    </div>
  );
}

export default App;
