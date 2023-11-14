import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const initialState = []

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch(action)
  }

  const handleDeleteTodo = (Id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: Id,
    }
    dispatch(action)
  }

  const onToggleTodo = (Id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: Id,
    }
    dispatch(action)
  }

  return {
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  }
}
