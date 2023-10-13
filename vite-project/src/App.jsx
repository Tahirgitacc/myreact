import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0); //react useState hook

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div >
      <div className='hero'>


        <h1>COUNTER</h1>

        <h2>{count}</h2>
        <div className='btn-div'>
        <button className="red-btn" onClick={decrement}>DECREMENT</button>
        <button className="green-btn" onClick={increment}>INCREMENT</button>
        </div>
       
      </div>
    </div>
  )
}


export default App;

