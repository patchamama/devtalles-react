import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>

      {/* <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/about'>About</Link> */}
      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />

        {/* <Route path='*' element={<h1>404 Not Found</h1>} /> */}
        <Route path='*' element={<Navigate to='/about' />} />
      </Routes>
    </>
  )
}
