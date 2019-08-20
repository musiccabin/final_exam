import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute(props) {
  // deconstrut isAuthenticated from props;
  // deconstruct component and rename it  to Component from props;
  // deconstruct everything else and place it in routeProps;
  const { isAllowed, ...routeProps } = props;
  if(isAllowed === null) {
    return <Redirect to='/sign_in'/>;
  } else {
    return <Route {...routeProps} />
  }
}