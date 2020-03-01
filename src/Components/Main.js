import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview.js';
import Repositories from './Repositories.js';
import Stars from './Stars.js';
import Followers from './Followers.js';
import Following from './Following.js';
import Contact from './Contact.js';
import Map from './Map.js';
import Fetch from './Fetch.js';
import Users from './Users.js';

const Main = () => (
  <div>
    <Switch>
      <Route path='/Overview' component={Overview} />
      <Route path='/Repositories' component={Repositories} />
      <Route path='/Stars' component={Stars} />
      <Route path='/Followers' component={Followers} />
      <Route path='/Following' component={Following} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Map' component={Map} />
      <Route path='/Fetch' component={Fetch} />
      <Route path='/Users' component={Users} />
    </Switch>
  </div>
)

export default Main;
