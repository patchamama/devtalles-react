1. ¿Cuál es el propósito principal de crear un "Custom Hook" en React (por ejemplo, useGifs)?

   Respuesta (A): Incorrecto. Los custom hooks no son componentes y no tienen un impacto directo en la velocidad de renderizado. Son funciones para compartir lógica. Para más detalles, revisa la Lección: Problema que resuelve un custom hook.

   _Respuesta (B): Correcto. El objetivo fundamental de los custom hooks es encapsular lógica que utiliza otros hooks (como useState o useEffect) para que pueda ser extraída de un componente y reutilizada fácilmente en otros, evitando la duplicación de código._

   Respuesta (C): Incorrecto. Para reutilizar estilos se utilizan otras técnicas como las clases de CSS o módulos de CSS. Los hooks son para lógica de JavaScript y estado. Para más detalles, revisa la Lección: Custom Hooks.

   Respuesta (D): Incorrecto. Las peticiones HTTP se pueden realizar directamente en los componentes. El custom hook sirve para organizar y reutilizar esa lógica de petición, no es un requisito técnico. Para más detalles, revisa la Lección: Hook personalizado - useGifs.

2. Al inspeccionar un componente con las React DevTools, ¿por qué es fundamental entender que los hooks son "posicionales"?

   Respuesta (A): Incorrecto. React no utiliza el nombre de la variable para identificar el hook, sino el orden en que es llamado. Para más detalles, revisa la Lección: React DevTools, alrededor del minuto 00:03:31.

   Respuesta (B): Incorrecto. Los hooks deben llamarse en el nivel superior del cuerpo de un componente funcional, pero no necesariamente en la parte superior del archivo. Lo importante es que no estén dentro de condicionales. Para más detalles, revisa la Lección: React DevTools.

   _Respuesta (C): Correcto. Esta es una de las reglas de oro de los hooks. Su orden de ejecución debe ser consistente en cada renderizado para que React pueda asociar correctamente el estado con la llamada del hook correspondiente._

   Respuesta (D): Incorrecto. El posicionamiento visual con CSS es completamente independiente de cómo React gestiona los hooks internamente. Las DevTools reflejan la estructura lógica del código, no la visual. Para más detalles, revisa la Lección 5: React DevTools.

3. ¿Por qué una variable de JavaScript normal (let o const) declarada dentro de un custom hook pierde su valor entre renderizados?

   Respuesta (A): Incorrecto. No es un proceso del recolector de basura, sino una consecuencia directa del ciclo de vida de renderizado de React: la función se ejecuta de nuevo desde cero. Para más detalles, revisa la Lección: Manejo en caché, alrededor del minuto 00:05:21.

   _Respuesta (B): Correcto. El cuerpo de un componente o de un custom hook es una función que se ejecuta en cada render. Solo los valores gestionados por hooks específicos como useState o useRef tienen la capacidad de persistir a través de estas ejecuciones._

   Respuesta (C): Incorrecto. Las variables de JavaScript pueden almacenar todo tipo de datos complejos. El problema no es el tipo de dato, sino la persistencia a través de los renders. Para más detalles, revisa la Lección: Manejo en caché.

   Respuesta (D): Incorrecto. Las variables declaradas con let son totalmente modificables. El problema es que dicha modificación se pierde en el siguiente renderizado del hook. Para más detalles, revisa la Lección: Manejo en caché.

4. ¿Cuál es la diferencia clave entre useState y useRef al momento de actualizar su valor?

   Respuesta (A): Incorrecto. Ambos hooks pueden almacenar cualquier tipo de dato, desde primitivos hasta objetos complejos. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados.

   _Respuesta (B): Correcto. Esta es la distinción más importante. useState está hecho para datos que, al cambiar, deben actualizar la UI. useRef es para mantener datos que deben persistir sin provocar una nueva renderización._

   Respuesta (C): Incorrecto. No hay una diferencia de rendimiento relevante. La elección se basa en si se necesita o no un re-render, no en la velocidad. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados, alrededor del minuto 00:00:35.

   Respuesta (D): Incorrecto. El origen de los datos es irrelevante. La decisión se basa únicamente en si el cambio en el dato debe causar una actualización visual. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados.

5. Al generar la versión de producción con npm run build, ¿por qué el proceso suele ser más estricto que el servidor de desarrollo?

   Respuesta (A): Incorrecto. Se usa la misma librería de React, pero optimizada. La diferencia en la tolerancia a errores viene del proceso de build, no de la librería. Para más detalles, revisa la Lección: Generar versión de producción.

   Respuesta (B): Incorrecto. El proceso de build es técnico y no evalúa aspectos subjetivos como el diseño. Se enfoca en la corrección y optimización del código. Para más detalles, revisa la Lección: Generar versión de producción.

   _Respuesta (C): Correcto. El objetivo del build es generar un paquete de código robusto. Por ello, aplica reglas más estrictas para asegurar la calidad y prevenir que posibles errores lleguen al usuario final._

   Respuesta (D): Incorrecto. El proceso de build es completamente local y no requiere conexión a internet para analizar y empaquetar el código. Para más detalles, revisa la Lección: Generar versión de producción.

