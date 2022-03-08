import { useState } from 'react'
import Form from './components/form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Form />
    </div>
  )
}

export default App
