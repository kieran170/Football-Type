import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import Home from './comps/Home/Index'
import LoggedInHome from './comps/LoggedInHome/Index'
import FavTeamPage from './comps/FavTeamPage/Index'
import MyAccount from './comps/MyAccount/Index'
import { UserContextProvider } from './context';
import TeamPage from './comps/TeamPage/Index'
import FavClubPage from './comps/FavClubPage/Index'

export default function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={LoggedInHome} />
          <Route path="/favorite-team" component={FavTeamPage} />
          <Route path="/account" component={MyAccount} />
          <Route path='/teams/:team_id' component={TeamPage} />
          <Route path='/favorite-club' component={FavClubPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </UserContextProvider>
  )
}
