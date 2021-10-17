import {useState} from 'react'
import favicon from './favicon.svg'

export function App() {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <img src={favicon} alt="" />
    </div>
  )
}
