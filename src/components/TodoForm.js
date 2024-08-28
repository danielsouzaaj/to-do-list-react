import { useState } from "react"

function TodoForm({ addTask }) {

    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (!input) return

        addTask(input)
        setInput('')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Descreva a tarefa'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className='form-btn' type='submit'>Criar tarefa</button>
        </form>
    )
}

export default TodoForm