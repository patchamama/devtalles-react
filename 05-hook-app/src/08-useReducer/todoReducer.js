export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload]
    case '[TODO] Delete':
      return initialState.filter((todo) => todo.id !== action.payload)
    case '[TODO] Toggle':
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    case '[TODO] Toggle-old':
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
