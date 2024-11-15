import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const[open,setopen] = useState(false)

    const trigger = ()=>{
        setopen(!open)
    }
    if (open == false) return( <div className="flex z-20 fixed w-full max-w-2xl"><button onClick={trigger} className='p-4 z-20'><MenuIcon /></button></div> )
  return (
   
    <div className=' fixed flex z-10 flex-col p-4 w-6/12 sm:w-2/12 min-h-screen bg-black'>
        <div className=''>
        <button onClick={trigger}><CloseIcon  className='text-white'/></button>
        </div>

        <div className='py-4 text-4xl pt-32 text-white px-2'>
            <button>Wallet</button>
        </div>
        <div className='text-4xl py-7 text-white px-2'>
        <button>Wallet</button>
        </div>
    </div>
  )
}

export default Navbar
