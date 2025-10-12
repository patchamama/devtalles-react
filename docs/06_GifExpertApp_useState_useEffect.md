1. En una aplicación de React, ¿cuál es la principal ventaja de organizar los componentes en carpetas basadas en funcionalidades (por ejemplo, una carpeta gifs y una shared) en lugar de tener una única carpeta global de components?

   Respuesta (A): Incorrecto. La estructura de carpetas en el código fuente no tiene un impacto directo en el rendimiento de la aplicación en el navegador. La optimización del rendimiento depende de otros factores como el "code splitting" o la eficiencia de los algoritmos. Para más detalles, revisa la Lección: Pensemos en componentes, alrededor del minuto 00:00:48.

   Respuesta (B): Incorrecto. TypeScript no impone ninguna regla sobre la estructura de carpetas. Esta organización es una convención de arquitectura de software para mejorar la calidad y mantenibilidad del código. Para más detalles, revisa la Lección: Pensemos en componentes.

   _Respuesta (C): **Correcto.** Agrupar los archivos por funcionalidad (componentes, acciones, interfaces, etc.) dentro de un mismo "módulo" hace que el proyecto sea mucho más fácil de entender, mantener y escalar a medida que crece._

   Respuesta (D): Incorrecto. La manera en que organizas los archivos no altera el tamaño final del paquete. Herramientas como Vite se encargan de empaquetar todo el código necesario independientemente de su ubicación en el proyecto. Para más detalles, revisa la Lección: Pensemos en componentes.

2. ¿Por qué se utiliza el hook useState para manejar datos que cambian con el tiempo (como la lista de búsquedas previas) en lugar de una variable de JavaScript normal?

   _Respuesta (A): **Correcto.** La principal función de useState es conectar una variable al ciclo de vida de renderizado de React. Un cambio en una variable normal no le dice a React que debe "redibujar" la pantalla, mientras que un cambio de estado con set sí lo hace._

   Respuesta (B): Incorrecto. Las variables de JavaScript son muy flexibles y pueden almacenar cualquier tipo de dato, incluyendo arreglos de strings sin ningún problema. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas.

   Respuesta (C): Incorrecto. El estado definido con useState es local al componente donde se declara. Para compartirlo, debe pasarse hacia abajo como props o usar manejadores de estado más avanzados. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas, alrededor del minuto 00:01:04.

   Respuesta (D): Incorrecto. El rendimiento de acceso a los datos es prácticamente el mismo. La diferencia fundamental no es la velocidad, sino la capacidad de useState para provocar una actualización de la interfaz de usuario. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas, alrededor del minuto 00:01:04.

3. ¿Cuál es el patrón de diseño principal para que un componente hijo pueda comunicar información o eventos a su componente padre (por ejemplo, notificar que se hizo clic en un término de búsqueda)?

   Respuesta (A): Incorrecto. En React, el flujo de datos es unidireccional (de padre a hijo). Un componente hijo no debe modificar directamente el estado de su padre, ya que esto rompería el patrón y haría el código impredecible. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas, alrededor del minuto 00:03:14.

   _Respuesta (B): **Correcto.** Este es el patrón canónico en React, a menudo llamado "levantar el estado" (lifting state up). El padre mantiene el control de la lógica y le da al hijo la "capacidad" de activarla a través de la función pasada por props._

   Respuesta (C): Incorrecto. Las variables de CSS se utilizan para definir estilos y no son un mecanismo para la comunicación de estado entre componentes de JavaScript/React. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas.

   Respuesta (D): Incorrecto. Aunque técnicamente es posible en el DOM, no es el patrón idiomático de React. Se prefiere el paso explícito de funciones como props por ser más declarativo y fácil de seguir. Para más detalles, revisa la Lección: Manejo de estado - Búsquedas previas, alrededor del minuto 00:03:14.

