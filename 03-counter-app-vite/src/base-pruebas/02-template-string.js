const nombre = 'Fernando'
const apellido = 'Herrera'

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

export function getSaludo(nombre) {
  return 'Hola ' + nombre
}
