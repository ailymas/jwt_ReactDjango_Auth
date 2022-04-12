import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'
import AuthContext from '../context/authContext'

const Header = () => {
    let {user,Logout} = useContext(AuthContext)
  return (
    <div>
      <Link to="/">Home</Link>
      <span>|</span>
      {user? (
          <Link to='/login' onClick={Logout}>logout</Link>
      ):(
        <Link to="/login">login</Link>
      )}
      <span>|</span>
      <Link to='/register'>register</Link>
      {user && <p>hi @{user.username} </p>}
    </div>
    
  )
}

export default Header
