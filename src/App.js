import './style.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, makeFavoriteTodo } from './actions'

function App() {

  const todos = useSelector(function (state) {
    return state.todos;
  })

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const [check, setCheck] = useState(false);

  const [error, setError] = useState(false);

  const handleDelete = (index) => {
    dispatch(deleteTodo(index))
  }

  const makeFavorite = (i) => {
    dispatch(makeFavoriteTodo(i))
  }

  const handleClick = () => {
    if (text.length > 0) {
      dispatch(addTodo(text, check))
      setText('')
      setCheck(false)
    } else {
        setError(true);
    }
  }


  const handleChange = (e) => {
    setText(e.target.value)
    setError(false)
  }

  const handleCheck = () => {
    setCheck(!check);
  }

  return (
    <div className="app">
      <div className="header">
        Список дел
      </div>
      <div className="error">
        {error ? 'заполни поле' : ''}
      </div>
      <div className="form">
        <input
          placeholder="Введите текст.."
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          Добавить
        </button>
      </div>
      <input className="checkbox"
        type="checkbox"
        checked={check}
        onChange={handleCheck}
      />
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
    </div>
  );
}

export default App;
