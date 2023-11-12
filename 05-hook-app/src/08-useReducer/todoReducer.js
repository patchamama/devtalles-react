export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      // { type: '[TODO] Add Todo', payload: {id: new Date().getTime(), desc: 'Aprender React', done: false}}}
      return [...initialState, action.payload]
    case '[TODO] Remove Todo':
      // { type: '[TODO] Remove Todo', payload: id}
      return initialState.filter((todo) => todo.id !== action.payload)
    case '[TODO] Toggle':
      // { type: '[TODO] Toggle', payload: id}
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    case '[TODO] Toggle-old':
      // { type: '[TODO] Toggle', payload: id}
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          }
        } else {
          return todo
        }
      })
    default:
      return initialState
  }
}
