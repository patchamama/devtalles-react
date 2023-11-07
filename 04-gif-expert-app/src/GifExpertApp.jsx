import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    // 'Samurai X',
    // 'Dragon Ball',
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

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
