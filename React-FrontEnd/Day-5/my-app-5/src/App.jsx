import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index'

function App() {
  const [count, setCount] = useState(0)

  function handleClickMe(){
    setCount(count+1);
  }

  function handleClickMount(){
    setCount(0);
  }
  return (
    <>
      <h1>class component</h1>
      <div>
        <p>count:{count}</p>
        <button onClick={handleClickMe}>count</button>
         {count < 5 ? <Index/>:<div >component unmount
          <button onClick={handleClickMount}>mount </button>
          </div>
          }
      </div>
    </>
  )
}

export default App
