import React, { useState } from 'react'
import { addTodo } from './actions'
import { useDispatch } from 'react-redux'

function Input (props) {

  const [text, setText] = useState("");

  const [check, setCheck] = useState(false);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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
    <div>
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
    </div>
  )
}

export default Input