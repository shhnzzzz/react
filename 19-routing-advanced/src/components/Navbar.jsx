import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 justify-between bg-cyan-950'>
     <h2 className='text-xl font-bold'>Shahnaj's</h2>
     <div className='flex gap-10'>
      <Link className='text-lg font-bold' to='/'>Home</Link>
      <Link className='text-lg font-bold' to='/about'>About</Link>
      <Link className='text-lg font-bold' to='/product'>Product</Link>
     
     </div>
    </div>
  )
}

export default Navbar
