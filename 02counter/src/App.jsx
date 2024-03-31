import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
      console.log("clicked", counter);
      counter = counter +1;
      if(counter<=20)
      setCounter(counter);
      else
      {
        counter = 20;
      }
  }

  const removeValue = () => {
    console.log("removed", counter);
    counter -= 1;
    if(counter>=0)
    setCounter(counter);
    else
    {
      counter = 0;
    }
  }

  return (
    <>
      <h1>counter react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
