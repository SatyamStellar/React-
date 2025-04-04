import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleinc = () => {
    setCount(count + 1)
  }
  const handledec = () => {
    setCount(count - 1)
  }
  const handleres = () => {
    setCount(0)
  }
  return (
    <div className="size-full flex flex-col justify-center items-center gap-2">
      <button onClick={handleinc} className=" w-auto p-2 bg-gray-700 rounded-4xl text-3xl">+</button>
      <h1 className="text-6xl">{count}</h1>
      <button onClick={handledec} className=" w-auto p-2 bg-gray-700 rounded-4xl text-3xl">-</button>
      <button onClick={handleres} className=" w-auto p-2 bg-gray-700 rounded-4xl text-3xl">Reset</button>
    </div>
  )
}

export default Counter
