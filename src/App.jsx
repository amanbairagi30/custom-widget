import { useState } from 'react'
import Widget from './Widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Widget />
    </>
  )
}

export default App
