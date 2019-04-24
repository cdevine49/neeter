import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SessionFormContainer from './session/container';
import SignupFormContainer from './user/create/container';
import Home from './home';
import { AuthRoute, ProtectedRoute } from './routes/auth';

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </Switch>
);

export default App;