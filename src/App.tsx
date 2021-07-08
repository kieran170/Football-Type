import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import Home from './comps/Home/Index'
import LoggedInHome from './comps/LoggedInHome/Index'
import FavTeamPage from './comps/FavTeamPage/Index'
import { UserContextProvider } from './context';

export default function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={LoggedInHome} />
          <Route path="/favorite-team" component={FavTeamPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </UserContextProvider>
  )
}
