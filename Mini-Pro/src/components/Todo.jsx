import { useState, useEffect } from "react"

const Todo = () => {

  const [todos, setTodos] = useState([])

  const [input, setInput] = useState("")

  const handleSumbit = () => {

    if (!input.trim()) return;

    setTodos(todos => [...todos, { id: Date.now(), text: input }])

    setInput("");
  }

  const removeTodo = (id) => setTodos(todos => todos.filter((t) => t.id !== id))

  return (
    <div className="size-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        className="border border-gray-300 p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSumbit} className="p-2 active:bg-gray-900 bg-gray-700 rounded-4xl">Sumbit</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className=" flex gap-2 justify-center items-center p-2 rounded">
            {todo.text}
            <button onClick={() => removeTodo(todo.id)} className="p-2 rounded-full active:bg-gray-900 bg-gray-700 ">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
