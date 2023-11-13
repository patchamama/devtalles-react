import { UserContext } from './UserContext'

const user = {
  id: 1234,
  name: 'Fernando',
  email: 'fernando@gmail',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
      {children}
    </UserContext.Provider>
  )
}
