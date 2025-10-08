### Quiz

- ¿Cuál es la razón principal por la que un componente de React debe devolver un único elemento raíz (como un <div> o un fragmento <>...</>)?

  **A. Correcto**. Es una regla de JSX para asegurar que la estructura del componente se pueda representar de manera predecible en el árbol del DOM, evitando ambigüedad sobre cuál es el "contenedor" principal.

  B. Es una limitación de rendimiento; devolver múltiples elementos haría que la aplicación sea más lenta.

  C. Solo los elementos envueltos en un <div> pueden recibir estilos de CSS correctamente.

  D. Es una convención para facilitar la lectura del código, pero técnicamente no es obligatorio.

- ¿Por qué en JSX se debe usar className en lugar de class para asignar una clase de CSS a un elemento?

  Porque class es una palabra reservada en JavaScript, utilizada para crear clases (Programación Orientada a Objetos), y JSX es fundamentalmente JavaScript.

- Usando el hook useState, si tienes:

  ```js
  const [valor, setValor] = useState(10)
  ```

  ¿Cuál es la forma correcta de actualizar valor a 11?

  Llamando a la función actualizadora: `setValor(valor + 1);`

- Verdadero o Falso: Si intentas renderizar una variable booleana directamente en JSX, como en

  ```html
  <h1>{unaVariableBooleana}</h1>
  ```

  React mostrará en pantalla el texto "true" o "false".

- Verdadero o Falso: Para usar CSS Modules en un proyecto de React, el archivo de estilos debe llamarse

  `[NombreComponente].css`.

  Falso. Debe llamarse `[NombreComponente].module.css`.

- Al renderizar una lista de elementos con .map(), ¿por qué se considera una mala práctica usar el index del arreglo como la key?

  Porque si el orden de los elementos cambia, los índices también cambian, lo que puede confundir a React y llevar a errores de renderizado y de estado incorrecto en los componentes.

- En una estructura de proyecto de Vite con React, ¿cuál es el propósito principal de la carpeta public?

  Para colocar recursos estáticos como imágenes, fuentes o favicon.ico que necesitan ser servidos directamente sin pasar por el proceso de compilación de Vite.
