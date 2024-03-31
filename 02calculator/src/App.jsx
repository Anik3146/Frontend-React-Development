import { useState } from 'react';
import './App.css'

function App() {
  var [number1, setNumber1] = useState(0);
  const num1 = () => {
    number1 = document.getElementById("number1").value
    setNumber1(number1);
    console.log(number1);
  }
  var [number2, setNumber2] = useState(0);
  const num2 = () => {
      number2 = document.getElementById("number2").value
      setNumber2(number2);
      console.log(number2);
  }
  let [number, setNumber] =useState(0);

  const sum =()=>{
    setNumber(parseInt(number1)+parseInt(number2));
    console.log(number);
  }
  const sub =()=>{
    setNumber(parseInt(number1)-parseInt(number2));
    console.log(number)
  }
  const mul =()=>{
    setNumber(parseInt(number1)*parseInt(number2));
    console.log(number)
  }
  const div =()=>{
    setNumber(parseInt(number1)/parseInt(number2));
    console.log(number)
  }
  
  return (
    <>
      <h1>Calculator</h1>
      <label>Input first number : </label>
      <input type="number" id="number1"></input>
      <button onClick={num1}>Assign</button>
      <br />
      <label>Input second number : </label>
      <input type="number" id="number2"></input>
      <button onClick={num2}>Assign</button>
      <br />
      <h2>Click below to get desired answer</h2>
    <button onClick={sum}>Sum</button>
      <button onClick={sub}>Substract</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={div}>Divide</button>
    <h2>Your Answer is : {number}</h2>

    </> 
  )
}

export default App
