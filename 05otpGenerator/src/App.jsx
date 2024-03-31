import { useCallback, useEffect, useRef, useState } from "react"


function App() {

const [length, setLength] = useState(8);
const [allowChar, setAllowChar] = useState(false);
const [allowNum, setAllowNum] = useState(false);
const [password, setPassword] = useState("");
const [matched, setMatched] = useState("");

const passGeneration = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(allowChar)
      str+="!@#$%&*"
      if(allowNum)
      str+="0123456789"
      for(let i=1; i<=length; i++)
      {
           let index = Math.floor(Math.random()*str.length+ 1)
           pass+=str.charAt(index);
      }
     setPassword(pass);
      
}, [length, allowChar, allowNum, setPassword])

const match = ()=>{
  const str = document.getElementById('message').value;
  if(str==password)
  setMatched("matched")
  else
  setMatched("not matched")

}

useEffect(()=>{
passGeneration();
},[length,allowChar,allowNum,passGeneration])

const Ref = useRef(null);

const state = useCallback(()=>{

  Ref.current?.select();
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className="bg-blue-100 h-screen"> 
      <header>
        <nav>
          <div className="w-full shadow-lg text-right text-red-200 bg-slate-700 rounded-none py-10">
            <option value="home" style={{ display: 'inline-block', marginRight: '10px' }}>Home</option>
            <option value="admin" style={{ display: 'inline-block', marginRight: '10px' }}>Admin</option>
            <option value="contact" style={{ display: 'inline-block', marginRight: '10px' }}>Contact</option>
          </div>
        </nav>
      </header>

      <main>
        <div className="text-center font-bold text-3xl mt-10 m-10">
          <h1>OTP Generator</h1>
        </div>
        <div className="flex justify-center mr-2">
          <input
            ref={Ref}
            type="text"
            className="outline-none max-w-md px-5 py-2"
            placeholder="password"
            value={password}
         
          />
         <button
          onClick={state} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2">
          Copy it!
        </button>
       </div>
       <div className="flex justify-center mt-3 pr-7">
       <input type="range"
       value={length}
       onChange={(e)=>setLength(e.target.value)}
       min={1}
       max={8} 
       className="cursor-pointer"
       />
       <label htmlFor="range">Length : {length}</label>
       </div>
       <div className="flex justify-center mt-3 pr-7">
       <input type="checkbox"
        className="cursor-pointer"
        id="inputchar" 
        defaultChecked={allowChar}
        onChange={()=>{
          setAllowChar((prev)=>!prev)
        }}

       />
       <label htmlFor="inputchar"  className="flex ml-3"> Special Characters</label>
       </div>
       <div className="flex justify-center mt-3 pr-7">
       <input type="checkbox"
       className="cursor-pointer"
       id="inputnum"
       defaultChecked={allowNum}
        onChange={()=>{
          setAllowNum((prev)=>!prev)
        }}
       />
       <label htmlFor="inputnum" className="flex ml-3"> Include Numbers</label>
       </div>
       <div className="flex justify-center">
       <label htmlFor="message" className=" text-sm font-medium justify-center mt-3 text-gray-900 dark:text-white">Write your text</label>
       <textarea id="message" rows="4" className="block p-2.5 ml-2 mt-3 max-w-md text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste here..."></textarea>
       <br />
       <button onClick={match} className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold mt-12 rounded-lg ml-2">Check it!</button>
       
       </div>
       <div  className="text-center ">
        <h1>Status : {matched}</h1>
        
       </div>
       


      </main>

      <footer className="text-center text-gray-600 mt-20">
          &copy; {new Date().getFullYear()} Copyright
        </footer>
    </div>
    </>
  )
}

export default App
