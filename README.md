## Notas de **Curso REACT desde cero a experto**

por _Gentleman Programming_ > https://www.youtube.com/watch?v=GMnWXlJnbNo

Código: https://github.com/Gentleman-Programming/React-Desde-0-a-Avanzado

### Instalar react con bun

```sh
bun create vite@latest <appName>
cd appName
bun install
bun run dev
```

### React batching

```js

function App() {
  const [count, setCount] = useState(0)
}

//react batching: se agrupan varias instrucciones que cada una en sí determinaría un rendering y al final hace el rendering (es una optimización)
const countMore = () = {
  setCount( count + 1)
  setCount( count + 1)
  setCount( count + 1)
  // en este caso se muestra solo el valor 1 porque con el batching react agrupa y ejecuta 3 veces el setCount pero como no se hizo el render
  // todavía, el count no se actualiza pues no se ha hecho el render y sigue siendo siempre 0 hasta que se haga el render, además, en este momento
  // guarda el valor del count actual como fijo en los 3 setCount.

  setCount( (count) => count + 1)
  setCount( (count) => count + 1)
  setCount( (count) => count + 1)
  // En este caso ejecuta un método `(count) => count + 1` y toma el valor actual del count y le suma una, y después se vuelve a ejecutar pero
  // count se actualizó a +1, y al final se hace el render con el valor final. Es decir, el setCount va a guardar una operación que se ejecuta tomando
  // el valor actual del count en ese momento y le suma 1 tomando el valor actual en el parámetro (count).
}

return (
  <>
    <button label={`Count is ${count}`} onClick={countMore}>
      count is {count}
    </button>
)
```

### useEffect()

Mejor siempre usar este hook solamente sí se hace referencia en el mismo a llamadas a lógica externa como una API externa (fetch), procesamiento de parámetros de URL, sino no es necesario seguramente. Sí se llama a una función para hacer una llamada a una api, mejor sacar esta función del cuerpo del useEffect() y llamarla en este, pero no poner la función dentro del useEffect.

Ver: [Example useEffect()](./gentleman_programming_examples/example_useEffect.tsx)
