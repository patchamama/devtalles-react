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
cd <app-name>
yarn install
yarn dev
```

#### Instalar `React` usando [create-react-app (CRA)](03-counter-app-cra):

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

#### Subsecciones

- [Primera aplicación de React](https://github.com/patchamama/devtalles-react/tree/ac0555be4050332a572acd83f3114afcc96cdf04/03-counter-app-vite)
- Estructura de directorios: [CRA](https://github.com/patchamama/devtalles-react/tree/3000dc754c71adafff1f3f4c1caf17692171606d/03-counter-app-cra) vs [Vite](https://github.com/patchamama/devtalles-react/tree/3000dc754c71adafff1f3f4c1caf17692171606d/03-counter-app-vite)
- [Hola Mundo en React](https://github.com/patchamama/devtalles-react/blob/fca38fefe68dfa066c0a14fd480236ba6a26e79b/03-counter-app-vite/src/main.jsx)
- [Nuestro primer Componente](https://github.com/patchamama/devtalles-react/blob/859c2de3a8421705f393333a87c2031fbde7e207/03-counter-app-vite/src/HelloWorldApp.jsx). _Nota: sí aparece un error de "function export don't declare", agregar en el contenido del componente creado al final `export default HelloWorldApp`_
- [Tarea - Crear un nuevo componente](https://github.com/patchamama/devtalles-react/commit/ef33860eaf95616b0cee2151e27735c8b7bb3bfb)
- [Retornar elementos en el Componente - Fragment](https://github.com/patchamama/devtalles-react/blob/9e4e0db04735aec84fa4c52ec85034989719e426/03-counter-app-vite/src/FirstApp.jsx)
- [Impresión de variables en el HTML](https://github.com/patchamama/devtalles-react/blob/426e5104ffb548715cc10f42f87d3e0fd9af4376/03-counter-app-vite/src/FirstApp.jsx)
- [Colocar estilos de CSS](https://github.com/patchamama/devtalles-react/commit/91da1b152bddad488e312cb8fc4aada8407fd79c)
- [Comunicación entre componentes Props](https://github.com/patchamama/devtalles-react/commit/1bcf4ea8a4617604e430ff834f5f8c352cff93d5)
- [PropTypes](https://github.com/patchamama/devtalles-react/blob/b69ed37589e467451ad28280f58e6be3a9054553/03-counter-app-vite/src/FirstApp.jsx) _En `CRA` aparece instalado por defecto pero en `vite` hay que instalarlo: `import PropTypes from 'prop-types'` para importar en los componentes y desde terminal `yarn add prop-types`_
- [Tarea - Componente CounterApp](https://github.com/patchamama/devtalles-react/blob/0cda31f9cdd65050f1bb67f668a165723c9b1599/03-counter-app-vite/src/CounterApp.jsx)

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

- [Evento click (Eventos en general)](https://github.com/patchamama/devtalles-react/blob/a0f83defb4023e29bea097d6b0671797696ca3d3/03-counter-app-vite/src/CounterApp.jsx)
- [useState - Hook](https://github.com/patchamama/devtalles-react/blob/7a6368db9edce975d2c3c0d677c066c8a83c630f/03-counter-app-vite/src/CounterApp.jsx)
- [handleSubtract y jandleReset](https://github.com/patchamama/devtalles-react/blob/de7113ac27208fc9a4498efd7f7c32d549c13e76/03-counter-app-vite/src/CounterApp.jsx)
- [Código fuente de la clase](https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4)

<details>

<summary>Recursos</summary>

- [Vite](https://vitejs.dev/)
- [Create React App (CRA)](https://create-react-app.dev/)
- [CRA - Available Scripts](https://create-react-app.dev/docs/available-scripts/)
- [Learn Progresive Web App (PWA)](https://web.dev/learn/pwa/)
- [Robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es&visit_id=637909934831052162-4097033822&rd=1)
- [Error: _no se muestran los warning en DevTools_](https://stackoverflow.com/questions/18760213/chrome-console-log-console-debug-are-not-working)
- [Presentando Hooks](https://es.legacy.reactjs.org/docs/hooks-intro.html)
- [SyntheticEvent](https://es.legacy.reactjs.org/docs/events.html)
- [Ejemplo - Tarea de desestructuración de arreglos](https://github.com/Klerith/react-intro-javascript/blob/master/src/bases/07-deses-arr.js)

</details>

### Sección 5: Pruebas unitarias y de integración - Probando las secciones anteriores

    _AAA_: Arrange - arreglar, Act - Actuar , Assert - Afirmar
    _Partes de las pruebas_: 1. Inicialización, 2. Estímulo (lo que se aplica al sujeto de las pruebas), 3. Las aserciones (observar el comportamiento esperado)
    _en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.": Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs_

- Mi primera prueba y configuraciones iniciales con `yarn`:

```
yarn add --dev jest
yarn add -D @types/jest
yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add -D whatwg-fetch
yarn add --dev @testing-library/react
yarn add -D jest-environment-jsdom
yarn add -D @babel/preset-react
```

_Con `npm` sería:_

```
npm install -save-dev jest
npm install -D @types/jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install -D whatwg-fetch
npm install --dev @testing-library/react
npm install -D jest-environment-jsdom
npm install -D @babel/preset-react
```

Agregar al archivo package.json: "test": "jest --watch All" en la sección de scripts:

```
"scripts": {
    "test": "jest --watch All"
  }
