import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Component imports
import Navigation from './components/Navigation'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';
import NewTicket from './components/NewTicket';
import TicketList from './components/TicketList';
import NewComments from './components/NewComments';
import Comments from './components/Comments';
import PrivateRoute from "./components/PrivateRoutes";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/create_account' component={CreateAccount} />
        <PrivateRoute path='/new_ticket' component={NewTicket} />
        <PrivateRoute path='/view_tickets' component= {TicketList} />
        <PrivateRoute path='/new_comments/:ticket_id/:creator_id' component={NewComments} />
        <PrivateRoute path='/view_comments/:ticket_id/:creator_id' component={Comments} />
      </Switch>
    </div>
  );
}

export default App;
