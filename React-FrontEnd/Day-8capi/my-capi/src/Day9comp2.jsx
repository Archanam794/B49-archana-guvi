import React,{useRef,useState} from 'react'

function Ref() 
{ const [count,setCount]=useState(0);
  const countRef=useRef(0);
  const textRef=useRef('');
  let data='';
  function handleClick(){
    setCount(count+1);
    countRef.current++;
   data=textRef.current.value;
    textRef.current.focus();
    console.log(count);
    console.log(countRef.current);
    `<p>${data}</p>`;
  }

  return (
    <div>
      <h1>useRef</h1>
      <p>State value:{count}</p>
      <p>Ref value:{countRef.current}</p>
      <input type='text' ref={textRef}></input>
      <button onClick={handleClick}>increment</button>
      <p>{textRef.current.value}</p>
    </div>
  )
}

export default Ref