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

### Funcciones con múltiples retornos

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

### Desestructuración en arrays

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

## Sección 5 - Pruebas automáticas - Unit testing

Existen varias librerías para hacer pruebas unitarias en React, entre las más populares están `Jest` y `React Testing Library`. `Jest` es un framework de pruebas desarrollado por Facebook que proporciona una solución completa para realizar pruebas en aplicaciones JavaScript, incluyendo React. Ofrece características como mocks, spies, y una sintaxis sencilla para escribir pruebas. `React Testing Library`, por otro lado, es una librería que se enfoca en probar los componentes de React desde la perspectiva del usuario, promoviendo buenas prácticas al interactuar con el DOM de manera similar a como lo haría un usuario real. Ambas librerías se complementan bien y son ampliamente utilizadas en la comunidad de React para asegurar la calidad y funcionalidad del código.

### Tipos de pruebas

- Pruebas unitarias (Unit tests): se centran en probar unidades individuales de código, como funciones o componentes, de manera aislada para asegurar que funcionan correctamente.
- Pruebas de integración (Integration tests): se enfocan en probar cómo interactúan diferentes unidades de código entre sí, asegurando que trabajan juntas como se espera.
- Pruebas end-to-end (E2E tests): simulan el comportamiento del usuario y prueban la aplicación completa desde el inicio hasta el final, verificando que todas las partes de la aplicación funcionen correctamente en conjunto.
- Pruebas de regresión (Regression tests): se realizan para asegurar que los cambios recientes en el código no hayan introducido errores o roto funcionalidades existentes.
- Pruebas de rendimiento (Performance tests): evalúan la velocidad y eficiencia de la aplicación bajo diferentes condiciones de carga y uso.
- Pruebas de usabilidad (Usability tests): se centran en evaluar la experiencia del usuario al interactuar con la aplicación, identificando posibles problemas de diseño o navegación.
- Pruebas de seguridad (Security tests): buscan identificar vulnerabilidades en la aplicación que podrían ser explotadas por atacantes, asegurando que los datos y funcionalidades estén protegidos adecuadamente.
- Pruebas de aceptación (Acceptance tests): verifican que la aplicación cumple con los requisitos y expectativas del cliente o usuario final, asegurando que se entreguen las funcionalidades acordadas.

Se recomienda comenzar con pruebas unitarias e integración, y luego avanzar hacia pruebas end-to-end y otras según las necesidades del proyecto.

### Pruebas unitarias

- Pruebas atómicas simples: se centran en probar una única función o componente de manera aislada, asegurando que su comportamiento sea correcto y predecible.
- Se recomienda no tener dependencias de otras funciones o componentes en las pruebas unitarias, para evitar efectos secundarios y asegurar que cada prueba sea independiente.
- Debe de ser especializada en una sola funcionalidad o comportamiento, para facilitar la identificación de errores y mejorar la mantenibilidad del código.

### Pruebas de integración

- Pruebas de integración: se enfocan en probar cómo interactúan múltiples funciones o componentes entre sí, verificando que trabajen juntos como se espera.
- No deben de ser tan específicas como las pruebas unitarias, ya que su objetivo es evaluar la colaboración entre diferentes partes del sistema.
- Se recomienda cubrir escenarios comunes y casos de uso relevantes, para asegurar que las interacciones entre componentes sean correctas y robustas.

### E2E - End to End

- Pruebas end-to-end (E2E): simulan el comportamiento del usuario y prueban la aplicación completa desde el inicio hasta el final, verificando que todas las partes de la aplicación funcionen correctamente en conjunto.
- Realizan pruebas en un entorno realista, interactuando con la interfaz de usuario y validando flujos completos de trabajo con un objetivo específico y también prueban casos de uso comunes.
- Se recomienda utilizar herramientas como Cypress o Selenium para automatizar las pruebas E2E, ya que permiten simular interacciones del usuario de manera efectiva y verificar el comportamiento de la aplicación en un entorno realista.

### Características de buenas pruebas automáticas (principalmente unitarias)

- Deben ser rápidas de ejecutar, para facilitar la retroalimentación continua durante el desarrollo.
- Deben ser confiables y producir resultados consistentes, evitando falsos positivos o negativos.
- Deben ser fáciles de entender y mantener, con nombres descriptivos y una estructura clara.
- Deben cubrir una variedad de casos de prueba, incluyendo escenarios positivos y negativos.
- Deben ser independientes entre sí, para evitar efectos secundarios y facilitar la identificación de errores.
- Deben ser fáciles de escribir y de leer, para fomentar su uso y mantenimiento a largo plazo.
- Deben de ser flexibles y adaptables a cambios en el código, para evitar que se vuelvan obsoletas rápidamente.

### El triple "A" en pruebas unitarias

- Arrange (Preparar): configurar el entorno de prueba, inicializar variables y preparar los datos necesarios para la prueba.
- Act (Actuar): ejecutar la función o componente que se está probando, aplicando los datos preparados en el paso anterior.
- Assert (Afirmar): verificar que el resultado obtenido sea el esperado, utilizando aserciones para comparar el resultado con el valor esperado.

### Mitos

