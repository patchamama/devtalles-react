import { useState } from 'react'
import { useFetch } from './hooks'

const url = "https://api.example.com/data"
const userUrl = "https://api.example.com/user"

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  // const { data, error, loading } = useFetch(url)
  const { data, error, loading } = useFetch<Data>(url)
  // data.name data.lastName ... 

  // otro ejemplo de otro tipo de dato que puede devolver
  const { data: dataUser, error: errorUaser, loading: loadingUser } = useFetch<Data>(userUrl). //usando alias en lo devuelto
  // dataUser?.name


  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Ups! Hay un error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
