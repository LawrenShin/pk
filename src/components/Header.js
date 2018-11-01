import React from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
  <div>
    <Header as='h3'><NavLink to="/">Welcome</NavLink></Header>
    <Header as='h3'><NavLink to="/users">Users</NavLink></Header>
  </div>
)

export default AppHeader;