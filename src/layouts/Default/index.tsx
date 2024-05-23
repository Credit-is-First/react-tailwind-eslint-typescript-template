import React from 'react'
import { Outlet } from 'react-router-dom'

import DefaultHeader from 'src/layouts/Default/Header'

function DefaultLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <DefaultHeader />
      <Outlet />
    </div>
  )
}

export default DefaultLayout
