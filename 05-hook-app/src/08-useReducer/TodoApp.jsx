import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodos } from './useTodos'

export const TodoApp = () => {
  // useTodos() es un custom hook
  // returnm todos, handleNewTodo, handleDeleteTodo, onToggleTodo

  const { todos, handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos()

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
