import React from 'react'
import { Link } from 'react-router-dom'

function DefaultHeader() {
  return (
    <div className='flex items-center gap-8 px-6 py-3'>
      <div className='text-2xl'>LOGO</div>
      <div className='flex flex-auto gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/document'>Document</Link>
      </div>
      <div>
        <div>User Avatar</div>
      </div>
    </div>
  )
}

export default DefaultHeader
