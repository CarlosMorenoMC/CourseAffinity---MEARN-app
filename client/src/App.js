import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {userRoutes, adminRoutes} from './config/routes';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
      <Route 
          path={adminRoutes.path}
          exact={adminRoutes.exact}
          render={props => <adminRoutes.component routes={adminRoutes.routes} {...props}/>}
          />
        <Route 
          path={userRoutes.path}
          exact={userRoutes.exact}
          render={props => <userRoutes.component routes={userRoutes.routes} {...props}/>}
          />
      </Switch>
    </Router>
  );
}


export default App;