- Las pruebas automáticas son solo para grandes proyectos: las pruebas automáticas son beneficiosas para proyectos de cualquier tamaño, ya que ayudan a asegurar la calidad del código y facilitan el mantenimiento a largo plazo.
- Las pruebas automáticas son difíciles de escribir y mantener: con las herramientas y prácticas adecuadas, escribir y mantener pruebas automáticas puede ser sencillo y eficiente.
- Las pruebas automáticas ralentizan el desarrollo: aunque escribir pruebas puede llevar tiempo inicialmente, a largo plazo ahorran tiempo al detectar errores temprano y facilitar la refactorización del código.
- Las pruebas automáticas son solo para desarrolladores: las pruebas automáticas pueden ser escritas y mantenidas por cualquier miembro del equipo, incluyendo testers y diseñadores, fomentando la colaboración y la calidad del producto final.
- Las pruebas automáticas garantizan un código sin errores: aunque las pruebas automáticas ayudan a identificar y prevenir errores, no garantizan que el código esté completamente libre de errores, por lo que es importante combinarlas con otras prácticas de calidad de software.
- Hay que probar todo el código: no es necesario probar cada línea de código, sino enfocarse en las partes críticas y los casos de uso más relevantes para asegurar la funcionalidad y calidad del software.
- Las pruebas automáticas son una solución mágica: las pruebas automáticas son una herramienta valiosa, pero no reemplazan la necesidad de buenas prácticas de desarrollo, revisión de código y otras técnicas de aseguramiento de la calidad.
- Las pruebas no pueden fallar: las pruebas automáticas pueden fallar por diversas razones, incluyendo errores en el código, cambios en los requisitos o problemas en el entorno de prueba, por lo que es importante revisar y mantener las pruebas regularmente.
- Hacen más lenta mi aplicación: las pruebas automáticas no afectan el rendimiento de la aplicación en producción, ya que se ejecutan en un entorno de desarrollo o integración continua y no forman parte del código desplegado en producción.

### Cobertura de código (coverage)

- La cobertura de código es una métrica que indica qué porcentaje del código fuente de una aplicación está siendo ejecutado durante las pruebas automáticas. Se utiliza para evaluar la efectividad de las pruebas y identificar áreas del código que no están siendo probadas, lo que puede ayudar a mejorar la calidad y confiabilidad del software. La cobertura de código se mide en diferentes niveles, incluyendo cobertura de líneas, ramas, funciones y declaraciones. Herramientas como Jest y Istanbul pueden generar informes de cobertura de código, proporcionando detalles sobre qué partes del código han sido cubiertas por las pruebas y cuáles no. Es importante tener en cuenta que una alta cobertura de código no garantiza la ausencia de errores, pero sí indica que una mayor parte del código ha sido verificada mediante pruebas.
- Se recomienda apuntar a una cobertura de código del 80% o más, pero la calidad de las pruebas y la relevancia de los casos de prueba son igualmente importantes.

### Instalar y configurar vitest

