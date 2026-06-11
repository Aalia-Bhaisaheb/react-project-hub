import React from 'react'

const Card = ({ name, role, image, projects, followers, rating }) => {
  return (
    <div className='bg-zinc-800 border border-zinc-700 rounded-2xl p-6 h-84 flex flex-col items-center text-center gap-4 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 w-full max-w-xs overflow-y-auto'>
      <div className='relative'>
        <img src={image} alt={name} className='w-24 h-24 rounded-full object-cover ring-4 ring-zinc-700' />
        <span className='absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-zinc-800 rounded-full'></span>
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='text-white font-semibold text-lg'>{name}</h2>
        <span className='text-indigo-400 text-sm font-medium tracking-wide uppercase'>{role}</span>
      </div>

      <div className='w-full border-t border-zinc-600'></div>

      <div className='flex justify-around w-full text-sm'>
        <div className='flex flex-col items-center gap-0.5'>
          <span className='text-white font-semibold'>{projects}</span>
          <span className='text-zinc-500 text-xs'>Projects</span>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
          <span className='text-white font-semibold'>{followers}</span>
          <span className='text-zinc-500 text-xs'>Followers</span>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
          <span className='text-white font-semibold'>{rating}</span>
          <span className='text-zinc-500 text-xs'>Rating</span>
        </div>
      </div>
      
      <button className='w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2 rounded-xl transition-colors duration-200'>
        Follow
      </button>
    </div>
  )
}

export default Card
