import React from 'react';
import Map from './Map';
import { useState } from 'react'; 
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import OrderCard from './OrderCard';


function Homepage() {

  const [isOpen, setIsOpen] = useState(false);
  const [orderReceived, SetOrderReceived] = useState(false);

  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <Navbar />
      <Map />

      { orderReceived && <div className="flex justify-center items-center fixed w-full max-w-2xl z-20 opaicty-50 h-screen">
        <OrderCard />
      </div>}

    <div className="flex flex-col">
      {/* Fixed button at the bottom */}
        <div className=" w-full max-w-2xl fixed bottom-0 left-1/2 -translate-x-1/2 z-10 bg-black hover:bg-gray-900 text-white font-bold p-4 rounded-t flex flex-row justify-end"
        >
        <button className="text-xl" onClick={() => setIsOpen(true)}><MenuIcon className=" text-lg text-white" /></button>
        </div>

      {/* Pop-up div */}
        <div
          className=" w-full max-w-2xl fixed bottom-0  z-20 bg-black text-white font-bold p-4 rounded-t flex flex-col justify-center overflow-y-auto"
          style={{
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <button
            className=" top-4 absolute right-4 text-white hover:text-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon className="text-white"/>
          </button>
          <div className="mx-auto flex flex-col w-full max-w-2xl p-4">
            <h2>Order Details</h2>
            <p>Address</p>
            <p>Name</p>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Homepage;
