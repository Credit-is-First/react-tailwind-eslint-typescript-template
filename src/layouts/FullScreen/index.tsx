import React from 'react'
import { Outlet } from 'react-router-dom'

function FullScreenLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Outlet />
    </div>
  )
}

export default FullScreenLayout
