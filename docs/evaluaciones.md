# Sección 3 Reforzamiento JavaScript y TypeScript

1. En JavaScript, si declaras un objeto con const, ¿puedes cambiar el valor de sus propiedades?

- _Respuesta (A)_: Esto es correcto. const en objetos y arreglos asegura que la referencia de la variable no cambie, pero el contenido del objeto o arreglo sí puede ser modificado.

- Respuesta (B): Incorrecto. const previene la reasignación de la variable, pero no convierte en inmutables las propiedades del objeto. Puedes repasar esto en la lección "Objetos literales", alrededor del minuto 00:02:03.

- Respuesta (C): Incorrecto. El modo estricto impone reglas más rigurosas, pero el comportamiento de const con los objetos es estándar en JavaScript y no depende de él. La lección "Variables y constantes" explica el uso de const sin mencionar que dependa del modo estricto.

- Respuesta (D): Incorrecto. La declaración de propiedades dentro de un objeto literal no utiliza let o const. La mutabilidad de las propiedades no depende de cómo se declararon. Esto se demuestra en la lección "Objetos literales" al modificar las propiedades directamente.

2. ¿Cuál es la principal diferencia entre clonar un objeto con el operador de propagación (...) y usar structuredClone()?

- Respuesta (A): Incorrecto. structuredClone() funciona tanto para objetos como para arreglos. En la lección "Objetos literales" se aplica sobre un objeto complejo.

- Respuesta (B): Incorrecto. Ambas son características de JavaScript. El operador de propagación (spread operator) se explica en la lección "Objetos literales" como una herramienta de JavaScript.

- Respuesta (C): Incorrecto. Existe una diferencia fundamental. En la lección "Objetos literales", se demuestra que el operador de propagación falla al clonar objetos anidados (minuto 00:07:31), lo que obliga a usar structuredClone() para una copia profunda (minuto 00:08:31).

- _Respuesta (D)_: Correcto. El operador de propagación copia las propiedades del primer nivel, pero los objetos anidados se copian por referencia. structuredClone crea una copia completamente nueva de todo el objeto, incluyendo los anidados.

1. Verdadero o Falso: Las interfaces de TypeScript se compilan en objetos de JavaScript en el código final, añadiendo peso al archivo.

- _Respuesta (A)_ - Falso: Correcto. Las interfaces y los tipos son construcciones de TypeScript que solo existen en tiempo de desarrollo para la verificación de tipos. Se eliminan por completo durante el proceso de transpilación a JavaScript.

- Respuesta (B) - Verdadero: Incorrecto. En la lección "Interfaces de TypeScript" (minuto 00:02:02), se explica claramente que las interfaces no tienen contraparte en JavaScript y su código desaparece en la transpilación.

4. En una función de flecha, ¿cuál es la sintaxis correcta para retornar implícitamente un objeto?

- Respuesta (A): Incorrecto. La palabra clave return solo se puede usar dentro de un bloque de función explícito (con llaves), lo cual es lo opuesto a un retorno implícito.

- Respuesta (B): Incorrecto. Esto causaría un error de sintaxis. En la lección "Funciones con múltiples retornos" (alrededor del 00:02:33), se muestra que las llaves solas se interpretan como el cuerpo de la función.

- _Respuesta (C)_: Correcto. Para que el intérprete no confunda las llaves {} del objeto con el cuerpo de la función, el objeto debe estar envuelto en paréntesis: `() => ({ key: 'value' })`.

- Respuesta (D): Incorrecto. Sí es posible, tal como se demuestra en la lección "Funciones con múltiples retornos" (minuto 00:03:06), donde se explica la solución de usar paréntesis.

5. Dada la desestructuración de arreglo

   ```ts
   const [, , , heroe] = heroes
   ```

   ¿Qué elemento del arreglo heroes se está asignando a la variable heroe?

- _Respuesta (A)_: Correcto. Cada coma en la desestructuración de un arreglo salta un elemento. Las tres comas iniciales saltan los elementos en los índices 0, 1 y 2, asignando el elemento del índice 3 a la variable heroe.

- Respuesta (B): Incorrecto. Para obtener el tercer elemento (índice 2), se necesitarían solo dos comas:

  const [, , heroe] = heroes;

  Puedes ver cómo funciona en la lección "Desestructuración de arreglos", alrededor del minuto 00:04:08.

- Respuesta (C): Incorrecto. La desestructuración posicional no funciona así. No hay una sintaxis directa para tomar el último elemento de esta forma.

- Respuesta (D): Incorrecto. La sintaxis es válida. La lección "Desestructuración de arreglos" (minuto 00:03:53) enseña a usar comas para omitir los elementos que no se desean.

6.  En la tarea de useState, en la lección “Tarea – Desestructuración”, ¿por qué fue importante usar la aserción as const en el arreglo que retorna la función?

- Respuesta (A): Incorrecto. Si bien as const hace que el arreglo sea de solo lectura, su propósito principal en este contexto es influir en la inferencia de tipos. El problema que resuelve se explica en la lección “Tarea – Desestructuración”, alrededor del minuto 00:05:34.

