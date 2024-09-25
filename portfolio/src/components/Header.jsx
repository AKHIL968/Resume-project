import React from 'react'

const Header = () => {
  return (
    <div className='border-b border-white/20 w-full h-12 fixed top-0 z-50 backdrop-blur-md flex justify-between items-center'>
      <h1 className='text-white text-3xl px-4 py-1'>Akhil</h1>
      <a
        href="/Mali-Akhil.pdf" // Update this to the actual path of your PDF file
        download
        className='text-dark_blue text-lg px-2 py-1 border border-white/30 rounded-xl hover:bg-white bg-white hover:text-dark_blue transition-colors'
      >
        Download CV
      </a>
    </div>
  )
}

export default Header