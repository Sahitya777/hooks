import React, { useContext } from 'react'
import { Appcontext } from './ContextTutorial'
function User() {
    const {username}=useContext(Appcontext);
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  )
}

export default User