import { useCallback, useState, useEffect, useRef } from "react"


function App() {
 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null)


  const passGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="{!@#$%^&*()-=_}|";

    for(let i=1; i<=length; i++)
    {
      let index = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(index);
    }
    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passGen();
  },[length, numberAllowed, charAllowed, passGen])


  const copyPassToClip = useCallback(()=>{
      passRef.current?.select()
      passRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md
       rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-4">
      
      <h1 className="text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden">
      <input
      ref={passRef}
      type = "text"
      value={password}
      className="outline-none w-full px-3 py-1"
      placeholder="password"
      readOnly
      />
      <button 
      onClick={copyPassToClip}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
          type = "range"
          min={1}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="length">length: {length}</label>
      <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked = {numberAllowed}
        id = "numberInput"
        className="cursor-pointer"
        onChange={()=> {
          setNumberAllowed((prev)=> !prev)
        }}
      />
      <label htmlFor="nubmerInput">numbers</label>


      </div>
      <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked = {charAllowed}
        id = "charInput"
        className="cursor-pointer"
        onChange={()=> {
          setCharAllowed((prev)=> !prev)
        }}
      />
      <label htmlFor="charInput">characters</label>


      </div>
          
        </div>
      </div>

      </div>
    </>
  )
}

export default App
