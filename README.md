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

## Object literal

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

## Interfaces

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
