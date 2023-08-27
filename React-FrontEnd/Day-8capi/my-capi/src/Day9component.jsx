import React ,{useRef,useState} from 'react'

function ClickGame() {
    //we will use state to remember the count of clicks
    const [clickCount,setClickCount]=useState(0);
    //we will use useRef to remember the timer
    const timerRef=useRef(null);
    const clickCountRef=useRef(clickCount);
    clickCountRef.current=clickCount;
    //function runs when you start the game
    const startGame=()=>{
        setClickCount(0);// reset the click count
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }

        //set up a timer to stepthe game after 10seconds

timerRef.current=setTimeout(()=>{
    alert(`game over!you clicker ${clickCountRef.current}times`);
},10000)
    }
    const handleClick=()=>{
        setClickCount(clickCount+1);
    }
  return (
    <div>
        ClickGame:{clickCount}
        <button onClick={handleClick}>click me</button>
        <button onClick={startGame}>start game</button>
        </div>

  )
}

export default ClickGame