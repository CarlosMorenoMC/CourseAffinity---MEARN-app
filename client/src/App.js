import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './config/routes';

import './App.scss';


import Home from './pages/home';
import Contact from './pages/contact';
import Admin from './pages/admin';
import Signin from './pages/admin/signin';

function App() {

  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>{
          return (
            <RoutesWithSubRoutes key={index} {...route}/>
          )
        })}
      </Switch>
    </Router>
  );
}


const RoutesWithSubRoutes = (route) =>{
  console.log(route);
  return(
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
      />
  )
}

export default App;
