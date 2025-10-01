## devTalles - Curso de React: De cero a experto con TypeScript (Hooks y MERN)

_https://cursos.devtalles.com/courses/take/react-cero-experto_

[Examples (deploy)](https://patchamama.github.io/devtalles-react/)

[Notas de antiguo curso con Javascript](https://github.com/patchamama/devtalles-react/tree/ald_react_de_cero_a_experto_con_JS)

[Notas de curso de Gentleman sobre React](https://github.com/patchamama/devtalles-react/tree/gentleman_react_de_cero_a_expecto_notes)

## Descripción

Mis notas personales del _[Curso de React: De cero a experto (Hooks y MERN)](https://cursos.devtalles.com/courses/take/react-cero-experto)_ brindado por _Fernando Herrera_.

## Sección 3 - Reforzamiento JS/TS

### Template String

> [!NOTE]
> Note: Entre llaves se pone una expresión de JS en los template string.

```ts
const firstName = 'Fernando'
const lastName = "O'Neal"

const fullName = `
Mi nombre es: ${firstName} 
Apellido: ${lastName}
1 + 1 es ${1 + 1}`

console.log(fullName)
```

### Object literal

Tenemos este código base:

```ts
const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC-123',
    city: 'New York',
  },
}

const spiderman = ironman // reference copy, same memory address, not a copy of the object, so spiderman and ironman share the same address in memory
spiderman.firstName = 'Peter'
spiderman.age = 21 // modifying spiderman also modifies ironman

const new_partial_ironman = { ...ironman } // shallow copy using spread operator, only copies the first level of properties
new_partial_ironman.firstName = 'Tony Stark'
new_partial_ironman.address.city = 'Los Angeles' // modifying address in new_partial_ironman also modifies ironman

const new_deep_ironman = structuredClone(ironman) // deep copy using structuredClone, copies all levels of properties
new_deep_ironman.firstName = 'Ironman'
new_deep_ironman.address.city = 'San Francisco' // modifying address in new_deep_ironman does not modify ironman
```

> [!CAUTION]
>
> - Sí modificamos spiderman, automáticamente se modifican los parámetros de ironman al compartir ambos la misma dirección de memoria.
> - Podemos modificar new_partial_ironman sin que afecte a ironman, ya que es una copia superficial (shallow copy) de ironman pero no de sus objetos anidados (address), por lo que si modificamos address en new_partial_ironman, también se verá afectado ironman.
> - Para hacer una copia profunda (deep copy) de ironman, podemos usar `structuredClone` o librerías como lodash (`_.cloneDeep(ironman)`), en este caso se realiza un deep copy de los datos y sus objetos anidados por lo que sí modificamos new_deep_ironman, no afectará a ironman.

### Interfaces

```ts
interface Person {
  firstName: string
  lastName: string
  age: number
  address?: Address // optional property
}

interface Address {
  postalCode: string
  city: string
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC-123',
    city: 'New York',
  },
}
```

> [!NOTE]
> Las interfaces en TypeScript son una forma de definir la estructura de un objeto,
> especificando los nombres y tipos de sus propiedades. Son útiles para asegurar que los objetos
> cumplan con ciertos requisitos y para mejorar la legibilidad y mantenibilidad del código.
> Las interfaces son una característica exclusiva de TypeScript y no existen en JavaScript puro,
> por lo que no se transpilan a código JavaScript.
> Se pueden usar para definir la forma de objetos, funciones, clases y otros tipos de datos.
> Se pueden extender y combinar para crear estructuras de datos más complejas.
> Se definen usando el nombre siempre en CamelCase y la palabra clave `interface`.

> [!TIP]
> EN VSCode, al definir una interface y luego usarla en un objeto,
> al pasar el cursor sobre el objeto, se muestra la estructura de la interface.
> Sí definimos una constante como `const ironman: Person = { }`, al ponernos sobre `ironman` y pulsar `Command + .`
> nos da la opción de implementar la interface automáticamente (add missing properties).

### Functiones con múltiples retornos

```ts
const getUser = (): [number, string] => {
  return [1, 'Fernando']
}

const [id, username] = getUser()
console.log(id, username)

interface User {
  uid: string
  username: string
}

function getUser1(): User {
  return {
    uid: 'ABC-123',
    username: 'El_Papi23',
  }
}

// En caso de funciones tradicionales, aunque no se recomienda, se puede reasignar la función a una variable.
getUser1 = function (): number {
  return 123
}

const getUser2 = (): User => ({
  uid: 'ABC-123',
  username: 'El_Papi23',
}) // aquí hay que usar paréntesis para que lo interprete como un objeto que se devuelve y no como un bloque o cuerpo de código de la función.
const { uid, username } = getUser2()
console.log(uid, username)

const myNumbers: number[] = [1, 2, 3]

// Callbacks: son funciones que se pasan como argumentos a otras funciones y se ejecutan dentro de esa función.
myNumbers.forEach(function (value) {
  console.log({ value })
}) // función tradicional
myNumbers.forEach((value) => console.log({ value })) // función flecha
myNumbers.forEach(console.log) // función flecha sin cuerpo de código equivalente a: myNumbers.forEach((value) => console.log(value))
```

### Desestructuración

```ts
interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

const useContext = ({ key, name, age, rank = 'sin rango' }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  }
}

const {
  rank,
  keyName,
  user,
  // user: { name },
} = useContext(person)
const { name } = user

console.log({ rank, keyName, name })
```

> [!NOTE] 
> En la desestructuración de objetos, podemos asignar valores por defecto a las propiedades que estamos extrayendo. En el ejemplo anterior, la propiedad `rank` se asigna a `'sin rango'` si no está definida en el objeto `Hero`. También podemos renombrar las propiedades al desestructurarlas, como se muestra con `keyName` que toma el valor de `key`. Además, podemos desestructurar objetos anidados, como se hace con `user`, y luego extraer propiedades específicas de ese objeto anidado, como `name`. Esto nos permite trabajar con los datos de manera más directa y clara, evitando la necesidad de acceder a las propiedades a través del objeto original cada vez que las necesitamos, tal como `user.name`. Esto mejora la legibilidad y mantenibilidad del código, especialmente cuando trabajamos con objetos complejos o funciones que retornan múltiples valores. Es importante recordar que al desestructurar, si una propiedad no existe en el objeto original, se le asignará `undefined` a menos que se especifique un valor por defecto y además de que el orden de las propiedades no importa, ya que se identifican por su nombre (no por su posición), sí fuera un array, el orden sí importaría.

### Desestructuración en arrays

```ts
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [p1, p2, p3] = dbz
console.log({ p1, p2, p3 })

const returnArray = (): [string, number] => {
  return ['ABC', 123] as const
  // return ['ABC', 123] as [string, number]
}
const [letters, numbers] = returnArray()
console.log({ letters, numbers: numbers + 1 }) // numbers es de tipo number, no string y por ello se le puede sumar 1 y no se generará error de compilación.

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log({ newValue })
    },
  ] as const // as const hace que el tipo devuelto sea una tupla de longitud fija y tipos específicos, en lugar de un array genérico de tipo (string | (newValue: string) => void)[]
}
const [counter, setCounter] = useState('10')
console.log(counter)
```

> [!NOTE]
> En la desestructuración de arrays, el orden de los elementos es crucial, ya que se asignan a las variables en función de su posición en el array. En el ejemplo anterior, `p1` recibe el valor `'Goku'`, `p2` recibe `'Vegeta'` y `p3` recibe `'Trunks'`. Si quisiéramos omitir un elemento, podríamos hacerlo dejando un espacio vacío en la posición correspondiente, por ejemplo: `const [p1, , p3] = dbz;` asignaría `'Goku'` a `p1` y `'Trunks'` a `p3`, mientras que `p2` quedaría sin asignar. Además, podemos usar el operador de propagación (`...`) para capturar el resto de los elementos en un nuevo array. Por ejemplo: `const [p1, ...rest] = dbz;` asignaría `'Goku'` a `p1` y `['Vegeta', 'Trunks']` a `rest`. Esto es especialmente útil cuando no sabemos cuántos elementos tendrá el array o cuando queremos trabajar con una parte específica del mismo. La desestructuración de arrays mejora la legibilidad del código y facilita el acceso a los elementos individuales sin necesidad de usar índices.
>
> También podemos desestructurar arrays anidados, por ejemplo: `const nestedArray = [1, [2, 3], 4]; const [a, [b, c], d] = nestedArray;` asignaría `1` a `a`, `2` a `b`, `3` a `c` y `4` a `d`.
> Además, podemos asignar valores por defecto a las variables durante la desestructuración, por ejemplo: `const [x = 10, y = 20] = [5];` asignaría `5` a `x` y `20` a `y`, ya que `y` no tiene un valor correspondiente en el array original.

### Tipos y enumeraciones

```ts
export interface Hero {
  name: string
  age: number
  Owner: Owner
  type?: HeroType // optional property
}

enum HeroType {
  'Mutant' = 'Mutant', // Sí no se asigna un valor, el valor por defecto es el índice numérico (0, 1, 2, ...) y con este formato se asigna el mismo nombre como valor de la enumeración.
  'Alien' = 'Alien',
  'Human' = 'Human',
  'Demon' = 'Demon',
}

export type Owner = 'Marvel' | 'DC' | 'Other'

export const heroes: Hero[] = [
  {
    name: 'Wolverine',
    age: 500,
    Owner: 'Marvel',
    type: HeroType.Mutant,
  },
  {
    name: 'Batman',
    age: 40,
    Owner: 'DC',
    type: HeroType.Human,
  },
]

// export default heroes
// Para importar en otro archivo:
import { heroes, type Hero, Owner } from './path/to/file' // type se usa para importar solo el tipo y no el valor.
const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.age === id)
  if (!hero) {
    throw new Error(`Hero with id ${id} not found`)
  }
  return hero
}
const getHeroByOwner = (owner: Owner): Hero[] => {
  return heroes.filter((hero) => hero.Owner === owner)
}
```

> [!NOTE]
>
> - Las enumeraciones (enums) en TypeScript son una forma de definir un conjunto de valores constantes con nombres descriptivos. Se utilizan para representar un conjunto limitado de opciones, mejorando la legibilidad y mantenibilidad del código. Los enums pueden ser numéricos o de cadena, y se definen usando la palabra clave `enum`. Los valores de un enum pueden ser asignados explícitamente o pueden tomar valores por defecto (números secuenciales comenzando desde 0). Los enums son útiles para representar estados, categorías o cualquier conjunto de valores relacionados en una aplicación. Los types en TypeScript permiten definir tipos personalizados que pueden ser utilizados para variables, parámetros de funciones y propiedades de objetos. A diferencia de las interfaces, los types pueden representar tipos primitivos, uniones, intersecciones y otros tipos complejos. Se definen usando la palabra clave `type` y son útiles para crear alias de tipos existentes o para definir tipos compuestos. Los types mejoran la claridad del código y facilitan la reutilización de definiciones de tipos en diferentes partes de una aplicación.
> - En el ejemplo anterior, se define un enum `HeroType` con valores de cadena para representar diferentes tipos de héroes. También se define un type `Owner` como una unión de cadenas para representar los posibles propietarios de los héroes. La interfaz `Hero` utiliza tanto el enum como el type para definir las propiedades de un héroe, incluyendo una propiedad opcional `type`. Finalmente, se crea un array de objetos `person` que implementan la interfaz `Hero`, demostrando cómo se pueden utilizar enums y types en la práctica.

### Promesas y async/await

```ts
const getHeroById = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.age === id)
    if (!hero) {
      return reject(`Hero with id ${id} not found`)
    }
    setTimeout(() => {
      resolve(hero)
    }, 1000)
  })
}
const getHeroByIdAsync = async (id: number): Promise<Hero> => {
  const hero = heroes.find((hero) => hero.age === id)
  if (!hero) {
    throw new Error(`Hero with id ${id} not found`)
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hero)
    }, 1000)
  })
}
getHeroById(1)
  .then((hero) => console.log('Then:', hero))
  .catch((error) => console.warn(error))
  .finally(() => console.log('Finally'))

getHeroByIdAsync(1)
  .then((hero) => console.log('Then:', hero))
  .catch((error) => console.warn(error))
  .finally(() => console.log('Finally'))

const getHeroByIdAsyncAwait = async (id: number) => {
  try {
    const hero = await getHeroByIdAsync(id)
    console.log('Async/Await:', hero)
  } catch (error) {
    console.warn(error)
  } finally {
    console.log('Finally')
  }
}
getHeroByIdAsyncAwait(1)
```

Ver sección de [Evaluaciones](docs/evaluaciones.md).
