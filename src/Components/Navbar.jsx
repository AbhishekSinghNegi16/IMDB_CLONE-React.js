import React from 'react'
import logo from '../Images/movie-clapper-open.png';
import {Link}  from "react-router-dom";

function Navbar() {
  return (
    <div className=' flex border space-x-8 items-center pl-3 py-4 '>
      <img className='w-[50px]' src={logo} alt=''></img>
      <Link to='/' className='text-blue-500 text-2xl font-bold'>Home</Link>
      <Link to='/watchlist' className='text-blue-500 text-2xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar
