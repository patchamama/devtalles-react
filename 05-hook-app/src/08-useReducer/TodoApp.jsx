import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     description: 'Recolectar la piedra del alma',
  //     done: false,
  //   },
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    // const todos = JSON.parse(localStorage.getItem('todos')) || []
    // dispatch({
    //   type: '[TODO] Load Todos',
    //   payload: todos,
    // })
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    // console.log({ todo })
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
    // console.log(Id)
  }

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
