import { Navigate, Routes, Route } from 'react-router-dom'

import { Navbar } from '../../ui'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} exact />
          <Route path='dc' element={<DcPage />} exact />

          <Route path='search' element={<SearchPage />} exact />
          <Route path='hero/:heroId' element={<HeroPage />} exact />

          <Route path='/' element={<Navigate to='/marvel' />} exact />
        </Routes>
      </div>
    </>
  )
}
