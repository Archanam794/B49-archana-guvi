import React ,{useContext} from 'react'
import { AnimalContext } from './AnimalContext'

function AnimalSound() {
    const {animalSound} = useContext(AnimalContext);
  return (
    <div>AnimalSound is : {animalSound}</div>
  )
}

export default AnimalSound