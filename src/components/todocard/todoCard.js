import React, { useContext } from 'react'
import './todocard.css'
import { Context } from '../../todoContext';

function TodoCard(props) {
  const context = useContext(Context)
  const { removeTodo, markTodo } = context;

  const handleRemoveTodo =  (id) => {
     removeTodo(id)
  }

  const handleMarkTodo = (id) => {
    markTodo(id)
  }

  return (
    <div className='todo'>
      <div className='todoblock'>
        <p className={`title ${props.todo.completed ? 'other-title' : ''}`}>{props.todo.title}</p>
        <div className='icons'>
          <span>
            <img onClick={() => handleMarkTodo(props.index)} className='icon' src='/icon/right.png' alt='markicon' />
          </span>
          <span>
            <img onClick={() => handleRemoveTodo(props.todo.id)} className='icon' src='/icon/close.png' alt='closeicon' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TodoCard
