import { useState } from 'react'
import Form from './components/form'
import './App.css'

import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
})
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
