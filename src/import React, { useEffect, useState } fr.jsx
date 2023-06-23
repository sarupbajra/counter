import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  useEffect (() => console.log(count));
  const decrement = () => {
    if (count>0)
    setCount(count-1);
  }
  return (
    <div className='counter-box'>
      <div className='counter-container'>
        <h1> Counter </h1>
        <div className='count-display'>
          <p> Count: {count} </p>
        </div>
        <div className='button-container'>
          
          <button className='increment button' onClick={()=>setCount(count+1)}>
            <p>increment me </p>
          </button>
          <button className='decrement button'  onClick={decrement}>
          <p>decrement me</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
