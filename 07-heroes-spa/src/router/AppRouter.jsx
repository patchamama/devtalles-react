import { Navigate, Routes, Route } from 'react-router-dom'

import { LoginPage } from '../auth'
import { MarvelPage, DcPage } from '../heroes'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='marvel' element={<MarvelPage />} exact />
        <Route path='dc' element={<DcPage />} exact />

        <Route path='login' element={<LoginPage />} exact />

        <Route path='/' element={<Navigate to='/marvel' />} exact />
      </Routes>
    </>
  )
}
