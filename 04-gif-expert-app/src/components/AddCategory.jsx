import { useState } from 'react'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
