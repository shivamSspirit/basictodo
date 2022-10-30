import React, { useContext } from 'react'
import TodoForm from '../todoform/todoForm'
import { Context } from '../../todoContext'
import TodoCard from '../todocard/todoCard'
import './mainpage.css'

function MainPage() {
    const context = useContext(Context);
    const { Todos } = context;
    return (
        <div className='main-page-block'>
            <div className='form-block'>
                <TodoForm />
            </div>
            <div className='todos-block'>
                {Todos&&Todos.map((item, id) => (
                    <TodoCard key={id} todo={item} index={id} />
                ))}
            </div>
        </div>
    )
}

export default MainPage