6. ¿Por qué generalmente no se puede abrir el archivo index.html de la carpeta dist (producción) directamente en el navegador?

   Respuesta (A): Incorrecto. La carpeta dist contiene archivos minificados, pero no encriptados. Para más detalles, revisa la Lección: Generar versión de producción, alrededor del minuto 00:05:02.

   Respuesta (B): Incorrecto. El problema no es un bloqueo del navegador, sino que el protocolo file:// no puede resolver las rutas de los assets como lo hace un servidor HTTP. Para más detalles, revisa la Lección: Generar versión de producción, alrededor del minuto 00:05:02.

   _Respuesta (C): Correcto. El build de producción hace referencia a sus recursos (JavaScript, CSS) con rutas absolutas desde la raíz (ej. /assets/index.js). Un servidor web entiende esta estructura, pero el sistema de archivos local (file://) no._

   Respuesta (D): Incorrecto. El archivo index.html contiene el HTML base y las etiquetas <script> necesarias para iniciar la aplicación de React. Para más detalles, revisa la Lección: Generar versión de producción.

7. Si dos componentes diferentes en tu aplicación utilizan el mismo custom hook (ej. useGifs), ¿comparten el mismo estado entre ellos?

   Respuesta (A): Incorrecto. A diferencia de los servicios en otros frameworks, los hooks de React no son "singletons" por defecto. Cada uso es una nueva "copia". Para más detalles, revisa la Lección: Hook personalizado - useGifs, alrededor del minuto 00:03:40.

   Respuesta (B): Incorrecto. Aunque se inicien con el mismo valor, sus estados son independientes. Un cambio en el estado de una instancia no afectará a la otra. Para más detalles, revisa la Lección: Hook personalizado - useGifs.

   _Respuesta (C): Correcto. Esta es una característica clave del diseño de los hooks. Cada vez que se llama a useGifs(), se crea un nuevo "universo" para su estado y lógica. Para compartir estado, se necesitan otras estrategias como levantarlo a un componente padre común._

   Respuesta (D): Incorrecto. La jerarquía de componentes no cambia este comportamiento. Dos llamadas al mismo hook, incluso dentro del mismo componente, crearían dos estados independientes. Para más detalles, revisa la Lección: Hook personalizado - useGifs.

8. ¿Cuál de las siguientes afirmaciones sobre el hook useRef es correcta?

   Respuesta (A): Incorrecto. Este es el caso de uso para useState. Usar useRef para esto no funcionaría, ya que el cambio no se reflejaría en la pantalla. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados.

   _Respuesta (B): Correcto. Su propósito es precisamente tener una "caja" mutable que sobrevevive a los renderizados para almacenar información (como un ID de un temporizador, un objeto de caché o una referencia a un elemento del DOM) sin afectar el ciclo de renderizado._

   Respuesta (C): Incorrecto. useState y useRef tienen propósitos diferentes y complementarios; ninguno es obsoleto. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados.

   Respuesta (D): Incorrecto. Aunque un uso muy común es para referencias al DOM, useRef puede almacenar cualquier tipo de valor: números, strings, objetos, etc. Para más detalles, revisa la Lección: useRef - Mantener el valor entre renderizados, alrededor del minuto 00:01:24.

9. ¿Cuál es la convención de nomenclatura obligatoria para crear un Custom Hook en React?

   Respuesta (A): Incorrecto. No hay ninguna regla sobre cómo debe terminar el nombre del hook. Para más detalles, revisa la Lección: Custom Hooks.

   _Respuesta (B): Correcto. Es una regla impuesta por React y su linter. Permite a React verificar que se están siguiendo las reglas de los hooks (por ejemplo, que no se llamen condicionalmente). Si no empieza con use, React lo tratará como una función normal._

   Respuesta (C): Incorrecto. Los hooks siguen la convención camelCase, no SNAKE_CASE. Para más detalles, revisa la Lección: Custom Hooks, alrededor del minuto 00:01:19.

   Respuesta (D): Incorrecto. Aunque usan camelCase, la parte obligatoria es que el nombre debe comenzar con use. Para más detalles, revisa la Lección: Custom Hooks, alrededor del minuto 00:01:19.

10. ¿Qué funcionalidad clave de las React DevTools permite probar diferentes escenarios en un componente sin tener que modificar el código fuente?

    Respuesta (A): Incorrecto. Las DevTools no permiten añadir logs al código; para eso se debe editar el código fuente. Para más detalles, revisa la Lección: React DevTools.

    Respuesta (B): Incorrecto. El "Profiler" es una herramienta para analizar y medir el rendimiento de los renderizados, pero no optimiza el código de forma automática. Para más detalles, revisa la Lección: React DevTools.

    _Respuesta (C):Correcto. Esta es una de las características más potentes para la depuración. Permite simular diferentes estados o valores de props para ver cómo reacciona el componente, acelerando el proceso de desarrollo y solución de errores._

    Respuesta (D): Incorrecto. Aunque cambiar el tema es una opción de personalización, no es una funcionalidad de depuración. Para más detalles, revisa la Lección: React DevTools, alrededor del minuto 00:02:12.
