import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Component imports
import Navigation from './components/Navigation'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';
import NewTicket from './components/NewTicket';
import TicketList from './components/TicketList'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' /> {/*Placeholder for Janna's work */}
        <Route path='/login' component={Login} />
        <Route path='/create_account' component={CreateAccount} />
        <Route path='/new_ticket' component={NewTicket} />
        <Route path='/view_tickets' component= {TicketList} />
      </Switch>
    </div>
  );
}

export default App;
