import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/authContext'

const Home = () => {
    let [notes,setNotes]=useState([])
    let {authToken}=useContext(AuthContext)
    useEffect=(()=>{
      getNotes()
      
    },[])
    let getNotes=async()=>{
      let response = await fetch('http://127.0.0.1:8000/api/notes/',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer'+ String(authToken.access)
        }
      })
      let data = await response.json()
      setNotes(data)
    }

  return (
    <ul>
      {notes.map(note=>{
        <li key={note.id}>{note.body}</li>
      })}
    
      
    </ul>
    
  )
}

export default Home