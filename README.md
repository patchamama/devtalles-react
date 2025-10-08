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

Ver sección de [Evaluaciones](docs/01_reforzamiento.md).

## Sección 4 - Primeros pasos en React

Instalar react y dependencias:

```bash
npm create vite
```

Al instalarse Vite, se instala React y las dependencias necesarias. Al elegir el template, seleccionar `react-ts` para usar TypeScript. Sí se elige con la opción `swc`, se instala `@vitejs/plugin-react-swc` en lugar de `@vitejs/plugin-react`. **SWC**: _Speedy Web Compiler_ es un compilador super rápido escrito en `Rust` que puede ser usado como una alternativa a `Babel` para transformar y minificar código JavaScript y TypeScript. Es especialmente útil en proyectos donde la velocidad de compilación es crítica, como en aplicaciones web grandes o en entornos de desarrollo donde se requiere una retroalimentación rápida. SWC soporta muchas de las mismas características que `Babel`, incluyendo la transformación de JSX, TypeScript y las últimas características de JavaScript. Sin embargo, no tiene el mismo ecosistema de plugins y presets que `Babel`, por lo que puede no ser adecuado para todos los proyectos.

Se generan 3 archivos principales de configuración de typescript: `tsconfig.json`: configura el compilador de TypeScript, `tsconfig.node.json`: configura TypeScript para Node.js que corre en el servidor la aplicación y permite se pueda visualizar correctamente en el navegador (http://localhost:5173) y `tsconfig.app.json`: configura TypeScript para la aplicación de react en sí. `vite.config.ts`: configura Vite.

El archivo `package.json` contiene los scripts para correr la aplicación:

```json
"scripts": {
  "dev": "vite", // inicia el servidor de desarrollo
  "build": "vite build", // construye la aplicación para producción y genera los archivos estáticos en la carpeta dist
  "preview": "vite preview" // sirve los archivos estáticos generados en dist para previsualización
}
```

Al ejecutar `npm run dev` (equivalente a `vite`), se inicia el servidor de desarrollo y se puede ver la aplicación en el navegador en `http://localhost:5173`. Aquí también aparecen apartados que definen herramientas de desarrollo y de producción en las secciones dependencias y devDependencies.

El archivo `eslintrc.cjs` configura ESLint, una herramienta de análisis estático de código que ayuda a identificar y corregir problemas en el código JavaScript y TypeScript. En este archivo se especifican las reglas y configuraciones que ESLint debe seguir al analizar el código del proyecto.

En la carpeta `public` se colocan los archivos estáticos que no necesitan procesamiento por parte de Vite, como imágenes, fuentes y otros recursos. Estos archivos se sirven directamente desde la raíz del servidor de desarrollo y se incluyen en la construcción de producción sin modificaciones. La carpeta `src` contiene el código fuente de la aplicación React, incluyendo componentes, estilos y otros archivos relacionados con la lógica de la aplicación.

El `StrictMode` es un componente de React que ayuda a identificar problemas potenciales en la aplicación durante el desarrollo. No afecta el comportamiento de la aplicación en producción, pero activa advertencias y comprobaciones adicionales para ayudar a los desarrolladores a escribir código más seguro y eficiente. Se recomienda envolver la aplicación en `StrictMode` para aprovechar estas características durante el desarrollo.

El `JSX` es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript o TypeScript. Es utilizado principalmente en React para definir la estructura y apariencia de los componentes de la interfaz de usuario. JSX facilita la creación de componentes al permitir mezclar lógica y presentación en un solo lugar, lo que mejora la legibilidad y mantenibilidad del código. Durante el proceso de compilación, JSX se transforma en llamadas a funciones de React, lo que permite que el navegador interprete y renderice correctamente los elementos definidos en JSX.

Los componentes de react solo pueden devolver un único elemento padre, por lo que sí queremos devolver múltiples elementos, debemos envolverlos en un contenedor padre, como un `<div>`, `<section>`, `<article>`, etc. O usar `<> </>` (Fragment) que es una forma de agrupar múltiples elementos sin agregar nodos adicionales al DOM.

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola Mundo!</h1>
  </StrictMode>
)
```

Los valores booleanos y nulos no se renderizan en JSX, por lo que sí queremos condicionar la renderización de un elemento, podemos usar un operador ternario o un operador lógico `&&`. Los objetos literales (diccionarios) tampoco se pueden renderizar directamente en JSX, por lo que debemos convertirlos a una cadena de texto usando `JSON.stringify()` o renderizar sus propiedades individualmente.

```tsx
const isLoggedIn = true
const user = {
  name: 'Fernando',
  age: 35,
}
return (
  <>
    <h1>Hola Mundo!</h1>
    {isLoggedIn ? <p>Bienvenido usuario</p> : <p>Por favor, inicia sesión</p>}
    {isLoggedIn && (
      <p>
        Bienvenido usuario {user.name}, tienes {user.age} años.
      </p>
    )}
    <pre>{JSON.stringify(user)}</pre>
  </>
)
```

### Colocar estilos en CSS en React en línea:

```tsx
import type { CSSProperties } from 'react'
const isActive = true
const myStyles: CSSProperties = {
  color: 'red',
  fontSize: '24px',
  borderRadius: isActive ? '8px' : '0px',
}
return (
  <>
    <h1
      style={{
        color: 'red',
        fontSize: '24px',
        borderRadius: isActive ? '8px' : '0px',
      }}
    >
      Hola Mundo!
    </h1>
    <h1 style={myStyles}>Hola Mundo con estilos en variable!</h1>
  </>
)
```

> [!NOTE]
>
> `CSSProperties` es una interfaz proporcionada por React que define las propiedades CSS que se pueden aplicar a los elementos JSX a través del atributo `style`. Esta interfaz asegura que las propiedades CSS se escriban en camelCase en lugar de kebab-case, y proporciona autocompletado y verificación de tipos al definir estilos en línea en componentes React. Al usar `CSSProperties`, los desarrolladores pueden evitar errores tipográficos y asegurarse de que los estilos aplicados sean válidos según las especificaciones de CSS.

> [!TIP]
> Normalmente los desarrolladores olvidan tipos como `CSSProperties` para definir estilos en línea en React, pero es una buena práctica usarlos para aprovechar las ventajas de TypeScript, como la verificación de tipos y el autocompletado, lo que ayuda a evitar errores y mejorar la calidad del código. Una forma de conocer el tipo es poniendo el cursor sobre `style` y pulsando `Command + .` en Mac o `Ctrl + .` en Windows, lo que muestra las opciones disponibles, incluyendo la opción de importar el tipo `CSSProperties` desde React.

> [!TIP]
> En vscode se pueden usar atajos como `rafc` para crear un componente funcional con exportación por defecto, `rafce` para crear un componente funcional con exportación nombrada y `rfc` para crear un componente funcional sin exportación. Estos atajos son proporcionados por extensiones como ES7+ React/Redux/React-Native/JS snippets.

### Propiedades en componentes de React

```tsx
interface Props {
  name: string
  quantity?: number
  quantity2: number | undefined // undefined es un tipo válido
} // definir las propiedades que recibirá el componente
const ItemCounter = ({ name, quantity, quantity2 }: Props) => {
  return (
    <h1>
      Item: {name} - Cantidad: {quantity} - Cantidad 2: {quantity2}
    </h1>
  )
}
export default ItemCounter