4. ¿Cuál es el objetivo principal de implementar un patrón "debounce" en una funcionalidad de búsqueda que se activa mientras el usuario escribe?

   Respuesta (A): Incorrecto. La validación de caracteres es una lógica de negocio diferente y no tiene que ver con el patrón debounce, cuyo foco es controlar la frecuencia de ejecución de una función. Para más detalles, revisa la Lección: useEffect - Debounce, alrededor del minuto 00:01:31.

   Respuesta (B): Incorrecto. El guardado en el historial es una funcionalidad separada de la optimización de peticiones. El debounce se centra en cuándo hacer la petición, no en qué hacer con el término de búsqueda. Para más detalles, revisa la Lección: useEffect - Debounce, alrededor del minuto 00:01:31.

   Respuesta (C): Incorrecto. Esto es precisamente lo que el debounce busca evitar. Hacer una petición por cada letra sería extremadamente ineficiente y sobrecargaría tanto el cliente como el servidor. Para más detalles, revisa la Lección: useEffect - Debounce, alrededor del minuto 00:01:21.

   _Respuesta (D): **Correcto.** El debounce es una técnica de optimización que agrupa múltiples llamadas a una función en un corto período de tiempo en una sola, mejorando significativamente el rendimiento y la experiencia del usuario._

5. ¿Por qué es una buena práctica "mapear" o transformar la data que viene de una API externa (como Giphy) a una interfaz propia (interface Gif) en lugar de usar la respuesta cruda directamente en la aplicación?

   Respuesta (A): Incorrecto. El mapeo ocurre en el cliente, después de que todos los datos han sido descargados de la API. Por lo tanto, no afecta el tamaño de la descarga original. Para más detalles, revisa la Lección: Obtener gifs mediante petición http, alrededor del minuto 00:08:18.

   Respuesta (B): Incorrecto. Axios es agnóstico a la estructura de los datos que recibe. Devuelve la respuesta cruda de la API, y el mapeo es una decisión de arquitectura que implementa el desarrollador. Para más detalles, revisa la Lección: Obtener gifs mediante petición http, alrededor del minuto 00:05:50.

   _Respuesta (C): **Correcto.** Este patrón, a veces llamado "Adaptador", hace que la aplicación sea más robusta y fácil de mantener. El resto de la aplicación trabaja con un modelo de datos consistente y propio, aislado de los cambios de fuentes externas._

   Respuesta (D): Incorrecto. El rendimiento no es la razón principal. Si bien se puede optimizar al tomar solo los datos necesarios, el beneficio clave es la mantenibilidad y la robustez del código frente a cambios externos. Para más detalles, revisa la Lección: Developers Giphy - API Key.

6. ¿Cuál es el propósito de utilizar un archivo .env para almacenar la API Key y añadirlo al .gitignore?

   Respuesta (A): Incorrecto. El uso de un archivo .env es una práctica de seguridad y configuración, y no tiene un impacto notable en la velocidad de carga de la clave. Para más detalles, revisa la Lección: Variables de entorno, alrededor del minuto 00:00:18.

   Respuesta (B): Incorrecto. Vite se encarga de cargar las variables de entorno en la aplicación, pero no las valida ni verifica su corrección. Esa responsabilidad recae en la API que consume la clave. Para más detalles, revisa la Lección: Variables de entorno, alrededor del minuto 00:01:03.

   Respuesta (C): Incorrecto. Aunque es la práctica recomendada y más segura, los servicios de hosting ofrecen otras formas de configurar variables de entorno. No es la "única" forma, pero sí la estándar en desarrollo. Para más detalles, revisa la Lección: Variables de entorno.

   _Respuesta (D): **Correcto.** Esta es una práctica de seguridad fundamental. Exponer claves en un repositorio público es un riesgo de seguridad grave. .gitignore asegura que este archivo sensible permanezca local._