```

Archivos de configuración [babel.config.cjs](https://github.com/patchamama/devtalles-react/blob/72d4c9acb6fad4323d944190b0b9f420c2e260e6/03-counter-app-vite/babel.config.cjs), [jest.config.js](https://github.com/patchamama/devtalles-react/blob/72d4c9acb6fad4323d944190b0b9f420c2e260e6/03-counter-app-vite/jest.config.js) y [jest.setup.js](https://github.com/patchamama/devtalles-react/blob/72d4c9acb6fad4323d944190b0b9f420c2e260e6/03-counter-app-vite/jest.setup.js). Con esto ya debe de estar bien configurado `vite` para hacer testing usando `jest` y `testing-library`.

_React Testing Library_ es muy bueno para trabajar con el Dom, simular clics... y es mejor para ello que _Jest_ (que está más orientada a las aserciones, mocks... ). Ambas pueden funcionar juntas para los tests.

      - Sí Error: ReferenceError: module is not defined in ES module scope
      This file is being treated as an ES module because it has a '.js' file extension and '...' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
      Cambiar contenido de `jest.config.js`

      ```
      module.exports = {
      testEnvironment: 'jest-environment-jsdom',
      setupFiles: ['./jest.setup.js']
      }
      ```

      por

      ```
      export default {
      testEnvironment: 'jest-environment-jsdom',
      setupFiles: ['./jest.setup.js']
      }
      ```
      - Sí aparece `describe` y/o `test` como no definidos en vscode, agregar las siguiente línea en el archivo .`eslintrc` :
      "env": {
         "jest": true
      }

- [Jest - Expect - toBe](https://github.com/patchamama/devtalles-react/blob/495604d5400d274e854e9ad0404d0720ed878e80/03-counter-app-vite/src/tests/demo.test.js)
- [Pruebas en el archivo 02-template-strings.js](https://github.com/patchamama/devtalles-react/blob/56ce6ba88284b38f71c942b198099275f92f25ea/03-counter-app-vite/src/tests/base-pruebas/02-template-string.test.js)
- [toEqual](https://github.com/patchamama/devtalles-react/blob/c0581064d019834fa557c0d7b9b339f9f56462c3/03-counter-app-vite/src/tests/base-pruebas/05-funciones.test.js)
- [Pruebas en 08-imp-exp.js - Arreglos](https://github.com/patchamama/devtalles-react/blob/033ccc8c03e5a3e0acf242146dfbabea3304a578/03-counter-app-vite/src/tests/base-pruebas/08-imp-exp.test.js)
- [Pruebas en el archivo 07-deses.arr.js](https://github.com/patchamama/devtalles-react/blob/e49496da89e66a5428748b78e37c638b8edb3571/03-counter-app-vite/src/tests/base-pruebas/07-deses-arr.test.js)
- [Pruebas con tareas asíncronas](https://github.com/patchamama/devtalles-react/blob/1ffc055de4404344dcebeecadc157d844910544d/03-counter-app-vite/src/tests/base-pruebas/09-promesas.test.js)
- [Pruebas con async-await](https://github.com/patchamama/devtalles-react/blob/37629d0103c6372ff67d78953c15a00e29e548d2/03-counter-app-vite/src/tests/base-pruebas/11-async-await.test.js)
- [Pruebas en FirstApp - Componentes de React](https://github.com/patchamama/devtalles-react/blob/64298b36f1410470d993eb0488711485500edc9f/03-counter-app-vite/src/tests/FirstApp.test.jsx)
- [Probar FirstApp (toMatchSnapshot)](https://github.com/patchamama/devtalles-react/blob/4f51e4126b42a5579a65140ddb104b491580827b/03-counter-app-vite/src/tests/FirstApp.test.jsx)
- [getByTestId y otras props](https://github.com/patchamama/devtalles-react/blob/a89a6643406616fd087e938f72a475d7261275fe/03-counter-app-vite/src/tests/FirstApp.test.jsx)
- [Screen - Testing Library](https://github.com/patchamama/devtalles-react/blob/faaa5fb0192806fa4e2348d0ca9e5acb9c5a20b2/03-counter-app-vite/src/tests/FirstApp.test.jsx)
- [Pruebas básicas del CounterApp](https://github.com/patchamama/devtalles-react/blob/9d13920c0f796dd8f630ed96681e1ef3e3259d79/03-counter-app-vite/src/tests/CounterApp.test.jsx)
- [Simular eventos - Click](https://github.com/patchamama/devtalles-react/blob/72d4c9acb6fad4323d944190b0b9f420c2e260e6/03-counter-app-vite/src/tests/CounterApp.test.jsx)
- [Código fuente de la sección](https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-5)

<details>

<summary>Recursos</summary>

- [Jest - Documentación oficial](https://jestjs.io/)
- [heroes.js - Gist](https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f)
- [Giphy API - Developers](https://developers.giphy.com/)
- [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)
- [https://testing-library.com/](https://testing-library.com/)

</details>

### Sección 6: GifExpertApp - Aplicación

- [Inicio de proyecto - GifExpertApp]()
- []()
- []()
- []()
- Demostración de producción (usando http-server):

```
brew install http-server
cd dist
http-server -o
```

<details>

<summary>Recursos</summary>

- [Giphy API - Developers](https://developers.giphy.com/)
- [Reactjs.org - Estructura de directorios](https://es.reactjs.org/docs/faq-structure.html)
- [Estructura, nombres de folders y componentes en React - Hackernoon.com](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
- [Estilos GifExpertApp](https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1)
- [Giphy Developers - Search Endpoint](https://developers.giphy.com/branch/master/docs/api/endpoint/#search)
- [https://reactjs.org/docs/strict-mode.html](https://reactjs.org/docs/strict-mode.html)
- [http-server](https://www.npmjs.com/package/http-server)

</details>

---

### VSCode plugins

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### Atajos del teclado (MacOSx) con vscode

- Cambiar el nombre de una variable en todo el documento: Seleccionar la variable + fn + F2
- Poner comentario en línea: Cmd + , (después de seleccionar el texto o sobre la línea a comentar)
- Ordenar líneas ascendentemente (css styles): Cmd + Shift + P > Sort Lines Ascending
- Crear un functional-component. Snippet: `rafc` _hay que tener instalado [ES7 en vscode](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)._
- Para duplicar una línea en vscode, simplemente sin seleccionar nada sobre la línea: Cmd + c, Cmd + v
