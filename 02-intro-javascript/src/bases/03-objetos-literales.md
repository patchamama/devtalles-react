```javascript
// Objetos literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 12.65,
    lng: 34.23,
  },
}

console.log({ persona }) // = console.log({ persona:persona })

console.table(persona)

// const persona2 = persona // referencia el espacio de memoria de persona, pues sí se cambia persona2 también se cambia persona
// persona2.nombre = 'Peter'
// console.log(persona)
// console.log(persona2)

// Operador spread
const persona2 = { ...persona } //clona el objeto (contenido)
```
