import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import Task from './components/Task';
import Modal from './components/Modal';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('@todo')) || [])
  const [id, setId] = useState(todos.length === 0 ? todos.length : todos[todos.length - 1].id + 1)
  const [isOpen, setIsOpen] = useState(false)
  const [todoEdit, setTodoEdit] = useState({})

  useEffect(() => {
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

  function editTodo(todo) {
    setIsOpen(true)
    setTodoEdit(todo)
  }

  function edit(newTodo) {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === newTodo.id ? newTodo : todo)
    setTodos(newTodos)
  }

  function completeTodo(id) {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <main className='wrapper'>
      <div className='container'>
        {isOpen ? 
          (<Modal onClose={setIsOpen} todo={todoEdit} edit={edit}/>)
          :
          <div className='task-container'>
            <h2 className="title title-task">Adicionar uma tarefa</h2>
            <TodoForm addTask={addTask} />
          </div>
        }

        <div className="board-container">
          <h2 className="title title-board">Quadro de tarefas</h2>

          {todos.length === 0 && 
            <div className='not-task'>
              <h3>Você não tem tarefas :)</h3>
            </div>
          }

          <ul className='list'>
            {todos.map(todo => 
              <Task 
                key={todo.id} 
                todo={ todo } 
                removeTodo={removeTodo} 
                completeTodo={completeTodo} 
                editTodo={editTodo}
              />
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
