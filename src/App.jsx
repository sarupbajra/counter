import React, { useEffect, useState } from 'react'
import MainButton from '../src/component/MainButton';
import './App.css';
function App() {
  const [count,setCount] = useState(0);

  const handleButtonClick = (action) => {
    if (action=== 'increment') {
      setCount(count + 1);
    }
    else if (action === 'decrement' && count > 0){
      setCount(count -1);
    }  
  };
  return (
    <div className='counter-box'>
    <div className='counter-container'>  <h1> Counter </h1>    <div className='count-display'>
          <p> Count: {count} </p>
        </div>
     <div className='button-container'>
   
          <MainButton title="increment" onClick={()=>handleButtonClick("increment")} className="increment button"/>
          <MainButton title= "decrement" onClick={()=>handleButtonClick("decrement")} className="decrement button"/>
      
        </div>
      </div>
    </div>
  );
}
export default App;
