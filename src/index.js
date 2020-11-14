import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  todos: [
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
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'delete':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          if(index === action.payload.ind) {
            return false;
          }
          return true;
        })
      }

    case 'mFavorite':
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if(index === action.payload) {
            return {
              ...item,
              favorite: !item.favorite
            }
          }
          return item;
        })
      }

    case 'add':
      return {
        ...state,
        todos: [
          {text: action.payload.text, favorite: action.payload.check},
          ...state.todos,
          ]
      }

    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
