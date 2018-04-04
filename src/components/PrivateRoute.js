import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated() ? (
          <Component {...props}{...rest}/>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  
  

export default PrivateRoute;