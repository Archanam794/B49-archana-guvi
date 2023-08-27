import React ,{useContext} from 'react'
import { AnimalContext } from './AnimalContext'

function ChangeSoundButton() {
    const {setAnimalSound }=useContext(AnimalContext);
   const data=['bow','lol'];
       

    const changeSound=(newSound)=>{
        for(let i=0;i<newSound.length;i++)
        { setAnimalSound(newSound[i]);}

       
    }
  return (
    <div><button onClick={()=>changeSound(data)}> change sound</button></div>
  )
}

export default ChangeSoundButton