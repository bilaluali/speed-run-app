import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageNotFound from '../../../core/components/PageNotFound';

const Routes = ({ location, routes }) => (
  <Switch location={location}>
    {routes.map(
      route => (
        <Route key={route.path} {...route} exact/>
      ),
    )}
    <Route exact path="/">
      <Redirect to="/games" />
    </Route>
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
