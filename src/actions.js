export function deleteTodo(i) {
  return {type: 'delete', payload: { ind: i, pass: 'qwr' }}
}

export function makeFavoriteTodo(i) {
  return {type: 'mFavorite', payload: i}
}

export function addTodo(text, check) {
  return {type: 'add' , payload: {text, check}}
}

//action creator
//экш креэйтор