import React,{useState} from 'react';
import data from "./Data";
import Navigation from './Navigation';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';


function App() {
    const [count, setCount] = useState(0);

    let cartItem = (event) => {
      //console.log(event);
      if (event.target.innerText === "Add to Cart") {
        setCount(count + 1);
      event.target.innerText = "Remove from Cart";
      event.target.classList.value = "btn btn-outline-danger mt-auto";
      } 
      else if (event.target.innerText === "Remove from Cart") {
        setCount(count - 1);
        event.target.innerText = "Add to Cart";
        event.target.classList.value = "btn btn-outline-dark mt-auto";
      }
      }
    
  
      
  return (
    <div>
    <Navigation count={count} />
    <Header />
    <Section data={data} cartItem={cartItem} />
    <Footer />
  </div>
  )
}

export default App