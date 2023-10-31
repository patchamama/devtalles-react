// Async - await

const getImagen = async () => {
  try {
    const apiKey = 'GIY6EJ9YL5trOrLi1fg3XFVLh1KYn0oG'
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await resp.json()
    const { url } = data.images.original
    console.log(url)
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
    console.log(data)
  } catch (error) {
    // Manejo del error
    console.error(error)
  }
}

getImagen()

// const apiKey = 'GIY6EJ9YL5trOrLi1fg3XFVLh1KYn0oG'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original
//     console.log(url)
//     const img = document.createElement('img')
//     img.src = url
//     document.body.append(img)
//   })
//   .catch(console.warn) // este catch atrapa todos los errores
