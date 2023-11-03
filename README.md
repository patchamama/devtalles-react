## devTalles - Curso de React: De cero a experto (Hooks y MERN)

_https://cursos.devtalles.com/courses/take/react-cero-experto_

## Descripción

Mis notas personales del _Curso de React: De cero a experto (Hooks y MERN)_ brindado por _Fernando Herrera_.

## Secciones

### Sección 1: Introducción

- [Instalaciones necesarias](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362)

### Sección 2: Introducción a React y conceptos generales

- [Instalación de react con `create-react-app`](01-intro-react/README.md)

### Sección 3: Introducción a JavaScript moderno

- [Constantes y variables Let](02-intro-javascript/src/bases/01-const-let.md)
- [Template String](02-intro-javascript/src/bases/02-template-string.md)
- [Objetos literales](02-intro-javascript/src/bases/03-objetos-literales.md)
- [Arreglos](02-intro-javascript/src/bases/04-arreglos.md)
- [Funciones](02-intro-javascript/src/bases/05-funciones.md)
- [Desestructruación de objetos](02-intro-javascript/src/bases/06-desestructuracion-de-objetos.md)
- [Desestructuración de arreglos](02-intro-javascript/src/bases/07-desestructuracion-arreglos.md)
- [Import, export y funciones comunes de arreglos](02-intro-javascript/src/bases/08-import-export-funciones-arreglos.md)
- [Promesas](02-intro-javascript/src/bases/09-promesas.md)
- [Fetch API](02-intro-javascript/src/bases/10-fech-api.md)
- [Async - await](02-intro-javascript/src/bases/11-asyn-await.md)
- [Operador condicional ternario](02-intro-javascript/src/bases/12-operador-condicional-ternario.md)
- [Código fuente en GitHub](https://github.com/Klerith/react-intro-javascript)

<details>

<summary>Recursos</summary>

- [.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Promise()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Giphy API](https://developers.giphy.com/)
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Console.functions](https://developer.mozilla.org/es/docs/Web/API/console)
- [Babel](https://babeljs.io/)
- [Create-react-app](https://create-react-app.dev/)

</details>

### Sección 4: Primeros pasos en React

#### Instalar `React` usando [yarn + vite](03-counter-app-vite):

```
brew install yarn
yarn create vite
cd <directory of installatio>
yarn install
yarn dev
```

#### Instalar `React` usando [create-react-app](03-counter-app-cra):

```
npx create-react-app <app-name>
cd <app-name>
npm install
npm run dev
```

Para cambiar de `npm` a `yarn` o viceversa, es suficiente con borrar la carpeta `jarn.lock` o `package-lock.json` y ejecutar nuevamente `npm install` o `yarn install`, pero esto no se recomienda.

_El archivo `package-lock.json` solo se crea con cra, es decir, con una aplicación creada con vite no aparece este archivo_.

**Single Page Application (SPA)**: _Tipo de aplicación que se crea por defecto con create-react-app en React_. [Más información](https://en.wikipedia.org/wiki/Single-page_application).

**Vite** fue creado por [Evan You](https://evanyou.me/), el mismo creador de vueJS.

#### Capítulos

- [Primera aplicación de React](https://github.com/patchamama/devtalles-react/commit/ac0555be4050332a572acd83f3114afcc96cdf04)
- [Estructura de directorios, CRA vs Vite](https://github.com/patchamama/devtalles-react/commit/3000dc754c71adafff1f3f4c1caf17692171606d)
- [Hola Mundo en React](https://github.com/patchamama/devtalles-react/commit/fca38fefe68dfa066c0a14fd480236ba6a26e79b)
- [Nuestro primer Componente](https://github.com/patchamama/devtalles-react/commit/859c2de3a8421705f393333a87c2031fbde7e207). _Nota: sí aparece un error de "function export don't declare", agregar en el contenido del componente creado al final `export default HelloWorldApp`_
- [Tarea - Crear un nuevo componente](https://github.com/patchamama/devtalles-react/commit/ef33860eaf95616b0cee2151e27735c8b7bb3bfb)
- [Retornar elementos en el Componente - Fragment](https://github.com/patchamama/devtalles-react/commit/9e4e0db04735aec84fa4c52ec85034989719e426)
- [Impresión de variables en el HTML](https://github.com/patchamama/devtalles-react/commit/426e5104ffb548715cc10f42f87d3e0fd9af4376)
- [Colocar estilos de CSS](https://github.com/patchamama/devtalles-react/commit/91da1b152bddad488e312cb8fc4aada8407fd79c)
- [Comunicación entre componentes Props](https://github.com/patchamama/devtalles-react/commit/1bcf4ea8a4617604e430ff834f5f8c352cff93d5)
- [PropTypes](https://github.com/patchamama/devtalles-react/commit/b69ed37589e467451ad28280f58e6be3a9054553) _En `CRA` aparece instalado por defecto pero en `vite` hay que instalarlo: `import PropTypes from 'prop-types'` para importar en los componentes y desde terminal `yarn add prop-types`_
- [Tarea - Componente CounterApp](https://github.com/patchamama/devtalles-react/commit/0cda31f9cdd65050f1bb67f668a165723c9b1599)
<details>

<summary>Tarea</summary>

1. Crear un nuevo componente dentro de la carpeta SRC llamado
   `CounterApp`

2. El CounterApp debe de ser un **Functional Component**

3. El contenido del **CounterApp** debe de ser:

   ```jsx
       <h1>CounterApp</h1>
       <h2> { value } </h2>
   ```

4. Donde `"value"` es una propiedad enviada desde el padre hacia
   el componente **CounterApp** **(Debe ser númerica validada con PropTypes)**

5. Reemplazar en el index.js ó main.jsx el componente de `<PrimeraApp />`
   por el componente `<CounterApp />`
   (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings
(Cualquier warning no usado, comentar el código)
</details>

- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()

<details>

<summary>Recursos</summary>

- [Vite](https://vitejs.dev/)
- [Create React App (CRA)](https://create-react-app.dev/)
- [CRA - Available Scripts](https://create-react-app.dev/docs/available-scripts/)
- [Learn Progresive Web App (PWA)](https://web.dev/learn/pwa/)
- [Robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es&visit_id=637909934831052162-4097033822&rd=1)
- [Error: _no se muestran los warning en DevTools_](https://stackoverflow.com/questions/18760213/chrome-console-log-console-debug-are-not-working)
- []()
- []()
- []()
- []()
- []()
- []()
- []()

</details>

### VSCode plugins

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### Atajos del teclado (MacOSx) con vscode

- Ordenar líneas ascendentemente (css styles): Cmd + Shift + P > Sort Lines Ascending
- Crear un functional-component. Snippet: `rafc`