// Usar el componente en main.tsx
<ItemCounter name='Nintendo Switch 2' quantity={10} quantity2={undefined} />
<ItemCounter name='PlayStation 5' quantity={5} quantity2={0} />
<ItemCounter name='Xbox Series X' quantity2={15} />
```

> [!NOTE]
>
> - Las propiedades (props) en React son un mecanismo para pasar datos y configuraciones desde un componente padre a un componente hijo. Son inmutables, lo que significa que un componente hijo no puede modificar las props que recibe. Las props se definen como atributos en el componente hijo cuando se utiliza en el componente padre, y pueden ser de cualquier tipo de dato, incluyendo cadenas, números, objetos, funciones y más. En TypeScript, es común definir una interfaz o un type para las props, lo que proporciona verificación de tipos y autocompletado, mejorando la calidad del código. Las props permiten que los componentes sean reutilizables y configurables, ya que el mismo componente puede comportarse de manera diferente según las props que reciba.
> - En el ejemplo anterior, se define una interfaz `Props` que especifica las propiedades que el componente `ItemCounter` espera recibir. La propiedad `name` es obligatoria y debe ser una cadena, mientras que `quantity` es opcional y puede ser un número o `undefined`. La propiedad `quantity2` es obligatoria pero puede ser `undefined`. Al usar el componente `ItemCounter`, se deben proporcionar las props correspondientes, y TypeScript verificará que se cumplan los tipos definidos en la interfaz.

### Mostrar lista de elementos

```tsx
import type { Hero } from './path/to/file' // importar la interface Hero
// import { heroes } from './path/to/file' // importar la lista de héroes
const heroes: Hero[] = [
  {
    name: 'Wolverine',
    age: 500,
    Owner: 'Marvel',
    type: 'Mutant',
  },
  {
    name: 'Batman',
    age: 40,
    Owner: 'DC',
    type: 'Human',
  },
  ...
]

