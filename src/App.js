import './style.css'
import React, { useState } from 'react'

function App() {
  const todoList = [
    {
      text: 'Купить бананы',
      favorite: false
    },
    {
      text: 'Продать квартиру',
      favorite: false
    },
    {
      text: 'Выучить уроки по JavaScript',
      favorite: true
    }
  ]

  const [todos, setTodos] = useState(todoList);

  const [text, setText] = useState("");

  const [check, setCheck] = useState(false);

  const deleteTodo = (i) => {
    const filtered = todos.filter((todo, index) => {
      if(index === i) {
        return false;
      }
      return true;
    });

    setTodos(filtered);
  }

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if(i === index) {
        return {
          ...item,
          favorite: !item.favorite
        }
      }
      return item;
    });

    setTodos(newTodos);
  }

  const handleClick = () => {
    setTodos([
      ...todos,
      {text: text, favorite: check}
    ])
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleCheck = () => {
    setCheck(!check);
  }

  return (
    <div className="app">
      <div className="header">
        Список дел
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
                <button onClick={() => deleteTodo(index)}>X</button>
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
