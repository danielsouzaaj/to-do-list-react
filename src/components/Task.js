import { FaPencilAlt } from 'react-icons/fa';
import uncheckedIcon from '../assets/images/unchecked.svg'
import checkIcon from '../assets/images/check.svg'
import removeIcon from '../assets/images/remove.svg'

function Task({ todo, removeTodo, completeTodo, editTodo }) { 

    return (
        <li className={todo.isCompleted ? 'list-item check' : 'list-item'}>
            <button className='btn' onClick={() => completeTodo(todo.id)}>
                <img src={todo.isCompleted ? checkIcon : uncheckedIcon} alt="unchecked" />
            </button>
            <p className='task' title={todo.task}>{todo.task}</p>

            <button className='btn' onClick={() => editTodo(todo)}>
                <FaPencilAlt />
            </button>

            <button className='btn' onClick={() => removeTodo(todo.id)}>
                <img src={removeIcon} alt='remove'/>
            </button>
        </li>
    )
}

export default Task