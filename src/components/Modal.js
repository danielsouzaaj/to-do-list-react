import { useState } from "react";
import removeIcon from '../assets/images/remove.svg'

function Modal ({ open, onClose, todo, edit }) {

    const [newTask, setNewTask] = useState(todo.task)

    function handleSubmit(e) {
        e.preventDefault()
        
        todo.task = newTask
        edit(todo)
        onClose(false)
    }
    
    return (
        <div className="modal">
            <header>
                <h2>Editar tarefa</h2>
                
                <button type="button" className="btn" onClick={() => onClose(false)}>
                    <img src={removeIcon} alt="fechar"/>
                </button>
            </header>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Descreva a tarefa!"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <button className='form-btn' type='submit'>Editar</button>
            </form>
        </div>
    )
}

export default Modal