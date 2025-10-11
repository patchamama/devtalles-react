1. En el contexto de Vitest, ¿cuál es el propósito principal de la función describe()?

   Respuesta (A): Incorrecto. La función para ejecutar una prueba individual es test() o it(). describe() sirve para contener varias de estas pruebas. Para más detalles, revisa la Lección: Agrupar pruebas similares.

   Respuesta (B): **Correcto**. describe() funciona como un contenedor que permite organizar el "test suite" en bloques lógicos, lo cual es especialmente útil cuando un archivo contiene pruebas para múltiples funcionalidades.

   Respuesta (C): Incorrecto. La creación de snapshots se realiza con el matcher .toMatchSnapshot(), no con la función describe(). Para más detalles, revisa la Lección: Evaluar snapshots.

   Respuesta (D): Incorrecto. La importación de funciones se realiza con la sintaxis import de JavaScript/TypeScript y no está relacionada con la función describe(). Para más detalles, revisa la Lección: Agrupar pruebas similares.

2. Al probar un componente de React, ¿cuál es la diferencia fundamental entre usar screen y desestructurar container desde la función render?

   Respuesta (A): Incorrecto. La diferencia principal no radica en la velocidad o la cantidad de métodos, sino en cómo y cuándo se actualizan. Para más detalles, revisa la Lección: Buscar elementos en el componente renderizado, alrededor del minuto 00:05:04.

   Respuesta (B): **Correcto**. Esta es la distinción clave. Se recomienda usar screen porque refleja los cambios en la UI después de que se disparan eventos, mientras que container no se actualiza y solo representa el estado inicial.

   Respuesta (C): Incorrecto. Son objetos diferentes con propósitos distintos. container es un div que envuelve al componente renderizado, mientras que screen es un objeto con métodos de consulta que opera sobre todo el document.body. Para más detalles, revisa la Lección: Buscar elementos en el componente renderizado, alrededor del minuto 00:05:04.

   Respuesta (D): Incorrecto. Es al contrario; container es más sencillo de usar para snapshots iniciales, pero screen es la herramienta preferida para casi todas las consultas, especialmente en pruebas interactivas. Para más detalles, revisa la Lección: Buscar elementos en el componente renderizado, alrededor del minuto 00:05:04.

3. Verdadero o Falso: Una prueba de "snapshot" `(.toMatchSnapshot())` fallará si se modifica la lógica interna de un componente, aunque el HTML resultante sea exactamente el mismo.

   Respuesta (A): Incorrecto. Los snapshots son completamente ajenos a la lógica interna; solo se preocupan por el resultado final. Si el HTML renderizado no cambia, la prueba de snapshot pasará. Para más detalles, revisa la Lección: Evaluar snapshots, alrededor del minuto 00:01:30.

   Respuesta (B): **Correcto**. Una prueba de snapshot solo compara la "fotografía" del HTML guardado con el nuevo HTML generado. No le importa cómo se generó ese HTML, por lo que cambios en la lógica que no afecten la salida visual no harán que la prueba falle.

4. ¿Cuál es el propósito principal de "mockear" un componente hijo (por ejemplo, ItemCounter) cuando se prueba un componente padre (FirstStepsApp)?

   Respuesta (A): Incorrecto. Si bien puede haber un beneficio de rendimiento, el objetivo principal no es la velocidad, sino el aislamiento y el enfoque de la prueba. Para más detalles, revisa la Lección: Componentes ficticios - Mock Components, alrededor del minuto 00:00:22.

   Respuesta (B): **Correcto**. El "mocking" es fundamental para las pruebas unitarias. Permite probar un componente de forma aislada, evitando que su prueba dependa del comportamiento o de las dependencias (ej. llamadas a API) de sus hijos.

   Respuesta (C): Incorrecto. Se pueden pasar props a componentes hijos reales sin necesidad de mockearlos, pero eso convertiría la prueba en una de integración en lugar de unitaria. Para más detalles, revisa la Lección: Componentes ficticios - Mock Components, alrededor del minuto 00:00:22.

   Respuesta (D): Incorrecto. La responsabilidad de probar el componente hijo recae en su propio archivo de pruebas. La prueba del padre asume que el hijo funciona y solo se enfoca en sí mismo. Para más detalles, revisa la Lección: Componentes ficticios - Mock Components, alrededor del minuto 00:00:22.

5. Para simular un click de un usuario en un botón dentro de una prueba, ¿qué herramienta de React Testing Library se utiliza?

   Respuesta (A): Incorrecto. screen se usa para encontrar elementos, no para interactuar con ellos directamente de esta manera. Revisa la Lección: Disparar eventos, alrededor del minuto 00:03:29.

   Respuesta (B): Incorrecto. vi.fn() crea una función "espía" o mock, pero no simula eventos del DOM. Revisa la Lección: Disparar eventos, alrededor del minuto 00:03:29.

   Respuesta (C): Incorrecto. render se usa para montar el componente al inicio de la prueba, no para simular eventos posteriores. Revisa la Lección: Disparar eventos, alrededor del minuto 00:03:29.

   Respuesta (D): **Correcto**. fireEvent es la utilidad proporcionada por Testing Library para disparar eventos del DOM de forma programática, como clics, cambios de input, etc.

