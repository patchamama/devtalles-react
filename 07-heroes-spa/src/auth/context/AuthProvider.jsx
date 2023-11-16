import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState)

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
