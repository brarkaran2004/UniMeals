import React from 'react';
import Map from './Map';
import { useState } from 'react'; 


function Homepage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col max-w-2xl mx-auto">
        <Map />

    <div className="flex flex-col">
      {/* Fixed button at the bottom */}
        <div className=" w-full max-w-2xl fixed bottom-0 left-1/2 -translate-x-1/2 z-10 bg-gray-800 hover:bg-gray-900 text-white font-bold p-4 rounded flex flex-row justify-end"
        >
        <button className="text-xl" onClick={() => setIsOpen(true)}>Open Order Details</button>
        </div>

      {/* Pop-up div */}
        <div
          className=" w-full fixed bottom-0 left-0 z-10 bg-gray-800 hover:bg-gray-900 text-white font-bold p-4 rounded flex flex-col justify-center"
          style={{
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <button
            className=" top-4 absolute right-4 text-white hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <div className="mx-auto flex flex-col">
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
