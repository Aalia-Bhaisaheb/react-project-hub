import React, { useState } from 'react'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-zinc-900 border-b border-zinc-700 px-6 py-4 sticky top-0 z-50'>

      <div className='flex items-center justify-between'>

        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>

          <span className="text-white font-semibold text-lg tracking-tight">
            ProfileHub
          </span>
        </div>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-8 text-sm text-zinc-300'>
          <li>
            <a href='#' className='hover:text-white transition-colors duration-200'>
              Home
            </a>
          </li>

          <li>
            <a href='#' className='hover:text-white transition-colors duration-200'>
              Team
            </a>
          </li>

          <li>
            <a href='#' className='hover:text-white transition-colors duration-200'>
              Projects
            </a>
          </li>

          <li>
            <a href='#' className='hover:text-white transition-colors duration-200'>
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className='hidden md:block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200'>
          Get Started
        </button>
        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden mt-4 flex flex-col gap-4 text-zinc-300 items-center'>
          <a href='#' className='hover:text-white'>
            Home
          </a>
          <a href='#' className='hover:text-white'>
            Team
          </a>
          <a href='#' className='hover:text-white'>
            Projects
          </a>
          <a href='#' className='hover:text-white'>
            Contact
          </a>
          <button className='bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 w-full'>
            Get Started
          </button>

        </div>
      )}

    </nav>
  )
}

export default Navbar