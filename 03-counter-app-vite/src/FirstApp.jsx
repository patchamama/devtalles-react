// Sí no hay ninguna dependencia del component con constantes, variables o funciones
// mejor definirla fuera del componente (functional component).

const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando',
}

const getResult = (a, b) => {
  return a + b
}

// ----------
export const FirstApp = () => {
  return (
    <>
      {/* <code>{newMessage}</code>  esto devuelve un error pues newMessage es un objeto */}
      <code>{JSON.stringify(newMessage)}</code>
      <p>Soy un subtitulo</p>
      <p>{getResult(1, 2)}</p>
    </>
  )
}

export default FirstApp
