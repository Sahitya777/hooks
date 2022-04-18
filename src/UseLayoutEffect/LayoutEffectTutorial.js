import React, {useEffect, useLayoutEffect, useRef} from 'react'
// it comes before the use effect hook 
//use effect comes after the render
function LayoutEffectTutorial() {

    const inputref=useRef(null);
    useLayoutEffect(()=>{
        console.log(inputref.current.value);
    },[])

    useEffect(()=>{
        inputref.current.value="Hello";
    },[])
  return (
    <div>
        <input ref={inputref} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  )
}

export default LayoutEffectTutorial;