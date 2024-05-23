import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'

import DefaultLayout from 'src/layouts/Default'
import FullScreenLayout from 'src/layouts/FullScreen'
import LoginPage from 'src/pages/Auth/Login'
import SignupPage from 'src/pages/Auth/Signup'
import HomePage from 'src/pages/Home'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      <Route path='/' element={<FullScreenLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>
      <Route path='*' element={<div>404 Page</div>} />
    </Routes>
  )
}

export default App
