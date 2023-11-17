## devTalles - Curso de React: De cero a experto (Hooks y MERN)

_https://cursos.devtalles.com/courses/take/react-cero-experto_

[Examples (deploy)](https://patchamama.github.io/devtalles-react/)

## Descripción

Mis notas personales del _[Curso de React: De cero a experto (Hooks y MERN)](https://cursos.devtalles.com/courses/take/react-cero-experto)_ brindado por _Fernando Herrera_.

## Tabla de contenidos

- [devTalles - Curso de React: De cero a experto (Hooks y MERN)](#devtalles---curso-de-react-de-cero-a-experto-hooks-y-mern)
- [Descripción](#descripción)
- [Tabla de contenidos](#tabla-de-contenidos)
- [Secciones](#secciones)
  - [Sección 1: Introducción](#sección-1-introducción)
  - [Sección 2: Introducción a React y conceptos generales](#sección-2-introducción-a-react-y-conceptos-generales)
  - [Sección 3: Introducción a JavaScript moderno](#sección-3-introducción-a-javascript-moderno)
    - [Recursos](#recursos)
  - [Sección 4: Primeros pasos en React](#sección-4-primeros-pasos-en-react)
    - [Instalar `React` usando yarn + vite:](#instalar-react-usando-yarn--vite)
    - [Instalar `React` usando create-react-app (CRA):](#instalar-react-usando-create-react-app-cra)
    - [Subsecciones](#subsecciones)
    - [Recursos](#recursos-1)
  - [Sección 5: Pruebas unitarias y de integración - Probando las secciones anteriores](#sección-5-pruebas-unitarias-y-de-integración---probando-las-secciones-anteriores)
    - [Recursos](#recursos-2)
  - [Sección 6: GifExpertApp - Aplicación](#sección-6-gifexpertapp---aplicación)
    - [Recursos](#recursos-3)
  - [Sección 7: Generando el build de producción y despliegues](#sección-7-generando-el-build-de-producción-y-despliegues)
    - [Recursos](#recursos-4)
  - [Sección 8: Testing - Probando la aplicación de GifExpert](#sección-8-testing---probando-la-aplicación-de-gifexpert)
    - [Recursos](#recursos-5)
  - [Sección 9: Profundizando Hooks - Generales](#sección-9-profundizando-hooks---generales)
    - [Recursos](#recursos-6)
  - [Sección 10: Profundizando Hooks - useReducer](#sección-10-profundizando-hooks---usereducer)
    - [Recursos](#recursos-7)
  - [Sección 11: Profundizando Hooks - useContext](#sección-11-profundizando-hooks---usecontext)
    - [Recursos](#recursos-8)
  - [Sección 12: Pruebas unitarias y de integración - Hooks](#sección-12-pruebas-unitarias-y-de-integración---hooks)
    - [Recursos](#recursos-9)
  - [Sección 13: Bonus: Repositorio de Custom Hooks](#sección-13-bonus-repositorio-de-custom-hooks)
    - [Recursos](#recursos-10)
  - [Sección 14: HeroesApp - Single Page Application (SPA)](#sección-14-heroesapp---single-page-application-spa)
    - [Recursos](#recursos-11)
  - [Sección 15: Protección de rutas](#sección-15-protección-de-rutas)
  - [Sección 16: Pruebas de nuestra aplicación de Héroes](#sección-16-pruebas-de-nuestra-aplicación-de-héroes)
    - [Recursos](#recursos-12)
  - [Sección 17: JournalApp - MaterialUI - Estructura y Diseño](#sección-17-journalapp---materialui---estructura-y-diseño)
    - [Recursos](#recursos-13)
  - [VSCode plugins](#vscode-plugins)
  - [Atajos del teclado (MacOSx) con vscode](#atajos-del-teclado-macosx-con-vscode)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

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

#### Recursos

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
- [Chrome: console.log, console.debug are not working](https://stackoverflow.com/questions/18760213/chrome-console-log-console-debug-are-not-working)

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

- [Evento click (Eventos en general)](https://github.com/patchamama/devtalles-react/blob/a0f83defb4023e29bea097d6b0671797696ca3d3/03-counter-app-vite/src/CounterApp.jsx)
- [useState - Hook](https://github.com/patchamama/devtalles-react/blob/7a6368db9edce975d2c3c0d677c066c8a83c630f/03-counter-app-vite/src/CounterApp.jsx)
- [handleSubtract y jandleReset](https://github.com/patchamama/devtalles-react/blob/de7113ac27208fc9a4498efd7f7c32d549c13e76/03-counter-app-vite/src/CounterApp.jsx)
- [Código fuente de la clase](https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4)

#### Recursos

- [Vite](https://vitejs.dev/)
- [Create React App (CRA)](https://create-react-app.dev/)
- [CRA - Available Scripts](https://create-react-app.dev/docs/available-scripts/)
- [Learn Progresive Web App (PWA)](https://web.dev/learn/pwa/)
- [Robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es&visit_id=637909934831052162-4097033822&rd=1)
- [Error: _no se muestran los warning en DevTools_](https://stackoverflow.com/questions/18760213/chrome-console-log-console-debug-are-not-working)
- [Presentando Hooks](https://es.legacy.reactjs.org/docs/hooks-intro.html)
- [SyntheticEvent](https://es.legacy.reactjs.org/docs/events.html)
- [Ejemplo - Tarea de desestructuración de arreglos](https://github.com/Klerith/react-intro-javascript/blob/master/src/bases/07-deses-arr.js)

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

#### Recursos

- [Jest - Documentación oficial](https://jestjs.io/)
- [heroes.js - Gist](https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f)
- [Giphy API - Developers](https://developers.giphy.com/)
- [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)
- [https://testing-library.com/](https://testing-library.com/)

### Sección 6: GifExpertApp - Aplicación

Deploy de GifExpertApp en [GitHub Pages](https://patchamama.github.io/devtalles-react/04-gif-expert-app/) y [netlify](https://git-expert-fer1.netlify.app/).

- [Inicio de proyecto - GifExpertApp](https://github.com/patchamama/devtalles-react/commit/b26d62eb5fea12252621afe44ba3c739d72107fb)
- [Creando una lista de categorias](https://github.com/patchamama/devtalles-react/blob/2952031f04813e20467e88837c3d431e93491182/04-gif-expert-app/src/GifExpertApp.jsx)
- [Agregar una nueva categoría](https://github.com/patchamama/devtalles-react/blob/b8723c67851b535f7eeb9e3a4c84479f67d5ac4e/04-gif-expert-app/src/GifExpertApp.jsx)
- [Componente AddCategory](https://github.com/patchamama/devtalles-react/commit/46514aad6adc81a6cd9f4578cea28dc0f8bf37a6)
- [Comunicación entre componentes](https://github.com/patchamama/devtalles-react/commit/8ebcd69bbafbdc178a5d442d03630626c9d86f5a)
- [Emitir un evento al padre](https://github.com/patchamama/devtalles-react/commit/b74e1ac4bf49a09dd6f9f0de4185e5271c9aa3b7)
- [Validar que sean únicos los nombres](https://github.com/patchamama/devtalles-react/blob/15dcb362aa468656cf727591ccd74335807ab1dd/04-gif-expert-app/src/GifExpertApp.jsx)
- [GifGrid - Nuevo componente](https://github.com/patchamama/devtalles-react/commit/e37200a51a8626118db9363fdc6e319e01a25d2a)
- [Fetch API - Obtener las imágenes deseadas](https://github.com/patchamama/devtalles-react/commit/4ac16241be0d1ae34def072f458d6b4403a04fea)
- [useEffect](https://github.com/patchamama/devtalles-react/blob/e7f8986ee3029a29fb1d1859fe94b67b92f91a7d/04-gif-expert-app/src/components/GifGrid.jsx)
- Demostración de producción (usando http-server):

```
brew install http-server
yarn build
cd dist
http-server -o
```

- [Mostrar los títulos de las imágenes](https://github.com/patchamama/devtalles-react/commit/51fc8e28e2c3299aeead957c0a543f8387f560eb)
- [className - Clases de css](https://github.com/patchamama/devtalles-react/commit/4906a07ca6ad197c285f3fb8b7ecb16b4c57923e)
- [Custom Hook - useFetchGifs](https://github.com/patchamama/devtalles-react/commit/ce4b371eeff668a17186543294f06b3674d9136d)
- [Mostrar mensaje de carga](https://github.com/patchamama/devtalles-react/blob/420bc49ee61b57c42e037a96d3d5d3df044a3bf0/04-gif-expert-app/src/components/GifGrid.jsx)
- [Archivos de barril - index.js](https://github.com/patchamama/devtalles-react/commit/0463e01d57bfa040ef371747d5fda301887d3c1c)
- [Código fuente de la sección](https://github.com/Klerith/react-vite-gif-expert/tree/fin-seccion-6)

#### Recursos

- [Giphy API - Developers](https://developers.giphy.com/)
- [Reactjs.org - Estructura de directorios](https://es.reactjs.org/docs/faq-structure.html)
- [Estructura, nombres de folders y componentes en React - Hackernoon.com](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
- [Estilos GifExpertApp](https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1)
- [Giphy Developers - Search Endpoint](https://developers.giphy.com/branch/master/docs/api/endpoint/#search)
- [https://reactjs.org/docs/strict-mode.html](https://reactjs.org/docs/strict-mode.html)
- [http-server](https://www.npmjs.com/package/http-server)
- [React-Router issue when deployed to Github Pages?](https://stackoverflow.com/questions/71290365/react-router-issue-when-deployed-to-github-pages)

### Sección 7: Generando el build de producción y despliegues

- Comandos útiles de git

```
// Crear respositorio
git init

// Agregar todos los archivos al repo para actualización
git add .

// Realizar commit
git commit -m "First commit"

// Restaurar repo a como estaba en el último commit
git checkout -- .

// Agregar un repositorio externo a donde actualizar en remoto
git remote add origin <git url>

// Cambiar el nombre de la rama y cambiarse a ella
git branch -M main

// Actualizar repositorio remoto
// La primera vez que se hace el push se piden las credenciales de git para acceder
git push -u origin main

```

- Actualizar código para ser usado en Github Pages

_Cambiar en `dist/index.html` o `docs/index.html` la ruta a los archivos .css y .js a relativa para que se despligue bien en github pages, es decir, de `src="/..."` a `src="./..."`_. Ejemplo de cambios en [index.html](https://github.com/patchamama/devtalles-react/commit/63d04bbf117de2ad3866fb17f3e89bd3a235c8e0#diff-c56d13deec71051f24aa217ae7a8bd4d36c1e9dfc3975252c5874a293ff6e481)

#### Recursos

- [netlify.com/](https://www.netlify.com/)
- [Configurar name y el email en Git](https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git)
- [Github - Website](https://github.com/)

### Sección 8: Testing - Probando la aplicación de GifExpert

_Un `Mock` es una simulación de una función y se usa para capturar eventos, parámetros..._

- [Instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177). Información local [aquí](docs/vite-testing-config). Para que no me de error, tengo que cambiar el nombre del archivo `babel.config.js` por `babel.config.cjs` y configurar `jest.config.js` como:

```
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
}
```

- [Resolución de Tarea implementando PropTypes y Snapshot](https://github.com/patchamama/devtalles-react/blob/5274c47137441088d161f9a2a06a4fecd03ef4c6/04-gif-expert-app/tests/components/GiftItem.test.jsx)
- [Pruebas del componente - GifGridItem](https://github.com/patchamama/devtalles-react/blob/14b009a0f7473f6ceaaf0ae7484bba73b31015a1/04-gif-expert-app/tests/components/GiftItem.test.jsx)
- [Pruebas en el helper getGifs](https://github.com/patchamama/devtalles-react/blob/89d5173a322779319ee7bc558e4e765dcc80881f/04-gif-expert-app/tests/helpers/getGifs.test.js)
- [Pruebas del componente - AddCategory y simular un submit del formulario](https://github.com/patchamama/devtalles-react/blob/4d4418f7e11200a44b5fafaf30b8c55ec9eb6b0f/04-gif-expert-app/tests/components/addCategory.test.jsx)
- [Jest Functions](https://github.com/patchamama/devtalles-react/blob/4d4418f7e11200a44b5fafaf30b8c55ec9eb6b0f/04-gif-expert-app/tests/components/addCategory.test.jsx)
- [Pruebas del componente GifGrid - Mock customHook](https://github.com/patchamama/devtalles-react/blob/b1f77c49f08954e6e94290aafbfc3d7b630f78f7/04-gif-expert-app/tests/components/GifGrid.test.jsx)
- [Hacer un mock completo de un Custom Hook](https://github.com/patchamama/devtalles-react/blob/f7e5991997cc4a165d7fd2b6911bab2ab533bcfd/04-gif-expert-app/tests/components/GifGrid.test.jsx)
- [Pruebas sobre customHooks](https://github.com/patchamama/devtalles-react/blob/01f16dabba96bdd02be92cdfb4bf4c9eb41f7914/04-gif-expert-app/tests/hooks/useFetchGifs.test.js)
- [Pruebas de tarea de test con GifExpertApp componente](https://github.com/patchamama/devtalles-react/blob/9495562c019c1bbe33584e4934930ffac09196ca/04-gif-expert-app/tests/GifExpertApp.test.jsx)
- [Código fuente de la sección](https://github.com/Klerith/react-gif-expert/tree/fin-seccion-8)

#### Recursos

- [Testing Library + Vite + Jest](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
- [react-hooks-testing-library.com](https://react-hooks-testing-library.com/)

### Sección 9: Profundizando Hooks - Generales

```js
const { a, b } = false // a = undefined, b = undefined
null // null
!null // true
!!null // false
undefined // undefined
!undefined // true
!!undefined // false
!!data && data // true and data (devuelve el valor de data sí data no es undefined o null)
const { a, b, ...rest } = !!data && data // desestructuración para asignar el valor a las variables a partir de data sí tiene un valor
```

- [useState](https://github.com/patchamama/devtalles-react/blob/fbb02015f14b74f8bdb915b32dc350f7b4f749ab/05-hook-app/src/01-useState/CounterApp.jsx)
- [useCounter - CustomHook](https://github.com/patchamama/devtalles-react/commit/8e97388b7eb042847bffac7260fbe621e135d52f)
- [Exponer métodos del Hook](https://github.com/patchamama/devtalles-react/commit/56704a30e0df944845af4e8e371139dd3855bae2)
- [useEffect - SimpleForm](https://github.com/patchamama/devtalles-react/blob/53b3233231dccec285a475cf1ac116a02096c337/05-hook-app/src/02-useEffect/SimpleForm.jsx)
- [Dependencias del useEffect](https://github.com/patchamama/devtalles-react/blob/48c036de792e830b2b2c10598b0c0f08d33b1ab8/05-hook-app/src/02-useEffect/SimpleForm.jsx)
- [useEffect unmount - Cleanup](https://github.com/patchamama/devtalles-react/blob/ce1f3bd69121bcab0e17d729ac57ac1ece628848/05-hook-app/src/02-useEffect/Message.jsx)
- [useEffect - Precauciones](https://github.com/patchamama/devtalles-react/blob/a2e2f7201990629484716c5e1ee7d72b5ae446ec/05-hook-app/src/02-useEffect/Message.jsx)
- [Formulario con custom Hook](https://github.com/patchamama/devtalles-react/blob/17e3f72e0f85b94b592194554ad3840cc165cc6b/05-hook-app/src/02-useEffect/FormWithCustomHook.jsx)
- [Tarea - Implementar funcionalidad de Reset](https://github.com/patchamama/devtalles-react/commit/def8c069293f79271756835d0d81eb83da9079c9)
- [useFetch - CustomHook](https://github.com/patchamama/devtalles-react/commit/784159a0bf9d2e73469912f1609bd125a98a83f4)
- [useFetch + useCounter](https://github.com/patchamama/devtalles-react/commit/b58378ec08b9bd57ef3a0cb809dc6611e8adb369)
- [Conectando ambos Hooks](https://github.com/patchamama/devtalles-react/blob/dc2cd76ca8bf01dcd1a95cd11edcedd0cd534492/05-hook-app/src/03-examples/MultipleCustomHooks.jsx)
- [Optimizaciones al código anterior](https://github.com/patchamama/devtalles-react/commit/aea05af040f591fd490451dc1235f26e4536a3c5)
- [useRef - Primer uso](https://github.com/patchamama/devtalles-react/blob/c71a5e556aead9375d1f5aeb1a61c9817a86bc7c/05-hook-app/src/04-useRef/FocusScreen.jsx)
- [useLayoutEffect](https://github.com/patchamama/devtalles-react/commit/663e2b24e0474861665ee0a0a9b402a14c9ea5d4) - [Deploy](https://patchamama.github.io/devtalles-react/05-hook-app-05-useLayoutEffect)
- [Memo - Método de React](https://github.com/patchamama/devtalles-react/commit/0e9fb5dd1d6c9f40b43e457f279a1c70e41fcddf)
- [useMemo](https://github.com/patchamama/devtalles-react/blob/31414f3bbf937fc6ea46e4c8082783b28807d84d/05-hook-app/src/06-memos/MemoHook.jsx) - [Deploy](https://patchamama.github.io/devtalles-react/05-hook-app-06-usememo)
- [useCallback](https://github.com/patchamama/devtalles-react/commit/d7b03ca042dd119f527a5f4a271a80475c0148cd)
- [useCallback con argumentos](https://github.com/patchamama/devtalles-react/blob/369908734ea6611da131c8692c90867419e2de81/05-hook-app/src/06-memos/CallbackHook.jsx)
- [Tarea Memorize](https://github.com/patchamama/devtalles-react/commit/13fdbfec9a59e2e4cdfa65fba48bcc918191fd07) - [Deploy](https://patchamama.github.io/devtalles-react/05-hook-app.07-tarea-memo)
- [Código fuente de la sección 9](https://github.com/Klerith/react-hooks/tree/fin-seccion-9)

#### Recursos

- [getBootstrap.com - Sitio oficial](https://getbootstrap.com/)
- [react-hook-form](react-hook-form)
- [rickandmortyapi.com - API](https://rickandmortyapi.com/documentation/#get-a-single-character)
- [useLayoutEffect - React docs](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect)
- [Breaking Bad Quotes API](https://breakingbadquotes.xyz/)

### Sección 10: Profundizando Hooks - useReducer

- [Deploy Example TodoList](https://patchamama.github.io/devtalles-react/05-hook-app-08.TodoList/)
- [Idea general de un reducer - Vía código](https://github.com/patchamama/devtalles-react/commit/5be9b89a997a58f5c0e879a97f2613cffcafd2ab)
- [useReducer - Todo List](https://github.com/patchamama/devtalles-react/commit/bf71ecb5591863dce2f6226f6a0ded38e5e2703f)
- [Creando el cascarón de la lista de TODOs](https://github.com/patchamama/devtalles-react/commit/f4514e9858c4bdf1ad3803a698b76036be30cc13)
- [Tarea: Crear componentes y emitir eventos](https://github.com/patchamama/devtalles-react/commit/bc3160cc828da90fd359da51b9fb67bf88f1dd57)
- [Resolución de la tarea - TodoApp](https://github.com/patchamama/devtalles-react/commit/c50366b380fcd132329acff3d524ff1247eea404)
- [Agregar un nuevo TODO](https://github.com/patchamama/devtalles-react/commit/91df7cf0e43846d1bfa1c9c291f89ed874a969dd)
- [Guardar y Leer TODOs en LocalStorage](https://github.com/patchamama/devtalles-react/commit/8cd66575ce888305eb5743658bcac404d27433d8)
- [Borrar un TODO](https://github.com/patchamama/devtalles-react/commit/5b9d2ae56444567d7d861d55ad44e36356ef4c61)
- [Toggle Todo - Marcar como completado o pendiente un TODO](https://github.com/patchamama/devtalles-react/commit/a2b70478d960298fbd012a573e87cd693b9701c8)
- [Tarea - useTodo](https://github.com/patchamama/devtalles-react/commit/e63023586bfceefcf3f02c28590600ede904148b)
- [Resolución de la tarea - useTodos](https://github.com/patchamama/devtalles-react/commit/55765d73738b48fa9fc299f98eb25f0f9d2ec8fd) - [Deploy](https://patchamama.github.io/devtalles-react/05-hook-app-08.TodoList)
- [Código fuente de GitHub - Fin sección 10](https://github.com/Klerith/react-hooks/tree/fin-seccion-10)

#### Recursos

- [useReducer - React Docs](https://es.reactjs.org/docs/hooks-reference.html#usereducer)
- [Youtube - Fernando Herrera - LocalStorage](https://www.youtube.com/watch?v=hb8O0qRqiSk&t=2s)

### Sección 11: Profundizando Hooks - useContext

- Preparación de nuestra aplicación con rutas

Install react-router-dom 6:

```sh
yarn add react-router-dom@6
```

- [Preparación de nuestra aplicación con rutas (react-router-dom)](https://github.com/patchamama/devtalles-react/commit/1b8938baa7c19892b95803a9cde5a358a119f3b5)
- [Configurar Router en React](https://github.com/patchamama/devtalles-react/blob/75ed032a50bafa69639545fbea6f71802d864173/05-hook-app/src/09-useContext/MainApp.jsx)
- [Link](https://github.com/patchamama/devtalles-react/commit/715877423fb9bb8e5e4783df200dafd118b0c6b9)
- [NavLink](https://github.com/patchamama/devtalles-react/blob/6ade093da91c703105bfe05dd34c0a23499e6292/05-hook-app/src/09-useContext/Navbar.jsx)
- [CreateContext y ContextProvider](https://github.com/patchamama/devtalles-react/commit/86fe8129a03516b96357ab73b15a2cb9e89899a2)
- [useContext](https://github.com/patchamama/devtalles-react/commit/35a734588bd7bd7e090eb82de74b75ea30357af3)
- [Código fuente Github- Fin sección 11](https://github.com/Klerith/react-hooks/tree/fin-seccion-11)

#### Recursos

- [ReactRouter - Docs](https://v5.reactrouter.com/web/api/NavLink)
- [reactrouter.com - Latest Version](https://reactrouter.com/)
- [React Router - Docs](https://v5.reactrouter.com/web/guides/quick-start)

### Sección 12: Pruebas unitarias y de integración - Hooks

- [Inicio de proyecto - Pruebas sobre Hooks](https://github.com/patchamama/devtalles-react/commit/d7a40064ba2eea739db0c05c9a8d1eb54d5ca850)
- [Pruebas sobre useCounter - CustomHook](https://github.com/patchamama/devtalles-react/blob/d55797ded5c7d622715046eaf8460fe16a19feae/05-hook-app/tests/hooks/useCounter.test.js)
- [Ejecutar funciones del customHook dentro de las pruebas](https://github.com/patchamama/devtalles-react/commit/f6a78426af179c06545ce9a7a1ebc14326044860)
- [Pruebas sobre useForm - CustomHook](https://github.com/patchamama/devtalles-react/commit/2aa05a795c9f58c87f30d4e85440293b388193c4)
- [Pruebas con múltipes hooks simultáneos](https://github.com/patchamama/devtalles-react/commit/3721af374a00c8238302a8256855d42050e778ae)
- [Evaluar respuesta del useFetch](https://github.com/patchamama/devtalles-react/blob/800e53e549bbf11e43817ea87b1d0175bddcfe7b/05-hook-app/tests/03-examples/MultipleCustomHooks.test.jsx)
- [Pruebas sobre el Reducer](https://github.com/patchamama/devtalles-react/blob/1bef27cd7e72de49fab39114551cb3d68c34a88c/05-hook-app/tests/08-useReducer/todoReducer.test.js)
- [Resolución de la tarea](https://github.com/patchamama/devtalles-react/blob/d4438380b88c4928b8992d08e24c18be59313f3a/05-hook-app/tests/08-useReducer/todoReducer.test.js)
- [Pruebas en el componente TodoItem](https://github.com/patchamama/devtalles-react/commit/c06651b62b1436014b22a6eadd02691577931cae)
- [Pruebas en los eventos del TodoItem](https://github.com/patchamama/devtalles-react/blob/960064d4199fd21d09f59ba9b1c7de78f26a54b8/05-hook-app/tests/08-useReducer/TodoItem.test.jsx)
- [Pruebas en el TodoApp](https://github.com/patchamama/devtalles-react/blob/c30552d64f286d63ec42c57fe9ade33b32900ce0/05-hook-app/tests/08-useReducer/todoApp.test.jsx)
- [Pruebas con useContext](https://github.com/patchamama/devtalles-react/commit/a6c77ab5548f75d1bbd913d758af43af42e57d97)
- [Pruebas de funciones del context](https://github.com/patchamama/devtalles-react/commit/8c1cbe32952a1186502fd0dfc8eff0437a2e3c3c)
- [Pruebas generales en nuestro AppRouter](https://github.com/patchamama/devtalles-react/blob/de44381bd2103db701e98c66b17957caf7c68ed6/05-hook-app/tests/09-useContext/MainApp.test.jsx)
- [Código GitHub: Fin sección 12](https://github.com/Klerith/react-hooks/tree/fin-seccion-12)

#### Recursos

- [Configuración Vite + Jest + Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
- [React Router - Testing Docs](https://v5.reactrouter.com/web/guides/testing)

### Sección 13: Bonus: Repositorio de Custom Hooks

- [Repositorio con customHooks](https://github.com/patchamama/devtalles-react/tree/0dddc0ab5515044f73c26b045978b05054e06183/06-mis-custom-hooks)
- [Gisthub - Repositorio de custom hooks](https://github.com/Klerith/custom-hooks)

#### Recursos

- [Github Repos](https://github.com/)

### Sección 14: HeroesApp - Single Page Application (SPA)

Installation:

```sh
//  react router v.6
yarn add react-router-dom@6

// query-string to handle url params
yarn add query-string
```

- [Inicio del proyecto - HeroesApp](https://github.com/patchamama/devtalles-react/commit/fa2bdae4720f1cbf6c06d481f81d4865e39bbb93)
- [Colocar clase de la ruta activa](https://github.com/patchamama/devtalles-react/commit/6c0e450743da82889a0b4d70fa3486bfc9c60ab3)
- [Creando un segundo Router](https://github.com/patchamama/devtalles-react/commit/6cd2e604ac8f29a65abb4aec5d0b1b3a2c0759aa)
- [Navigate push/replace - useNavigate](https://github.com/patchamama/devtalles-react/commit/39f761358860cecc5c1040215804a780714211c7)
- [Lista de Heroes](https://github.com/patchamama/devtalles-react/commit/8998125d449ad6e2d311137e09d4d84ae8c66ed9)
- [Tarjetas con la información del Héroe](https://github.com/patchamama/devtalles-react/commit/6acce2945eab30dfdbf781259a05147c5eac3f04)
- [Tarjeta del Héroe - parte 2](https://github.com/patchamama/devtalles-react/commit/248045233b9745c2a8921f6c7ef1d10e38a366c9)
- [Leer argumentos por URL](https://github.com/patchamama/devtalles-react/commit/0c2545700b5a772d52310745a71a148a2651e37b)
- [Estilo del componente HeroScreen](https://github.com/patchamama/devtalles-react/commit/72326605c535632789dc015de300a29fb9cc7eed)
- [Nota: useMemo](https://github.com/patchamama/devtalles-react/commit/5b8896fc922ad651ced5df043e9aa54559eb9e36)
- [Animaciones en nuestro componente](https://github.com/patchamama/devtalles-react/blob/4636fb7687d89e1984cc027f4a1be60a897f083c/07-heroes-spa/src/heroes/components/HeroCard.jsx)
- [Diseño de la pantalla de búsqueda](https://github.com/patchamama/devtalles-react/blob/b8dc66d80798be8f9fffe65c415e0b4bac98fd7d/07-heroes-spa/src/heroes/pages/SearchPage.jsx)
- [SearchComponent](https://github.com/patchamama/devtalles-react/commit/c620b8536760ac3a9746c929656fcedf6bcd4694)
- [Mostrar listado de héroes](https://github.com/patchamama/devtalles-react/commit/1da02ceccb356a99d15dad81bc944ebfc76e4b85)
- [Mostrar mensajes condicionales](https://github.com/patchamama/devtalles-react/commit/1bc499be1c8565e573b7aa00c9c6cb1af486c8c5)
- [Nota de actualización - Error imágenes producción](https://github.com/patchamama/devtalles-react/commit/01c209f895d6c8823fcc4f64ec54c2f56f8d3e44)
- [Código fuente Github - Fin sección 14](https://github.com/Klerith/react-heroes/tree/fin-seccion-14)

#### Recursos

- [heroes.zip](https://import.cdn.thinkific.com/643563/courses/1901683/heroes-220621-112204.zip)
- [Gist - Navbar](https://gist.github.com/Klerith/566b484ac6fe46c8fa949e61df671a18)
- [React Router - Docs](https://reactrouter.com/en/6.4.4/start/tutorial#setup)
- [https://reactrouter.com/ - Versión 6](https://reactrouter.com/)
- [Migrar de React Router v5 a v6](https://www.youtube.com/watch?v=FR7x0tqwafc)
- [HeroesList - Data](https://gist.github.com/Klerith/934da045caae0fec3a1067d013926c46)
- [animate.css](https://animate.style/)
- [https://github.com/Klerith/custom-hooks/blob/main/useForm/useForm.js](https://github.com/Klerith/custom-hooks/blob/main/useForm/useForm.js)
- [Assets y su manejo por vite en producción y desarrollo](https://vitejs.dev/guide/assets.html)

<details>

<summary>Sobre el manejo de las imágenes (assets) por parte de Vite</summary>
Si quieren hacer el build de la app para hacer el deploy, si se fijan verán que los assets con las imágenes no se copian automáticamente a la carpeta dist con el build de producción.

Esto es debido a Vite y como estamos creando las URL's de las imágenes en HeroCard.jsx.

Si importamos directamente una imagen con import imgUrl from '/assets/heroes/marvel-spider.jpg', Vite se encargará de gestionarlo y añadirá el archivo al build de producción, pero nosotros estamos creando la URL con const heroImageUrl = `/assets/heroes/${ id }.jpg`;, de ahí que Vite no las copie automáticamente.

La solución sería crear una carpeta llamada public en la raíz del proyecto (al mismo nivel que package.json o index.html) y dentro de esta carpeta mover la carpeta heroes que contiene todas las imágenes.

De esta forma ya añadimos la carpeta heroes al build de producción.

Para acceder a "public" tenemos que usar la ruta raíz /, por lo que ahora modificaremos la URL de heroImageUrl en el archivo HeroCard.jsx quedando: const heroImageUrl = `/heroes/${ id }.jpg`;.

De esta forma ya se copian automáticamente las imágenes, y funciona nuestra app tanto en desarrollo como producción.

Si quieren leer más sobre los assets y cómo manejarlos en Vite: https://vitejs.dev/guide/assets.html.

</details>

### Sección 15: Protección de rutas

[Deploy](https://patchamama.github.io/devtalles-react/07-heroes-spa/)

- [Context y Reducer de mi aplicación](https://github.com/patchamama/devtalles-react/commit/76587a9ffe084c8e8f81dda4ac48c22089d0ce22)
- [Login de un usuario](https://github.com/patchamama/devtalles-react/commit/d1ebd1b5e401648e02f69efa6630fc29e1ed3bd6)
- [Mantener el usuario activo](https://github.com/patchamama/devtalles-react/commit/030674302f0a0f94ee41a73475caa44684c035e5)
- [Logout del usuario](https://github.com/patchamama/devtalles-react/commit/7bd4d84b12d78477f56abb86cebbfb3cc61b20ea)
- [Rutas privadas](https://github.com/patchamama/devtalles-react/commit/94365b42fd946365b7a64cb368ef167501957f1d)
- [Rutas públicas](https://github.com/patchamama/devtalles-react/commit/d9e7793f01c631d520ce938b50e02a9e12c78934)
- [Recordar la última página visitada](https://github.com/patchamama/devtalles-react/commit/375ea21612819754756b4a1604e0d14ad2d4add3)
- [Código fuente GitHub - Fin sección 15](https://github.com/Klerith/react-heroes/tree/fin-seccion-15)

### Sección 16: Pruebas de nuestra aplicación de Héroes

- [Inicio de la sección - Pruebas en HeroApp](https://github.com/patchamama/devtalles-react/commit/42b676575d53c8c41af8448b09afacb952ec5fa7)
- [Pruebas en el authReducer](https://github.com/patchamama/devtalles-react/blob/0bfc96157c62198af00f53791571cf92d78d7c2c/07-heroes-spa/tests/auth/context/authReducer.test.js)
- [Pruebas sobre los Types](https://github.com/patchamama/devtalles-react/blob/a5ac0371f274279fa75792dfb642eb334c89e091/07-heroes-spa/tests/auth/types/types.test.js)
- [Pruebas en el PublicRoute](https://github.com/patchamama/devtalles-react/blob/435a396d00e301a4564a4c5d5d2ab142d847c54f/07-heroes-spa/tests/router/PublicRoute.test.jsx)
- [Pruebas en el PrivateRoute](https://github.com/patchamama/devtalles-react/blob/2d2791996a7283768482392ab7f7ad9a84f137d2/07-heroes-spa/tests/router/PrivateRoute.test.jsx)
- [Pruebas en el AppRouter](https://github.com/patchamama/devtalles-react/blob/5bdd264a84b9ad7a49412d551b0f57911373d0ea/07-heroes-spa/tests/router/AppRouter.test.jsx)
- [Pruebas en el NavBar](https://github.com/patchamama/devtalles-react/blob/bec4ad34ea02d01e62f5394f5fcdc2166533751b/07-heroes-spa/tests/ui/components/Navbar.test.jsx)
- [Pruebas en el SearchScreen](https://github.com/patchamama/devtalles-react/blob/58fb56371c40ee4fcc9003ad33c5dee9f751e454/07-heroes-spa/tests/heroes/pages/SearchPage.test.jsx)
- [Código fuente de GitHub - Fin sección 16](https://github.com/Klerith/react-heroes/tree/fin-seccion-16)

#### Recursos

- [Gist - Configuración de pruebas](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)

### Sección 17: JournalApp - MaterialUI - Estructura y Diseño

```sh
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material
```

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
- []()
- []()
- []()

#### Recursos

- [mui.com - minimizing-bundle-size](https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment)
- []()
- []()
- []()
- []()
- []()

---

### VSCode plugins

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### Atajos del teclado (MacOSx) con vscode

- Cambiar el nombre de una variable en todo el documento: Seleccionar la variable + fn + F2
- Poner comentario en línea: Cmd + , (después de seleccionar el texto o sobre la línea a comentar)
- Ordenar líneas ascendentemente (css styles): Cmd + Shift + P > Sort Lines Ascending
- Crear un functional-component. Snippet: `rafc` _hay que tener instalado [ES7 en vscode](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)._ Sí no funciona ver [esto](https://stackoverflow.com/questions/68653611/rafce-react-js-shortcut-not-working-in-vscode)
- Para duplicar una línea en vscode, simplemente sin seleccionar nada sobre la línea: Cmd + c, Cmd + v
- [Snippets en vscode](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets). VSCode tiene algunos snippets predefinidos como "clg" o "log" para `console.log()`.
