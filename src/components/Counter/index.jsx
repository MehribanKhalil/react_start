import React from 'react'
import { useState } from 'react'
import './index.css'
const Counter = () => {

const [count,setCount]=useState(0)
  return (
    <div className='counter'>
      <div >
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>azalt</button>
        <button onClick={()=>setCount(count+1)}>artir</button>
      </div>
    </div>
  )
}

export default Counter