6. Verdadero o Falso: El reporte de cobertura de pruebas (coverage) indica qué tan bien está escrita la lógica de las pruebas.

   Respuesta (A): Incorrecto. La cobertura solo mide qué líneas de tu código de producción fueron ejecutadas durante las pruebas, no juzga la calidad ni la corrección de las pruebas en sí. Revisa la Lección: Índice de cobertura, alrededor del minuto 00:05:00.

   Respuesta (B): **Correcto**. La cobertura es una métrica cuantitativa, no cualitativa. Simplemente te muestra qué partes de tu código fuente no están siendo probadas, pero no te dice si las pruebas existentes son buenas, significativas o correctas.

7. Si una prueba falla porque un "snapshot" no coincide con el renderizado actual y el cambio en el componente fue intencional y correcto, ¿qué se debe hacer?

   Respuesta (A): Incorrecto. Aunque esto funcionaría, no es el método recomendado. La herramienta proporciona una forma más directa y segura de actualizar. Revisa la Lección: Evaluar snapshots, alrededor del minuto 00:05:05.

   Respuesta (B): Incorrecto. Nunca se debe modificar manualmente un archivo de snapshot, ya que son generados automáticamente y su formato es muy específico. Revisa la Lección: Evaluar snapshots, alrededor del minuto 00:05:05.

   Respuesta (C): **Correcto**. Esta es la forma estándar y segura de aceptar un cambio en la UI y actualizar la "fotografía" con la que se compararán las futuras ejecuciones.

   Respuesta (D): Incorrecto. Comentar la prueba significa que dejarás de verificar la integridad de ese componente, lo cual va en contra del propósito del snapshot. Revisa la Lección: Evaluar snapshots, alrededor del minuto 00:05:05.

8. ¿Cuál es el propósito de usar `afterEach(() => { vi.clearAllMocks(); })` en un archivo de pruebas?

   Respuesta (A): Incorrecto. Esta función no interactúa con la caché de Vitest ni está diseñada para mejorar la velocidad de esa manera; su propósito es el aislamiento de las pruebas.

   Respuesta (B): Incorrecto. El estado de los componentes se resetea al desmontarlos entre pruebas (lo que suele ocurrir automáticamente), no a través de la limpieza de mocks.

   Respuesta (C): **Correcto**. El propósito fundamental es garantizar que cada prueba comience con un "borrón y cuenta nueva" para las funciones mock, reseteando su historial (ej. número de llamadas). Esto es crucial para la independencia y fiabilidad de las pruebas.

   Respuesta (D): Incorrecto. La gestión de archivos de snapshot es independiente de la limpieza de mocks y se realiza a través de otros comandos en la terminal de pruebas.

9. Para verificar que un componente "mockeado" fue llamado con un conjunto específico de props (por ejemplo, { name: 'Producto A', quantity: 5 }), ¿qué "matcher" de Vitest se debe usar?

   Respuesta (A): Incorrecto. .toBe() se usa para comparaciones estrictas (===) de primitivos. Para objetos, se debería usar .toEqual(), pero incluso ese no verifica los argumentos de llamada de un mock. Revisa la Lección: Esperar argumentos específicos, alrededor del minuto 00:08:34.

   Respuesta (B): Incorrecto. .toHaveBeenCalledTimes() solo verifica cuántas veces se llamó al mock, pero no con qué argumentos se llamó. Revisa la Lección: Esperar argumentos específicos, alrededor del minuto 00:08:34.

   Respuesta (C): **Correcto**. Este es el matcher específico para verificar los argumentos con los que se invocó una función "espía" o mock.

   Respuesta (D): Incorrecto. .toContain() se usa para verificar si un elemento existe dentro de un arreglo o si un string contiene un substring, no para verificar los argumentos de una llamada a función. Revisa la Lección: Esperar argumentos específicos, alrededor del minuto 00:08:34.

10. Verdadero o Falso: La mejor estrategia para buscar un elemento en una prueba es siempre usar un data-testid porque es la más robusta y directa.

    Respuesta (A): Incorrecto. Aunque es una opción, la documentación de Testing Library lo recomienda como último recurso, ya que acopla las pruebas a detalles de implementación que no son visibles para el usuario. Revisa la Lección: Evaluar snapshots, alrededor del minuto 00:07:31.

    Respuesta (B): **Correcto**. La jerarquía de consultas recomendada por React Testing Library prioriza métodos que se asemejan a cómo un usuario encontraría los elementos (por rol, por texto, por label), dejando getByTestId como una opción de escape para cuando otras consultas no son prácticas.
