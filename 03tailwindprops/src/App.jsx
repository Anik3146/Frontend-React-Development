
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "Anik" btnText="click me"/>
      <Card username = "Nazmul" btnText="visit me"/>
    </>
  )
}

export default App
