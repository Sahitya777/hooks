import React,{useRef} from 'react'
//Important when you want to acces the dom
function RefTutorial() {

    const inputref=useRef(null);

    const onClick=()=>{
        inputref.current.focus();
        inputref.current.value="";
    };
  return (
    <div>
        <h1>Pedro</h1>
        <input type="text" placeholder='Ex...' ref={inputref}/>
        <button onClick={onClick}>Clear</button>
    </div>
  )
}

export default RefTutorial