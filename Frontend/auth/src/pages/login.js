import React, { useContext } from 'react';
import AuthContext from '../context/authContext';



const Login = () => {
  let {loginUser}=useContext(AuthContext)
   
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center justify-center" onSubmit={loginUser}>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue hover:bg-red-400 text-sky-400 font-bold py-2 px-4 rounded" type="submit">
        Sign In
      </button>
     
    </div>
    </form>
    
  )
}

export default Login