- _Respuesta (B)_: Correcto. as const le dice a TypeScript que el arreglo tiene una estructura fija (una tupla), permitiéndole saber que el primer elemento siempre es un string y el segundo siempre es una función, lo cual es crucial para la seguridad de tipos.

- Respuesta (C): Incorrecto. as const es una construcción de TypeScript para el análisis de tipos; no tiene impacto en el rendimiento del código JavaScript en tiempo de ejecución.

- Respuesta (D): Incorrecto. as const es una aserción de tipo y no tiene relación con el sistema de módulos, como se ve en la lección "Importaciones y exportaciones".

7.  Al usar el Fetch API para obtener datos JSON, ¿por qué es necesario un segundo paso como .then(response => response.json())?

- Respuesta (A): Incorrecto. El método .json() hace lo contrario: toma el cuerpo de la - Respuesta (que es un stream de texto) y lo parsea para convertirlo en un objeto JavaScript. Puedes ver la explicación en la lección "Fetch API" sobre el ReadableStream (00:03:51).

- Respuesta (B): Incorrecto. El primer .then() se usa para manejar la respuesta exitosa inicial. Los errores se manejan con .catch(), como se explica en la lección "Promesas" (00:07:38).

- _Respuesta (C)_: Correcto. La primera promesa de fetch se resuelve con un objeto Response que contiene información de la cabecera y el estado. Se necesita llamar al método .json() para procesar el cuerpo de la respuesta, el cual a su vez devuelve otra promesa.

- Respuesta (D): Incorrecto. Este paso es fundamental siempre que se espere una respuesta en formato JSON. En la lección "Fetch API" se muestra que es un paso obligatorio para acceder a la data.

8.  En una función async, ¿qué hace la palabra clave await?

- _Respuesta (A)_: Correcto. await solo puede usarse dentro de funciones async y sirve para esperar de forma no bloqueante a que una promesa se complete, simplificando la escritura de código asíncrono.

- Respuesta (B): Incorrecto. La palabra clave que convierte una función en asíncrona es async, no await. Esto se explica al inicio de la lección "Async - Await" (00:02:02).

- Respuesta (C): Incorrecto. Para crear una nueva promesa se utiliza el constructor new Promise(). await se usa para consumir una promesa ya existente, como se ve en "Async - Await" (00:03:27).

- Respuesta (D): Incorrecto. Para manejar errores en funciones async/await, se utiliza un bloque try...catch, como se menciona en la lección "Async – Await" al hablar de errores (00:07:05).

9.  Dado el siguiente objeto:

    ```ts
    const user = { fullName: 'Tony Stark', years: 45 }
    ```

    ¿Cuál es la sintaxis correcta para desestructurar la propiedad fullName y asignarla a una nueva variable llamada heroName en una sola línea?

- Respuesta (A): Incorrecto. Esta sintaxis intenta desestructurar una propiedad que se llama heroName del objeto user, la cual no existe. El nombre de la propiedad original debe ir a la izquierda. Puedes repasar la sintaxis en la lección "Desestructuración de objetos" (00:10:59).

- _Respuesta (B)_: Correcto. Esta es la sintaxis para renombrar una propiedad durante la desestructuración. Se indica la propiedad original (fullName), seguida de dos puntos (:) y el nuevo nombre que se le quiere dar a la variable (heroName).

- Respuesta (C): Incorrecto. Aunque este código funciona y el resultado es el mismo, no cumple con el requisito de hacerlo "en una sola línea" de desestructuración. La idea es usar la sintaxis de renombrado directamente.

- Respuesta (D): Incorrecto. La palabra clave as se utiliza para aserciones de tipo en TypeScript o para renombrar en importaciones/exportaciones, pero no para renombrar propiedades en una desestructuración de objeto. La sintaxis correcta usa dos puntos (:), como se muestra en la lección "Desestructuración de objetos" (00:10:59).

10. Según la estructura de la respuesta de la API de Giphy vista en la lección “Giphy API - Obtener gifs”, ¿cuál sería la ruta de acceso correcta para obtener la URL de la imagen en su tamaño original? Puedes usar Postman para ubicarla de esta forma.

- Respuesta (A): Incorrecto. Falta el nivel images, que agrupa todas las variantes del GIF. Puedes ver la estructura en la lección "Giphy API - Obtener gifs" al minuto 00:03:11.

- Respuesta (B): Incorrecto. Faltan los niveles data (el contenedor principal) y original (la versión específica). La estructura completa se analiza en "Giphy API - Obtener gifs" (00:03:11).

- _Respuesta (C)_: Correcto. La respuesta de la API envuelve el objeto del GIF en una propiedad data. Dentro de ese objeto, las diferentes versiones de la imagen están en images, y la versión original se encuentra en original, que a su vez contiene la propiedad url.

- Respuesta (D): Incorrecto. La propiedad data del objeto del GIF no tiene una URL directa. La URL está anidada dentro de images y original, como se ve en la lección "Fetch API" al minuto 00:06:51, cuando se extrae la URL.
