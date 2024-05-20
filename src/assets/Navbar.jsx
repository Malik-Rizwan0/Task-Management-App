import React from 'react'

function Navbar() {
  return (
    <nav className='w-full text-xl  leading-9 bg-orange-600  text-white px-4 flex justify-between'>
        <div className="logo select-none">
            <span className=' font-mono'>i</span>
            <span className='font-bold font-serif text-black'>T</span>
            ask
        </div>
        <ul className='flex gap-5 '>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
