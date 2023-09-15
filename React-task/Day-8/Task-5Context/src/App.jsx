import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Context from './Context'
import App1 from './App1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Context>
  <App1/>
    </Context>
     
    </>
  )
}

export default App