Ver vitest (https://vitest.dev/) para pruebas unitarias en React con TypeScript.

```sh
npm install -D vitest
```

#### Agregar y configurar vitest en el package.json

[Más detalles aquí](https://gist.github.com/Klerith/3a3d8df27c19755c829ee5c0cef55a55)

```json
"scripts": {
  ...
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:watch": "vitest --watch",
  "test:coverage": "vitest --coverage"
}
```

Examples:

```ts
// sum.ts
export const sum = (a: number, b: number): number => {
  return a + b
}

// sum.test.ts
import { describe, expect, test } from 'vitest'
import { sum } from './sum' // importar la función a probar

describe('sum function', () => {
  test('add two positives numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('add two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
  test('add a positive and a negative number', () => {
    expect(sum(1, -2)).toBe(-1)
  })
})
```

```sh
npm run test
```

#### Para testear componentes de React necesitamos testing-library/react

```sh
npm install -D @testing-library/react @testing-library/jest-dom
```

```ts
// ItemCounter.tsx
import { useState } from 'react'
interface Props {
  name: string
} // definir las propiedades que recibirá el componente
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
      <p>
        Cantidad total: {counter}
      </p>
  )
}
export default ItemCounter
```

```ts
// ItemCounter.test.tsx
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ItemCounter from './ItemCounter' // importar el componente a probar
describe('ItemCounter component', () => {
  test('should render the component with initial state', () => {
    render(<ItemCounter name='Test Item' />) // renderizar el componente
    screen.debug() // ver el html generado en ese momento para depurar y tener una idea de lo que se está renderizando
    expect(screen.getByText('Item: Test Item - Cantidad: 0')).toBeDefined() // verificar que el texto inicial se muestra correctamente
    expect(screen.getByRole('paragraph')).toBeDefined() // verificar que el párrafo se muestra correctamente
    expect(screen.getByRole('paragraph').innerHTML).toBe('Cantidad total: 0') // verificar que el contenido del párrafo es correcto
  })
  test('should increment the counter when +1 button is clicked', () => {
    render(<ItemCounter name='Test Item' />)
    const addButton = screen.getByText('+1') // obtener el botón +1
    fireEvent.click(addButton) // simular un clic en el botón
    expect(screen.getByText('Item: Test Item - Cantidad: 1')).toBeDefined() // verificar que el contador se incrementó
  })
  test('should decrement the counter when -1 button is clicked', () => {
    render(<ItemCounter name='Test Item' />)
    const addButton = screen.getByText('+1')
    const removeButton = screen.getByText('-1')
    fireEvent.click(addButton) // incrementar el contador a 1
    fireEvent.click(removeButton) // decrementar el contador a 0
    expect(screen.getByText('Item: Test Item - Cantidad: 0')).toBeDefined() // verificar que el contador se decrementó
  })
  test('should disable the -1 button when counter is 0', () => {
    render(<ItemCounter name='Test Item' />)
    const removeButton = screen.getByText('-1')
    expect(removeButton).toBeDisabled() // verificar que el botón -1 está deshabilitado cuando el contador es 0
  })
})
```

```sh
npm run test
```

> [!NOTE]
>
> - `render`: es una función proporcionada por Testing Library que se utiliza para renderizar un componente de React en un entorno de prueba. Esta función crea un contenedor virtual en el que se monta el componente, permitiendo interactuar con él y realizar aserciones sobre su estado y comportamiento. Al usar `render`, se puede acceder al DOM generado por el componente y utilizar otras utilidades de Testing Library para buscar elementos, simular eventos y verificar resultados.
> - `screen`: es un objeto proporcionado por Testing Library que representa el DOM renderizado en el entorno de prueba. Proporciona métodos para buscar y seleccionar elementos en el DOM, como `getByText`, `getByRole`, `queryByTestId`, entre otros. `screen` facilita la interacción con el DOM y la realización de aserciones sobre los elementos renderizados, permitiendo escribir pruebas más legibles y mantenibles.
> - `fireEvent`: es una utilidad proporcionada por Testing Library que permite simular eventos del usuario en los elementos del DOM durante las pruebas. Con `fireEvent`, se pueden disparar eventos como clics, cambios de valor, envíos de formularios, entre otros, para probar cómo los componentes reaccionan a las interacciones del usuario. Esto es útil para verificar el comportamiento dinámico de los componentes y asegurarse de que respondan correctamente a las acciones del usuario.

> [!WARNING]
>
> - Al buscarse un elemento con screen, por ejemplo `screen.getByRole('paragraph')`, sí el elemento no existe, se lanzará una excepción y la prueba fallará. Por lo tanto, es importante asegurarse de que el elemento que se está buscando realmente exista en el DOM renderizado antes de realizar aserciones sobre él. En el ejemplo anterior, se verifica que el párrafo se muestra correctamente utilizando `expect(screen.getByRole('paragraph')).toBeDefined()`, lo que asegura que el elemento existe antes de continuar con la prueba, por lo que algo como `expect(screen.getByRole('paragraph').innerHTML).not.toBe('Cantidad total: 0')` lanzará una excepción y la prueba fallará sí el párrafo no existe, así que nunca se debe de usar el _not_ con un screen.getBy... porque sí no existe el elemento, la prueba fallará antes de llegar a la aserción.
> - En el caso de screen sí se hace un cambio en el DOM, como un evento de clic que actualiza el estado del componente, es recomendable usar `screen` para buscar los elementos en el DOM actualizado después del evento. Esto se debe a que `screen` siempre apunta al estado actual del DOM y refleja cualquier cambio que haya ocurrido. Por otro lado, `container` es un elemento HTML estático que representa el contenedor inicial donde se renderizó el componente, y no se actualiza automáticamente después de los eventos. Por lo tanto, para asegurarse de que las pruebas reflejen el estado más reciente del DOM, es mejor utilizar `screen` después de realizar acciones que modifiquen el contenido.
> - Muy muy importante el uso de la función `querySelector` en las pruebas unitarias, ya que es la forma más sencilla de buscar elementos en el DOM renderizado. Por ejemplo, `screen.querySelector('button')` devuelve el primer botón encontrado en el DOM, o `screen.querySelectorAll('button')` devuelve una lista de todos los botones encontrados. Esto es útil para verificar la presencia de elementos específicos y realizar aserciones sobre ellos, como comprobar si un botón está habilitado o deshabilitado, o si contiene el texto esperado. Usar `querySelector` facilita la interacción con el DOM y mejora la legibilidad de las pruebas. Un ejemplo frecuente de uso de querySelector es sin screen usando el render() que devuelve un container, por ejemplo:
>
> ```ts
> const { container } = render(<ItemCounter name='Test Item' />)
> const divElement = container.querySelector('div') // buscar el primer div en el contenedor renderizado
> expect(divElement?.querySelector('p')).not.toBeDefined() // verificar que el párrafo no existe
> expect(divElement?.querySelector('p')).toBeNull() // lo mismo que lo anterior
> ```

### Diferencia entre "Testing Library" y "vitest":

- Testing Library es una colección de utilidades para probar componentes de interfaz de usuario en diferentes frameworks, incluyendo React, Vue y Angular. Se enfoca en probar la aplicación desde la perspectiva del usuario, promoviendo buenas prácticas al interactuar con el DOM de manera similar a como lo haría un usuario real. Proporciona funciones para renderizar componentes, buscar elementos en el DOM y simular eventos de usuario. Brinda funcionalidades como `render`, `screen`, `fireEvent` y `userEvent` para facilitar la escritura de pruebas que sean fáciles de entender y mantener.
- Vitest, por otro lado, es un framework de pruebas unitarias para JavaScript y TypeScript, similar a Jest. Proporciona un entorno de ejecución para las pruebas, manejo de mocks, spies y una sintaxis sencilla para escribir pruebas. Vitest es rápido y ligero, y está diseñado para integrarse bien con herramientas modernas de desarrollo como Vite. Vitest se encarga de ejecutar las pruebas, mientras que Testing Library se enfoca en proporcionar utilidades para interactuar con los componentes y el DOM durante las pruebas. Brinda funcionalidades como `describe`, `test`, `expect` y `vi` para estructurar y ejecutar las pruebas.

### Testear componentes con useState y useEffect

```sh
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

Para poder hacer test en componentes que usan `useState` o `useEffect`, es necesario agregar la configuración de `jsdom` en el archivo `vitest.config.ts` y usar la librería `@testing-library/jest-dom` para tener matchers adicionales como `toBeInTheDocument()`:

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
import '@testing-library/jest-dom' // para usar matchers como toBeInTheDocument()
```

Una vez configurado, se pueden ejecutar las pruebas con el comando (sí se estaban haciendo pruebas mejor abortarlas y volver a ejecutar `npm run test` para que tome la nueva configuración e instale las dependencias necesarias como `jsdom`):

```sh
npm run test
```

Ahora podemos usar en los test un dom virtual (por ejemplo `console.log(document.body.innerHTML)` para ver el html generado en el test) y podemos hacer uso de funciones interesantes como `screen.debug()` para ver el html generado en ese momento.

En las pruebas se puede usar con container `render` y luego usar o por separado `screen` para buscar elementos en el DOM renderizado, sí no se cambia el dom, se puede usar directamente `render` y luego `screen` pero sí se cambia el dom y hay eventos como `fireEvent` o `userEvent`, es mejor usar screen para buscar los elementos en el DOM actualizado. Por lo que `container` es un elemento HTML estático del renderizado inicial, mientras que `screen` siempre apunta al estado actual del DOM y se actualiza después de los eventos.

### Evaluar snapshots

```ts
test('should match snapshot', () => {
  const { container } = render(<ItemCounter name='Test Item' />)
  expect(container).toMatchSnapshot() // crear y evaluar el snapshot
})
```

> [!NOTE]
>
> - Los snapshots en pruebas automáticas son una técnica utilizada para capturar y almacenar el estado visual o estructural de un componente o una parte de la interfaz de usuario en un momento específico. Durante la ejecución de las pruebas, se genera un archivo de snapshot que contiene una representación serializada del componente, incluyendo su estructura HTML, propiedades y estilos. En futuras ejecuciones de las pruebas, el snapshot se compara con el estado actual del componente para detectar cambios inesperados. Si el componente ha cambiado y el snapshot ya no coincide, la prueba fallará, indicando que se ha producido una modificación en la interfaz. Los snapshots son útiles para detectar cambios visuales no intencionados y asegurar que la apariencia de los componentes se mantenga consistente a lo largo del tiempo. Sin embargo, es importante revisar y actualizar los snapshots de manera consciente, ya que cambios legítimos en el diseño o la funcionalidad también pueden causar fallos en las pruebas.
> - En el ejemplo anterior, se utiliza la función `toMatchSnapshot()` para crear y evaluar un snapshot del componente `ItemCounter`. La primera vez que se ejecuta la prueba, se genera un archivo de snapshot que captura el estado inicial del componente. En ejecuciones posteriores, el snapshot se compara con el estado actual del componente para detectar cualquier cambio. Si el componente ha cambiado y el snapshot ya no coincide, la prueba fallará, indicando que se ha producido una modificación en la interfaz. Esto ayuda a asegurar que la apariencia y estructura del componente se mantengan consistentes a lo largo del tiempo.
> - Los cambios se guardan en la carpeta `__snapshots__` que se crea automáticamente al ejecutar las pruebas por primera vez y esta se comparte con git para que otros desarrolladores puedan revisar los cambios en los snapshots.

### Crear un componente ficticio para pruebas usando vi.mock()

```ts
// ItemCounter.tsx
import { useState } from 'react'
interface Props {
  name: string
}
} // definir las propiedades que recibirá el componentes

export const ItemCounter = ({ name }: Props) => {
  const [counter, setCounter] = useState(0) // useState devuelve unicidad y el valor inicial
  const handleAdd = () => setCounter(counter + 1)
  const handleRemove = () => setCounter(counter - 1)

  return (
    <>
      <h1 data-testid="item-name">
        Item: {name} - Cantidad: {counter}
      </h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove} disabled={counter <= 0}>
        -1
      </button>
    </>
  )
}
```

```ts
// ItemCounter.test.tsx
import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ItemCounter } from './ItemCounter' // importar el componente a probar

vi.mock('./ItemCounter', () => ({
  ItemCounter: () => <div data-testid='item-counter'>Mocked ItemCounter</div>,
}))
describe('ItemCounter component', () => {
  test('should render the mocked component', () => {
    render(<ItemCounter name='Test Item' />) // renderizar el componente
    expect(screen.getByTestId('item-counter')).toBeDefined() // verificar que el componente mockeado se muestra correctamente
    expect(screen.getByTestId('item-counter').textContent).toBe(
      'Mocked ItemCounter'
    ) // verificar el contenido del componente mockeado
  })
})
```

> [!NOTE]
>
> - En este caso, se utiliza `vi.mock()` para crear un componente ficticio (mock) de `ItemCounter`. El mock reemplaza la implementación real del componente con una versión simplificada que solo renderiza un `div` con un `data-testid` específico. Esto permite probar otros componentes o funciones que dependen de `ItemCounter` sin ejecutar su lógica interna, facilitando pruebas más rápidas y aisladas. En la prueba, se verifica que el componente mockeado se renderiza correctamente y que su contenido es el esperado.

### Testing de hooks

`testing-library/react-hooks` (https://react-hooks-testing-library.com/) es una librería que facilita la prueba de hooks personalizados en React. Proporciona utilidades para renderizar hooks en un entorno de prueba, permitiendo interactuar con ellos y verificar su comportamiento. Con esta librería, se pueden escribir pruebas unitarias para hooks, asegurando que funcionen correctamente y manejen el estado y los efectos secundarios de manera adecuada. Ofrece funciones como `renderHook` para montar el hook y `act` para simular cambios en el estado o props, facilitando la escritura de pruebas claras y mantenibles. `renderHook` se brinda ya que `useState` y `useEffect` solo pueden ser usados dentro de componentes funcionales o custom hooks, por lo que no se pueden testear directamente en pruebas unitarias sin un entorno adecuado.
De existir efectos secundarios en el hook, es recomendable usar `act` para envolver las actualizaciones de estado y asegurar que las pruebas reflejen correctamente los cambios. Ver ejemplos a continuación.

```sh
npm install -D @testing-library/react-hooks
```

```ts
// ItemCounter.test.tsx
import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks' // importar renderHook para testear hooks
import { ItemCounter } from './ItemCounter' // importar el componente a probar

describe('ItemCounter component', () => {
  test('should initialize with default values 0', () => {
    // const { result } = <ItemCounter({ name: 'Test Item' }) /> // esto no funciona porque useState y useEffect solo pueden ser usados dentro de componentes funcionales o custom hooks y por eso no se pueden testear directamente en pruebas unitarias sin un entorno adecuado y debe de testearse usando renderHook
    const { result } = renderHook(() => ItemCounter({ name: 'Test Item' })) // renderHook devuelve el resultado del hook en result.current
    expect(result.current.counter).toBe(0) // verificar que el contador se inicializa en 0
  })
  test('should increment counter', () => {
    const { result } = renderHook(() => ItemCounter({ name: 'Test Item' })) // renderHook devuelve el resultado del hook en result.current
    act(() => {
      // usar act para envolver las actualizaciones de estado para que funcionen correctamente en las pruebas
      result.current.handleAdd()
      // result.current.handleAdd() // !!! llamar a la función increment para simular el incremento del contador no funcionaría aquí sí se llama dos veces porque el estado no se actualiza inmediatamente, por lo que el segundo llamado usaría el estado inicial y no el actualizado, por lo que de desear hacer dos veces, habría que tener dos llamadas separadas a act() `act(() => { result.current.handleAdd() })` para que el estado se actualice correctamente entre llamadas.
    })
    expect(result.current.counter).toBe(1) // verificar que el contador se incrementa en 1
  })
})
```

[Ver otros ejemplos de testing de hooks aquí](./03-figs-app_section_8/src/counter/hooks/useCounter.test.ts)

En el caso de testear componentes con "custom hooks", ya usaríamos `render` de testing-library/react y no `renderHook` de testing-library/react-hooks, ya que el custom hook se usaría dentro del componente a testear y se necesitaría lograr efectos con `fireEvent` o `userEvent` para simular interacciones del usuario que disparen cambios en el estado manejado por el custom hook. [Ver ejemplos aquí](./03-figs-app_section_8/src/counter/components/MyCounterApp.test.tsx)

En el caso de testear que los efectos customHooks funcionan bien, podría usarse un mock para simular el comportamiento del custom hook y verificar que el componente reacciona correctamente a los cambios en el estado o las props proporcionadas por el hook. [Ver ejemplos aquí](./03-figs-app_section_8/src/counter/components/MyCounterApp2.test.tsx)

### Crear una función fictica para pruebas usando vi.fn()

```ts
// FirstStepsApp.tsx
import { ItemCounter } from './ItemCounter' // importar el componente a probar
export const FirstStepsApp = () => {
  return <ItemCounter name='Test Item' />
}
```

```ts
// ItemCounter.test.tsx
import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
// import { ItemCounter } from './ItemCounter' // importar el componente a probar
import { FirstStepsApp } from './FirstStepsApp' // importar el componente padre que usa ItemCounter


const mockItemCounter = vi.fn((_props: { name: string }) => (
  <div data-testid="item-counter">Mocked ItemCounter</div>
))
vi.mock('./ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./ItemCounter', () => ({
//   ItemCounter: () => <div data-testid="item-counter">Mocked ItemCounter</div>,
// }))
describe('ItemCounter component', () => {
   afterEach(() => { // limpiar los mocks después de cada prueba
    vi.clearAllMocks();
  });
  test('should match snapshot', () => {
    const { container } = render(<ItemCounter name='Test Item' />)
    expect(container).toMatchSnapshot() // crear y evaluar el snapshot
  })
  test('should render the mocked component', () => {
    // render(<ItemCounter name='Test Item' />) // renderizar el componente
    render(<FirstStepsApp />) // renderizar el componente padre que usa ItemCounter
    expect(screen.getByTestId('item-counter')).toBeDefined(); // verificar que el componente mockeado se muestra correctamente
    expect(screen.getByTestId('item-counter').textContent).toBe('Mocked ItemCounter') // verificar el contenido del componente mockeado
  })
  test('should render ItemCounter with correct props', () => {
    // render(<ItemCounter name='Test Item' />)
    render(<FirstStepsApp />) // renderizar el componente padre que usa ItemCounter
    expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Test Item' }) // verificar que el mock fue llamado con las props correctas
    expect(mockItemCounter).toHaveBeenCalledTimes(1) // verificar que el mock fue llamado una vez
})
```

> [!NOTE]
>
> - En este caso, se utiliza `vi.mock()` para crear un componente ficticio (mock) de `ItemCounter`. El mock reemplaza la implementación real del componente con una versión simplificada que solo renderiza un `div` con un `data-testid` específico. Esto permite probar otros componentes o funciones que dependen de `ItemCounter` sin ejecutar su lógica interna, facilitando pruebas más rápidas y aisladas. En la prueba, se verifica que el componente mockeado se renderiza correctamente y que su contenido es el esperado. También se utiliza `vi.fn()` para crear una función mock que permite rastrear cómo se llama el componente mockeado, incluyendo las props con las que se invoca y la cantidad de veces que se llama. Esto es útil para asegurarse de que el componente se utiliza correctamente en diferentes escenarios de prueba.
> - Se utiliza `afterEach` para limpiar los mocks después de cada prueba, asegurando que no haya interferencias entre pruebas y que cada prueba comience con un estado limpio.
> - Usar `data-testid` en los elementos HTML para facilitar la selección de elementos en las pruebas, especialmente cuando los elementos no tienen texto visible o clases únicas. Esto ayuda a hacer las pruebas más robustas y menos propensas a fallos debido a cambios en el contenido o la estructura del DOM. La jerarquía de consultas recomendada por `React Testing Library` prioriza métodos que se asemejan a cómo un usuario encontraría los elementos (por rol, por texto, por label), dejando getByTestId que localiza a `data-testid` en el DOM como una opción de escape para cuando otras consultas no son prácticas.

[Quiz de Unit testing](docs/05_pruebas_automáticas-Unit_testing.md)

## Definición de Props usando functional components y TypeScript (FC)

```tsx
import React, { FC } from 'react'
interface Props {
  name: string
  quantity?: number
  quantity2: number | undefined // undefined es un tipo válido
} // definir las propiedades que recibirá el componente

const ItemCounter: FC<Props> = ({ name, quantity, quantity2 }) => {
  return (
    <h1>
      Item: {name} - Cantidad: {quantity} - Cantidad 2: {quantity2}
    </h1>
  )
}

// Forma alternativa sin usar FC (Functional Component)
export const ItemCounter2 = ({ name, quantity, quantity2 }: Props) => {
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
<ItemCounter2 name='Xbox Series X' quantity2={15} />
```

Como resumen:

`export const ItemCounter2 = ({ name, quantity, quantity2 }: Props) => {`

es equivalente a:

`const ItemCounter: FC<Props> = ({ name, quantity, quantity2 }) => {`

**Debounce en React con TypeScript** es una técnica utilizada para limitar la frecuencia con la que se ejecuta una función en respuesta a eventos rápidos o repetitivos, como la escritura en un campo de búsqueda o el redimensionamiento de una ventana. Al implementar `debounce`, se establece un período de espera (delay) durante el cual la función no se ejecutará, y solo se llamará una vez que haya pasado ese tiempo sin que se haya activado el evento nuevamente. Esto ayuda a mejorar el rendimiento de la aplicación al reducir la cantidad de veces que se ejecuta la función, evitando llamadas innecesarias y mejorando la experiencia del usuario. En React con TypeScript, se puede implementar debounce utilizando hooks personalizados o librerías externas como Lodash, asegurando que el código sea seguro y fácil de mantener gracias a la verificación de tipos proporcionada por TypeScript.

### Hook useEffect con debounce

```tsx
useEffect(() => {
  funtionToCall() // Lógica a ejecutar después del delay
  return () => {
    console.log('funcción de limpieza') // Limpiar recursos o cancelar operaciones pendientes
  }
}, [values]) // Dependencia en values
```

> [!NOTE]
> El useEffect() se dispara una vez que el componente se ha renderizado (que se monte) y cada vez que alguna de sus dependencias cambia. En este caso, la dependencia es `value`, por lo que el efecto se ejecutará cada vez que `value` cambie. La función de limpieza (cleanup function) dentro del return se ejecuta cada vez que se ejecute el efecto (la función callback) y antes de que el efecto se vaya a desmontar, permitiendo limpiar cualquier recurso o cancelar operaciones pendientes.
> El efecto debe de hacer solo una tarea específica y no múltiples tareas, para evitar efectos secundarios no deseados y mantener el código limpio y fácil de entender.

En el caso de debounce, se puede usar useEffect para ejecutar una función después de un período de tiempo (delay) desde la última vez que se actualizó el valor (value). Si el valor cambia antes de que el delay termine, se limpia el timeout anterior y se establece uno nuevo, asegurando que la función solo se ejecute una vez que el usuario haya dejado de interactuar durante el período de espera.

```tsx
useEffect(() => {
  const timeoutId = setTimeout(() => {
    funtionToCall() // Lógica a ejecutar después del delay
  }, 700) // Delay de 700ms
  return () => {
    clearTimeout(timeoutId) // Limpiar el timeout si value cambia antes del delay
  }
}, [values]) // Dependencia en values
```

> [!TIP]
> Con la ayuda de este plugin con vscode: https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype se puede generar interfaces de TypeScript a partir de JSON, JSON Schema, TypeScript, JavaScript, y otros formatos. Esto es especialmente útil para definir tipos de datos complejos y asegurar la consistencia en el uso de datos en una aplicación TypeScript. Conclusión, se copia al clipboard el JSON y en vscode se ejecuta el comando "Quicktype: Paste JSON as Code", después se solicita el nombre de la interface y después automáticamente se genera y se pega en el archivo TypeScript.

### Uso de axios

```sh
npm install axios
```

```ts
import axios from 'axios'

interface ApiResponse {
  data: any // Definir la estructura de la respuesta según la API
  ...
}

const fetchData = async (query: string) => {
  try {
    // const response = await axios.get(`https://api.example.com/data?query=${query}`) // Llamada simple sin parámetros adicionales

    // Llamada con parámetros adicionales y encabezados personalizados
    const response = await axios.get<ApiResponse>(
      `https://api.example.com/data?query=${query}`,
      {
        params: {
          limit: 10,
          offset: 0,
          apiKey: process.env.API_KEY, // Agregar parámetros adicionales a la URL
        },
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: `Bearer ${process.env.API_TOKEN}`,
        // }, // Agregar encabezados personalizados, como la autorización
      }
    )
    console.log('Data fetched:', response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
```

### Usando axios.create para crear una instancia personalizada de axios

```ts
// get-data-by-query.actions.ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
})

// Luego usar apiClient en lugar de axios directamente
import { apiClient } from './get-data-by-query.actions'

export const fetchData = async (query: string) => {
  try {
    const response = await apiClient.get('/data', {
      params: {
        query,
        limit: 10,
        offset: 0,
        apiKey: process.env.API_KEY,
      },
    })
    console.log('Data fetched:', response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
```

> [!NOTE]
>
> - El `patrón canónico` en react, a menudo llamado "levantar el estado" (lifting state up). El padre mantiene el control de la lógica y le da al hijo la "capacidad" de activarla a través de la función pasada por props. De esta forma, el componente padre pasa una función (callback) al hijo a través de las props. El hijo ejecuta esa función cuando ocurre un evento, pasándole los datos necesarios como argumentos, de esta forma el componente padre puede manejar la lógica y actualizar su estado en función de los datos recibidos del hijo y a su vez, el hijo puede comunicar información o eventos a su componente padre (por ejemplo, notificar que se hizo un clic en un término de búsqueda).
>
> - El `patrón mapper` se refiere a la práctica de mapear o transformar datos de una estructura a otra, generalmente para adaptarlos a las necesidades de la aplicación o para simplificar su uso. En React, esto a menudo implica tomar datos crudos (por ejemplo, de una API) y transformarlos en un formato más adecuado para su uso en componentes, como convertir objetos complejos en arrays de elementos renderizables. El patrón mapper ayuda a mantener el código limpio y organizado, separando la lógica de transformación de datos de la lógica de presentación y facilitando la reutilización y el mantenimiento del código. De esta forma, sí se tiene una lista de objetos con muchas propiedades, pero solo se necesitan algunas de ellas para renderizar una lista en la interfaz de usuario, se puede usar el patrón mapper para crear un nuevo array con solo las propiedades necesarias o de otra forma, sí se modificara en algún momento la estructura de los datos, solo se tendría que actualizar el mapper y no toda la lógica de renderizado (Desacopla la aplicación de la estructura de la API. Si la API cambia su formato de respuesta en el futuro, solo se necesita actualizar el "mapeo" en un lugar, en lugar de modificar todos los componentes que la consumen).

[Quiz](docs/06_GifExpertApp_useState_useEffect.md)

### Custom hooks en React

Los custom hooks en React son funciones reutilizables que encapsulan lógica de estado y efectos secundarios, permitiendo compartir esta lógica entre diferentes componentes de manera sencilla y eficiente. Al utilizar TypeScript, los custom hooks pueden beneficiarse de la verificación de tipos, lo que ayuda a prevenir errores y mejorar la mantenibilidad del código. Los custom hooks siguen la convención de nomenclatura que comienza con "use" (por ejemplo, `useFetch`, `useForm`, `useDebounce`), lo que indica que son hooks personalizados. Estos hooks pueden utilizar otros hooks de React, como `useState`, `useEffect`, `useContext`, entre otros, para gestionar el estado y los efectos secundarios dentro del hook. Al definir los tipos de las entradas y salidas del custom hook, se asegura una integración fluida con los componentes que lo utilizan, proporcionando una experiencia de desarrollo más segura y eficiente.

> [!TIP]
>
> - Un custom hook debe de hacer solo una tarea específica y no múltiples tareas, para evitar efectos secundarios no deseados y mantener el código limpio y fácil de entender.
> - Un custom hook debe de ser reutilizable y no depender de un componente específico, para poder ser utilizado en diferentes partes de la aplicación.
> - Un custom hook debe de ser fácil de usar y entender, con una interfaz clara y concisa.
> - Un custom hook debe de manejar correctamente los efectos secundarios y la limpieza de recursos, para evitar fugas de memoria y otros problemas.
> - Un custom hook debe de ser probado adecuadamente, para asegurar su correcto funcionamiento y detectar posibles errores.

> [!TIP]
>
> Es útil tener instalado React Developer Tools en el navegador para inspeccionar el estado y las props de los componentes React, así como para depurar problemas relacionados con el renderizado y la actualización del estado. Esta herramienta proporciona una interfaz visual que facilita la comprensión de la estructura de la aplicación y el flujo de datos entre componentes, lo que es especialmente valioso al trabajar con hooks y custom hooks en React. URL: https://react.dev/learn/react-developer-tools

`useRef` es un hook en React que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente. A diferencia de `useState`, que provoca una re-renderización del componente cuando su valor cambia, `useRef` no causa re-renderizados, lo que lo hace ideal para almacenar valores que no afectan la representación visual del componente. `useRef` se utiliza comúnmente para acceder a elementos del DOM directamente, almacenar valores previos o mantener cualquier valor mutable que necesite persistir entre renderizados sin desencadenar una actualización de la interfaz de usuario. La referencia creada por `useRef` tiene una propiedad `.current` que puede ser leída y modificada según sea necesario.

Ejemplo de custom Hoook con useCounter y useRef:

```tsx
import { useState, useRef } from 'react'
export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue)
  const counterRef = useRef<number>(counter) // Crear una referencia mutable para el contador

  const increment = () => {
    setCounter((prev) => {
      const newValue = prev + 1
      counterRef.current = newValue // Actualizar la referencia con el nuevo valor
      return newValue
    })
  }

  const decrement = () => {
    setCounter((prev) => {
      const newValue = prev - 1
      counterRef.current = newValue // Actualizar la referencia con el nuevo valor
      return newValue
    })
  }

  const reset = () => {
    setCounter(initialValue)
    counterRef.current = initialValue // Reiniciar la referencia al valor inicial
  }

  return { counter, increment, decrement, reset, counterRef } // Devolver la referencia junto con el estado y las funciones
}

// Uso del custom hook en un componente
import { useCounter } from './useCounter'
export const CounterComponent = () => {
  const { counter, increment, decrement, reset, counterRef } =
    useCounter<number>(10)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2>Counter Ref: {counterRef.current}</h2> {/* Mostrar el valor actual de la referencia */}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

> [!NOTE]
> Los custom hooks son funciones que pueden utilizar otros hooks de React. Esto permite encapsular lógica reutilizable y compartirla entre componentes de manera más sencilla.
> En este ejemplo, el custom hook `useCounter` utiliza `useState` para manejar el estado del contador y `useRef` para crear una referencia mutable que persiste entre renderizados. La referencia `counterRef` se actualiza cada vez que el contador cambia, permitiendo acceder al valor actual del contador sin causar re-renderizados adicionales.

## Deployment de aplicaciones React con Vite en producción

### Build de producción

```sh
npm run build
```

Esto genera una carpeta `dist` con los archivos optimizados para producción.

> [!NOTE]
> Sí ejecutamos el archivo `index.html` directamente en el navegador (file://), es probable que no funcione correctamente debido a restricciones de seguridad del navegador que impiden la carga de recursos locales. Para probar la aplicación de producción localmente, es recomendable usar un servidor web local como `serve` o `http-server`, que simulan un entorno de servidor y permiten cargar los archivos correctamente.
> Para usar http-server primero instalarlo de forma global como superusuario o administrador:
> `sudo npm install --global http-server`
> Nos ubicamos en la carpeta `dist` y ejecutamos `http-server -o`

> [!NOTE]
> Los hooks en los componentes de react son posicionales, porque React no los identifica por su nombre internamente, sino por el orden en que se ejecutan, por ello nunca deben de llamarse dentro de condicionales. Por eso en las devtools de React, los hooks se muestran en el orden en que fueron llamados en el componente y con el mismo nombre cada variable (se muestran con el mismo nombre que normalmente se usan en el código fuente, pero internamente React los identifica por su posición en la lista de hooks del componente).

[Quiz](docs/07_optimización_y_despliegue.md)

### Configuración de pruebas de Vitest

https://gist.github.com/Klerith/3a3d8df27c19755c829ee5c0cef55a55
