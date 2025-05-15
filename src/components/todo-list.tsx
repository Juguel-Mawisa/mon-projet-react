import { useState } from "react"


type Props = {}

export default function TodoList({}: Props) {
    const [todos, setTodos] = useState([
    { id: 1, text: "Apprendre Html", completed: false },
    { id: 2, text: "Apprendre Css", completed: false },
    { id: 3, text: "Apprendre JavaScript", completed: false },
    { id: 4, text: "Apprendre Adonis.js", completed: false },
    { id: 5, text: "Apprendre Reactjs", completed: false },
    ])

    const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      {todos.length === 0 && (
        <p className="text-center text-gray-500 italic">
          Aucune tâche pour aujourd’hui !
        </p>
      )}

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 text-blue-500"
              />
              <span
                className={`text-base ${
                  todo.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 text-lg"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}