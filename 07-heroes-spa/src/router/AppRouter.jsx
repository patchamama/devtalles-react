import { Routes, Route } from 'react-router-dom'

import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* <Route path='login' element={<LoginPage />} exact /> */}

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path='/*' element={<HeroesRoutes />} exact /> */}
      </Routes>
    </>
  )
}
