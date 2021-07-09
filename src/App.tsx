import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodos = (id: string) => {
    const currentTodos = [...todos];
    const todoIndex = currentTodos.findIndex((todo) => todo.id === id);
    currentTodos.splice(todoIndex, 1);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <NewTodo setTodos={setTodos} />
      <Todos items={todos} remove={removeTodos} />
    </div>
  );
}

export default App;
