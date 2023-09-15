import React ,{useContext} from 'react'
import { productcontext } from './Context'

function Home() {
  const {product,setProduct}=useContext(productcontext)
  return (
    <div>{product}
    <button onClick={()=>{setProduct("praveen")}}>change</button></div>
  )
}

export default Home