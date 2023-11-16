import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)

  return logged ? <Navigate to='/marvel' /> : children
}
