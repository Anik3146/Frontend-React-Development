
import React from 'react'
import ReactDOM from 'react-dom/client'


const anotherElement = (
  <a href='https://youtube.com' target='_blank'>Visiting google</a>
)
const user = "Nazmul Hossain Anik"
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target:'_blank'},
    'Click me to visit google',
    user
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement,
    anotherElement
  
)
