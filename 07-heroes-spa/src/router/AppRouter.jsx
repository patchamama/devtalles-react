import { Navigate, Routes, Route } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DcPage } from '../heroes/pages/DcPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={<MarvelPage />} exact />
        <Route path='dc' element={<DcPage />} exact />

        <Route path='login' element={<LoginPage />} exact />

        <Route path='/' element={<Navigate to='/marvel' />} exact />
      </Routes>
    </>
  )
}
