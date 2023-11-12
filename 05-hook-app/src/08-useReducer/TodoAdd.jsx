import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {
  // const [description, setDescription] = useState('')
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim().length <= 1) {
      return
    }
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  // const handleInputChange = ({ target }) => {
  //   setDescription(target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='description'
        onChange={onInputChange}
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        value={description}
      />
      <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>
        Agregar
      </button>
    </form>
  )
}
