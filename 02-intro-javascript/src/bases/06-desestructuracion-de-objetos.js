// Desestructuración
// Asignación desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
}

const { nombre, edad, clave } = persona

console.log(nombre)
console.log(edad)
console.log(clave)

// console.log(persona.edad)
// console.log(persona.clave)

const useContext = ({ nombre, edad, rango = 'Capitán' }) => {
  //   console.log(nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1333,
      lng: -12.2322,
    },
  }
}

useContext(persona)
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona)
console.log(nombreClave, anios, lat, lng)
