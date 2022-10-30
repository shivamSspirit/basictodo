import React, { useState, useContext } from 'react'
import './todoform.css'
import { Context } from '../../todoContext'
function TodoForm() {
    const [addTodo, setAddTodo] = useState('this is second')
    const context = useContext(Context)
    const { updateTodos } = context

    const handleTodoChange = (e) => {
        setAddTodo(e.target.value)
    }

    const AddTodo = async (e) => {
        e.preventDefault();
        await updateTodos(addTodo)
        setAddTodo(addTodo);
        setTimeout(()=>{
            setAddTodo('plase feel again')
        },500)
    }

    return (
        <div className='todo-form-block'>
            <form onSubmit={AddTodo} className='todo-form'>
                <label className='todo-label' htmlFor='todo'>Todo:</label>
                <input value={addTodo} onChange={handleTodoChange} className='todo-input' placeholder='add todo' />
                <button className='add-button' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm
