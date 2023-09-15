import React ,{createContext, useEffect, useState} from 'react'

export const productcontext=createContext();

function Context({children}) {
    const getData= async () => {
        await fetch("https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link")
        .then(response=>response.json())
        .then(result=>console.log(result))
    }
    useEffect(()=>{
        getData()
    },[])

    
    

  return (
    <productcontext.Provider value={{}}>
      {children}
    </productcontext.Provider>
    
  )
}

export default Context