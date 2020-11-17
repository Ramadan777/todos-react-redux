import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, makeFavoriteTodo } from './actions'

function Todos (props) {

  const todos = useSelector(function (state) {
    return state.todos;
  })

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index))
  }

  const makeFavorite = (i) => {
    dispatch(makeFavoriteTodo(i))
  }

  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div className={`todo ${todo.favorite ? "selected" : ""}`}>
            <div className="favorite">
              <button onClick={() => makeFavorite(index)}>⭑</button>
            </div>
            <div className="todo-text" key={index}>
              {todo.text}
            </div>
            <div className="actions">
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Todos