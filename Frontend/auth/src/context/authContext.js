import React from 'react'

import { createContext,useState,useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const AuthContext=createContext()

export default AuthContext

export const AuthContextProvider=({children})=>{
  let [loading,setLoading]=useState(true)
  let [user,setUser]=useState(()=>localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')):null)
  let [authToken,setauthToken]=useState(()=>localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')):null)
  const history=useHistory()
  
  let loginUser=async(e)=>{
    e.preventDefault()
    
    let response=await fetch('http://127.0.0.1:8000/api/token/',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
    })
    let data = await response.json()
    if(response.status===200){
      setauthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authToken',JSON.stringify(data))
      history.push('/')
    }else{
      alert('somthing be wrong!')
    }
  }
  let registerUser=async(username,email,password,password2)=>{
    
    const response = await fetch('http://127.0.0.1:8000/api/register/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username,email,password,password2})
    })

    if (response.status === 201){
      history.push('/login')
    }else{
      alert('somthing went wrong!')
    }
  }

  let Logout=()=>{
    setauthToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
    history.push('/login')
    
  }
  let updateToken= async()=>{
    let response= await fetch('http://127.0.0.1:8000/api/token/refresh',{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({'refresh':authToken.refresh})
    })
    let data = await response.json()
    if(response.status===200){
      setauthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authToken',JSON.stringify(data))  
    }else{
      Logout()
    }
  }

  let ContextData={
    authToken:authToken,
    user:user,
    loginUser:loginUser,
    Logout:Logout,
    registerUser:registerUser

  }
  useEffect(()=>{
    const fiveMinute= 5*1000*60
    let interval = setInterval(()=>{
      
      if (authToken){
        updateToken()
      }
    },fiveMinute)
    return ()=>clearInterval(interval)
   },
  [authToken,loading])

  return(
  <AuthContext.Provider value={ContextData}>
  {children}
  </AuthContext.Provider>
  )

}
