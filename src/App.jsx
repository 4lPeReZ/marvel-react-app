import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "tailwindcss/tailwind.css"
import Characters from './components/characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-wrap">
      <Characters/>
    </div>
  )
}

export default App
