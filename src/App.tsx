import { useState } from "react";
import { Todos } from "./components/Todos";
import { type FilterValue, type ITodo, type TodoId, type TodoTitle } from "./types";
import { Footer } from "./components/Footer";
import { TODO_FILTERS } from "./consts";
import { Header } from "./components/Header";

const mocks = [
  { id: '1', title: 'Todo 1', completed: true},
  { id: '2', title: 'Todo 2', completed: false},
  { id: '3', title: 'Todo 3', completed: false},
  { id: '4', title: 'Todo 4', completed: false},
  
]

const App: React.FC = () =>  {
  const [todos, setTodos] = useState(mocks);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  })

  const handleRemove = ({id}:TodoId):void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleComplete = ({id, completed}:Pick<ITodo, 'id' | 'completed'>):void => { 
    const newTodos = todos.map(todo => todo.id === id ? {...todo, completed} : todo);
    setTodos(newTodos);
  }

  const handleFilterChange = (filter:FilterValue): void => setFilterSelected(filter as FilterValue)
  const handleClearCompleted = ():void => setTodos(todos.filter(todo => !todo.completed))
  const handleAddTodo = ({title}:TodoTitle ) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    setTodos([...todos, newTodo]); 
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos onRemoveTodo={handleRemove} handleComplete={handleComplete} todos={filteredTodos} />
      <Footer filterSelected={filterSelected} handleFilterChange={handleFilterChange} activeCount={activeCount} completedCount={completedCount} onClearCompleted={handleClearCompleted}/>
    </div>
  )
}

export default App
