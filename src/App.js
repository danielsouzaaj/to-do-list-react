import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import Task from './components/Task';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('@todo')) || [])
  const [id, setId] = useState(todos.length)

  useEffect(() => {
    console.log('entrei 2')
    localStorage.setItem('@todo', JSON.stringify(todos))
    
  }, [todos])

  function addTask(task) {
    setTodos([...todos, {id, task, isCompleted: false}])
    setId(id + 1)
  }

  function removeTodo(id) {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  function completeTodo(id) {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <main className='wrapper'>
      <div className='container'>
        <div className='task-container'>
          <h2 className="title title-task">Adicionar uma tarefa</h2>
          <TodoForm addTask={addTask} />
        </div>

        <div className="board-container">
          <h2 className="title title-board">Quadro de tarefas</h2>
          <ul className='list'>
            {todos.map(todo => 
              <Task 
                key={todo.id} 
                todo={ todo } 
                removeTodo={removeTodo} 
                completeTodo={completeTodo} 
              />
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
