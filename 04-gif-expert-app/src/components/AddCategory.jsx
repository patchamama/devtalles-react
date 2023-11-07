import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    console.log(inputValue)
    setCategories((categories) => [...categories, inputValue])
    setInputValue('')
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
