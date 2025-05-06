
import { useState } from "react"




export default function Button() {
const [count, setCount] = useState(0)
  const handleClick =() => setCount(count + 1)

  return (
    <button onClick={handleClick}
    className="bg-blue-600 text-amber-300 px-4 py-2 rounded mt-6"> 
    clics: {count}
    </button>
  )
}