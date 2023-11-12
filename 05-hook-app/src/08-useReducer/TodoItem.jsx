export const TodoItem = ({ id, description, pos, done, onDeleteTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <p className='text-center'>
        {pos}. {description}
      </p>
      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  )
}
