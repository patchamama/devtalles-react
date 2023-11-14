export const TodoItem = ({
  id,
  description,
  pos,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        aria-label='span'
        className={`align-self-center ${
          done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleTodo(id)}
      >
        {pos}. {description}
      </span>
      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  )
}
