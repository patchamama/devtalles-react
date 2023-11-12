import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          {...todo}
          pos={i + 1}
          onDeleteTodo={(id) => onDeleteTodo(id)}
        />
      ))}
    </ul>
  )
}