const HeroList = () => {
  return (
    <div>
      {heroes.map(({ id, name, description }: Hero) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
export default HeroList
```

> [!NOTE]
>
> - En React, para mostrar una lista de elementos, se utiliza el método `map()` de los arrays para iterar sobre los datos y renderizar un componente o elemento JSX para cada item. Cada elemento renderizado debe tener una propiedad `key` única para ayudar a React a identificar qué elementos han cambiado, agregado o eliminado, lo que mejora el rendimiento durante las actualizaciones del DOM. Esto es especialmente importante cuando se trabaja con listas dinámicas donde los elementos pueden cambiar con el tiempo. En el ejemplo anterior, se itera sobre un array de objetos `heroes`, y para cada héroe, se renderiza un `div` que contiene el nombre y la descripción del héroe. Como buena práctica, se desestructura el objeto del héroe directamente en los parámetros de la función dentro del `map()`, lo que mejora la legibilidad del código y además sí el nombre de la propiedad `id` no existe, se puede usar otro nombre único como `name` o una combinación de propiedades que garantice unicidad (`<div key={name+age}>` de existir `age`).

### Eventos en los elementos

```tsx
const Button = () => {
  const handleClick = (
    // Es mejor separar la lógica y no poner el componente así: <button onClick={() => console.log('Button clicked')}>Click me</button>
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('Button clicked', event)
  }
  // return <button onClick={() => handleClick()}></button>
  return <button onClick={handleClick}>Click me</button>
}
export default Button
```

### Hooks - useState

```tsx
import { useState } from 'react'
interface Props {
  name: string
}
const ItemCounter = ({ name }: Props) => {
  const [counter, setCounter] = useState(0) // useState devuelve unicidad y el valor inicial
  const handleAdd = () => setCounter(counter + 1)
  const handleRemove = () => setCounter(counter - 1)

  return (
    <>
      <h1>
        Item: {name} - Cantidad: {counter}
      </h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove} disabled={counter <= 0}>
        -1
      </button>
    </>
  )
}
export default ItemCounter
```

> [!NOTE]
>
> - Los hooks en React son funciones especiales que permiten a los desarrolladores usar el estado y otras características de React en componentes funcionales. Introducidos en React 16.8, los hooks proporcionan una forma más sencilla y directa de manejar el estado, efectos secundarios y otras funcionalidades sin necesidad de escribir clases. Algunos de los hooks más comunes incluyen `useState` para manejar el estado local, `useEffect` para manejar efectos secundarios como llamadas a APIs o suscripciones, y `useContext` para acceder al contexto de React. Los hooks deben ser llamados en el nivel superior de un componente funcional y no dentro de bucles, condiciones o funciones anidadas, para asegurar que se llamen en el mismo orden en cada renderizado. Los hooks permiten crear componentes más limpios, reutilizables y fáciles de entender. Solo se pueden usar en componentes funcionales o custom hooks y no en componentes de clase. Los hooks deben de comenzar con la palabra "use" para que React pueda identificarlos correctamente.
> - En el ejemplo anterior, se utiliza el hook `useState` para manejar el estado del contador en el componente `ItemCounter`. El estado inicial del contador se establece en 0, y se proporcionan funciones para incrementar y decrementar el contador. El botón de decremento está deshabilitado cuando el contador es menor o igual a 0, evitando que el contador tenga valores negativos. Cada vez que se hace clic en los botones, el estado del contador se actualiza y el componente se vuelve a renderizar para reflejar el nuevo valor del contador.

### Archivos CSS usando módulos CSS

```css
/* ItemCounter.module.css */
.color-Blue {
  color: blue;
}
. colorRed {
  color: red;
}
```

```tsx
// ItemCounter.tsx
import styles from './ItemCounter.module.css' // importar los estilos del módulo CSS
return (
  <>
    <h1 className={styles['color-Blue']}>This text is blue</h1>
    <h1 className={styles.colorRed}>This text is red</h1>
  </>
)
```

> [!NOTE]
>
> - Los módulos CSS en React son una forma de escribir estilos CSS que son locales al componente, evitando conflictos de nombres y asegurando que los estilos no se apliquen globalmente. Cuando se utiliza un módulo CSS, los nombres de las clases y los identificadores se generan de manera única para cada componente, lo que permite reutilizar nombres comunes sin preocuparse por colisiones de estilos. Para usar módulos CSS en React, se crea un archivo con la extensión `.module.css` y se importa en el componente donde se desea aplicar los estilos. Los estilos se aplican utilizando la sintaxis de objetos, accediendo a las clases como propiedades del objeto importado. Esto mejora la mantenibilidad y escalabilidad del código, especialmente en aplicaciones grandes con muchos componentes.
> - En el ejemplo anterior, se define un módulo CSS llamado `ItemCounter.module.css` con dos clases: `color-Blue` y `colorRed`. Estas clases se importan en el componente `ItemCounter.tsx` y se aplican a los elementos `h1` utilizando la sintaxis de objetos. La clase `color-Blue` se accede utilizando la notación de corchetes debido al guion en el nombre, mientras que `colorRed` se accede directamente como una propiedad. Esto asegura que los estilos se apliquen solo a los elementos dentro del componente ``ItemCounter` y no afecten a otros componentes o elementos en la aplicación.

[Quiz de React](docs/02_quiz_react.md)
