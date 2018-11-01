import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//components
import Users from '../components/Users.js';
import Auth from '../components/Auth.js';
import NotFound from '../components/404.js';
import AppHeader from '../components/Header.js';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <AppHeader/>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/users" component={Users} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;