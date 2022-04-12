import React, { useContext } from 'react';
import {Redirect,Route} from 'react-router-dom';
import AuthContext from '../context/authContext';

const PrivateRoute = ({children,...rest}) => {
    
    const {user}=useContext(AuthContext)
  return (
    <div>
      <Route {...rest}>{!user?<Redirect to="/login"/>:children}</Route>
    </div>
  )
}

export default PrivateRoute
