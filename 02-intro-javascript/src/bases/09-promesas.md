```javascript
// Promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import {
  getHeroeById,
  getHeroeByOwner,
} from './08-import-export-funciones-arreglos'

const promesa = new Promise((resolve, reject) => {
  // resolve es otro callback que se ejecuta sí todo funcionó bien
  // y reject se ejecuta sí ha habido algún error

  setTimeout(() => {
    const heroe = getHeroeById(2)
    resolve(heroe) // se ejecuta la promesa y al terminarse se ejecuta el .then()
    // y le envía el valor al then
    // reject('No se encontró el héroe') // esto se envía al .catch()
  }, 2000)
})

promesa
  .then((heroe) => {
    // enviado desde el resolve()
    // el parámetro enviado en la línea 15 con el resolve()
    // Se ejecuta después de ejecutarse la promesa
    console.log('heroe', heroe)
  })
  .catch((err) => console.warn(err)) // enviado desde el reject()

// --- Otra forma de hacer esto ------------
const getHereoByIDAsync = (id) => {
  return new Promise((resolve, reject) => {
    // resolve es otro callback que se ejecuta sí todo funcionó bien
    // y reject se ejecuta sí ha habido algún error

    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject('No se encontró el héroe')
      }
      //   resolve(heroe) // se ejecuta la promesa y al terminarse se ejecuta el .then()
      // y le envía el valor al then
      // reject('No se encontró el héroe') // esto se envía al .catch()
    }, 2000)
  })
}
getHereoByIDAsync(10)
  .then((heroe) => {
    // Acciones de la promesa aquí relacionado con el resolve()
    console.log('heroe', heroe)
  })
  .catch((err) => {
    // Acciones de la promesa con errores aquí enviados con reject()
    console.warn(err)
  })
  .finally(() => {
    // Acciones que siempre se ejecutarán al final aquí
  })

getHereoByIDAsync(3)
  .then(console.log) // El parámetro pasado en el resolve(param) se pasa directamente al console.log()
  .catch(console.warn) // El parámetro pasado al reject(param) se pasa directamente al console.warn()
  .finally(() => {
    // Acciones que siempre se ejecutarán al final aquí
  })
```
