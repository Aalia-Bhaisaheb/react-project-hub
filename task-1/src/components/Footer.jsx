import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 border-t border-zinc-700 px-6 py-8 relative w-full'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center'>
            <span className='text-white font-bold text-xs'>P</span>
          </div>
          <span className='text-zinc-400 text-sm'>ProfileHub</span>
        </div>

        {/**links */}
        <ul className='flex items-center gap-6 text-xs text-zinc-500'>
          <li>
            <a href='#' className='hover:text-zinc-300 transition-colors duration-200'>Privacy</a>
          </li>
          <li>
            <a href='#' className='hover:text-zinc-300 transition-colors duration-200'>Terms & Conditions</a>
          </li>
          <li>
            <a href='#' className='hover:text-zinc-300 transition-colors duration-200'>Support</a>
          </li>
        </ul>

        <p className='text-zinc-600 text-xs hover:text-zinc-400'>
        © 2026 ProfileHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer