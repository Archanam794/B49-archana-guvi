import React, { useState } from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
    const [flag,setFlag]=useState(true);
    function handleClickadd(){
        setFlag(false);
    }
    function handleClickremove(){
        setFlag(true);
    }
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.date}</h2>
    <Like/>
    <Comment/>
    {flag ? <button onClick={handleClickadd}>Add
    </button>:<button onClick={handleClickremove}>remove</button>}
    </div>
  )
}

export default Post