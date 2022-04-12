import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext'

const Register = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [password2,setPassword2]=useState("")
    let {registerUser}=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        registerUser(username,email,password,password2)
    }
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker" 
      name="username" onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" required />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input type="email" className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker mb-3" 
      name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="enter your email"required/>
      
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input type="password" className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker mb-3" 
      name="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="******"required/>
      
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password2">
        Password2
      </label>
      <input className="shadow appearance-none border border-red-600 rounded w-96 py-2 px-3 text-grey-darker mb-3" 
      name="password2" type="password" onChange={(e)=>setPassword2(e.target.value)}placeholder="confirm password" required/>
      <p className="text-red text-xs italic">Please confirm the password.</p>
      <p>{password !== password2 ? "password don't match!":""}</p>
      </div>
      
    <div className="flex items-center justify-between">
      <button className="bg-rose-200 hover:bg-red-400 text-sky-400 font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
     
    </div>
    </form>
  )
}

export default Register
