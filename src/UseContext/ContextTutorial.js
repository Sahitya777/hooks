import React, { useState, createContext } from 'react'
import Login from './Login';
import User from './User';

export const Appcontext=createContext(null);

function ContextTutorial() {
    const [username,setusername]=useState("");
  return (
     
    <Appcontext.Provider value={{username,setusername}}>
        <Login/><User />
    </Appcontext.Provider>
  )
}

export default ContextTutorial;