7. Al utilizar una librería como Axios, ¿qué ventaja clave ofrece la creación de una instancia preconfigurada (axios.create) para una API específica?

   Respuesta (A): Incorrecto. El rendimiento de la petición es el mismo. La ventaja de axios.create no es la velocidad, sino la organización, limpieza y mantenibilidad del código. Para más detalles, revisa la Lección: Variables de entorno, alrededor del minuto 00:05:11.

   Respuesta (B): Incorrecto. Generalmente, cada instancia de Axios se configura para un único baseURL, por lo que está destinada a comunicarse con una sola API. Para más detalles, revisa la Lección: Variables de entorno, alrededor del minuto 00:05:28.

   Respuesta (C): Incorrecto. Se puede usar Axios directamente con axios.get, axios.post, etc., sin necesidad de crear una instancia. Sin embargo, para proyectos que hacen múltiples llamadas a una misma API, crear una instancia es una práctica muy recomendada. Para más detalles, revisa la Lección: Variables de entorno, alrededor del minuto 00:05:11.

   _Respuesta (D): **Correcto.** Este enfoque sigue el principio DRY (Don't Repeat Yourself - No te repitas). Si la URL base o un parámetro común como la clave de API necesitan cambiar, solo se modifica en un lugar._

8. Verdadero o Falso: El hook useEffect se ejecuta únicamente cuando el componente se monta por primera vez en la pantalla.

   Respuesta (A): Incorrecto. Esta afirmación es incompleta. Si bien se ejecuta tras el primer montaje, su comportamiento posterior depende de las dependencias. Para más detalles, revisa la Lección: useEffect - Debounce, alrededor del minuto 00:05:41.

   _Respuesta (B): **Correcto.** useEffect se ejecuta después del primer renderizado y, adicionalmente, cada vez que una de las variables incluidas en su arreglo de dependencias cambia de valor entre renderizados. Si el arreglo de dependencias está vacío ([]), entonces sí se ejecuta solo una vez._

9. ¿Cuál es el propósito de un "input controlado" en React?

   Respuesta (A): Incorrecto. Los estilos CSS se pueden aplicar a cualquier elemento HTML, sin importar si está controlado por el estado de React o no. Para más detalles, revisa la Lección: Manejo del componente de búsqueda, alrededor del minuto 00:03:54.

   _Respuesta (B): **Correcto.** Al vincular el value del input al estado y actualizarlo con onChange, se asegura que el estado del componente y lo que ve el usuario estén siempre sincronizados, lo que facilita la manipulación y validación de los datos._

   Respuesta (C): Incorrecto. Un input controlado no tiene funciones de encriptación. Su propósito está relacionado con el manejo del estado y los datos, no con la seguridad a nivel de cifrado. Para más detalles, revisa la Lección: Manejo del componente de búsqueda, alrededor del minuto 00:03:54.

   Respuesta (D): Incorrecto. La visibilidad y compatibilidad de un input dependen del HTML estándar y no de si está siendo controlado por React. Para más detalles, revisa la Lección: Manejo del componente de búsqueda, alrededor del minuto 00:03:54.

10. ¿Por qué al crear un componente genérico como un SearchBar, es una buena práctica permitir que reciba props (como placeholder) en lugar de tener valores fijos dentro de él?

    Respuesta (A): Incorrecto. La forma en que un componente recibe sus datos internos (props vs. valores fijos) no tiene un impacto directo en el SEO de la página. Para más detalles, revisa la Lección: Pensemos en componentes, alrededor del minuto 00:07:45.

    _Respuesta (B): **Correcto.** La parametrización a través de props es un pilar de React. Permite que un mismo componente sea flexible y se adapte a diferentes necesidades, lo cual es fundamental para construir aplicaciones escalables y mantenibles._

    Respuesta (C): Incorrecto. Un componente puede manejar su propio estado interno con useState independientemente de si recibe o no props. Son dos conceptos ortogonales. Para más detalles, revisa la Lección: Manejo del componente de búsqueda, donde el SearchBar usa useState internamente.

    Respuesta (D): Incorrecto. Las props se usan principalmente para pasar datos y lógica. Aunque se podrían usar para pasar clases de CSS, su objetivo principal no es reducir la cantidad de código de estilos. Para más detalles, revisa la Lección: Pensemos en componentes, alrededor del minuto 00:07:45.
