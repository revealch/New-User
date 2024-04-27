import React, {useState} from 'react'

const CounterComponent = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <p>Count is {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <p>{count%2===0?"Count is even":"Count is odd"}</p>
      
    </div>
  )
}

export default CounterComponent
