```javascript
const personajes = ['Goku', 'Vegeta', 'Trunks']

const [, , var3] = personajes
console.log(var3)

const retornaArreglo = () => {
  return [('ABC', 123)]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola mundo')
    },
  ]
}

const arr = useState('Goku')
arr[1]()

const [nombre, setNombre] = useState('Goku')
console.log(nombre)
setNombre() // parecido a arr[1]()
```
