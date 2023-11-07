import { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ])

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* input */}

      {/* listado de Gifs */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
