import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          {...todo}
          pos={i + 1}
          onDeleteTodo={(id) => onDeleteTodo(id)}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  )
}
