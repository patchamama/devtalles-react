```javascript
// Operador condicional ternario

const activo = true

let mensaje = ''

// if (!activo) {
//   mensaje = 'Activo'
// } else {
//   mensaje = 'Inactivo'
// }

// const mensaje = activo ? 'Activo' : 'Inactivo'
// const mensaje = activo ? 'Activo' : null

mensaje = activo && 'Activo' // se devuelve siempre lo que viene después de && sí activo

console.log(mensaje)
```
