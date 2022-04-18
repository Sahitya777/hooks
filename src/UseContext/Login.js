import React, { useContext } from 'react'
import {Appcontext} from "./ContextTutorial"
function Login() {

    const {setusername}=useContext(Appcontext);
  return (
    <div>
       <input
        onChange={(event)=>{
            setusername(event.target.value);
        }}
       />

    </div>
  )
}

export default Login;