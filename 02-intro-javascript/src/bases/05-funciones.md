```javascript
// Funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

// Función de flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola mundo!`

const getUser = () => ({
  uid: 'ABC123',
  username: 'Elobjeto222',
})

console.log(saludar('Goku'))
console.log(saludar2('Vegeta'))
console.log(saludar3('Función de flecha'))
console.log(saludar4())
console.log(getUser())

const user = getUser()
console.log(user)

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC123',
  unsername: nombre,
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)
```
