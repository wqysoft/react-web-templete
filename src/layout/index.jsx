import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import LayoutMain from './LayoutMain';
import NotFound from '@/pages/NotFound';

const LayoutIndex = () => (
  <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/404" component={NotFound}></Route>
    <Route path="/" render={() => <LayoutMain></LayoutMain>}></Route>
  </Switch>
)

export default LayoutIndex;
