import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      console.log('Ya existe esa categoría')
      return
    }
    setCategories([newCategory, ...categories])
    // setCategories(['HunterXHunter', ...categories])
    // setCategories((cats) => [...cats, 'HunterXHunter'])
  }

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        // onNewCategory={(value) => onAddCategory(value)}
        onNewCategory={onAddCategory}
      />

      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
