import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

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
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <button onClick={onAddCategory}>Agregar</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
