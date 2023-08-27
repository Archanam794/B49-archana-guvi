import React,{createContext,useContext,useState} from "react";

//create a context
const AnimalContext=createContext();

// create a component that will provide the context

function AnimalProvider({children}) {
    const [animalSound,setAnimalSound]=useState('meow');
    return(
        <AnimalContext.Provider value={{animalSound,setAnimalSound}}>
            {children}
        </AnimalContext.Provider>
    )
}
// export the context and provider
export {AnimalContext,AnimalProvider}